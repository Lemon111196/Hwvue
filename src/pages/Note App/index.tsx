import { Badge, Button, Card, MenuItem, TextField } from "@mui/material";
import { NoteContainer, TextFieldStyle } from "./style";
import { ChangeEvent, useEffect, useState } from "react";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { INote } from "./interface";
import { apiService } from "../../services";
import { toast } from "react-toastify";
import Dialog from "../../components/Modal";
export default function Note() {
  // const [status, setStatus] = useState('normal')
  const [notes, setNotes] = useState<INote[]>([]);
  const [selectedNote, setSelectedNote] = useState<INote | null>(null);

  const formDefaultValues = {
    title: '',
    content: '',
    status: "NORMAL",
  }

  const getStatusBorderColor = (status: any) => {
    switch (status) {
      case 'NORMAL':
        return '#00BFFF';
      case 'HIGHLIGHT':
        return '#00FF00';
      case 'IMPORTANT':
        return '#FF3030';
      default:
        return '#00BFFF';
    }
  }
  const getNoteList = async () => {
    try {
      const response = await apiService.get('note/list');
      console.log(response);
      console.log(notes);
      if (response.status === 200) {
        setNotes(response.data.notes);
      }

    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getNoteList();
  }, []);
  //! Create a new note ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const createNoteCard = async (data: any) => {
    const newNote: INote = {
      title: data.title,
      content: data.content,
      status: data.status,
    };
    console.log(data);
    try {
      const response = await apiService.post(`/note/create`, data)
      console.log(response);
      if (response.status === 200) {
        toast.success("Created successfully")
      }
      setNotes([...notes, newNote]);
      reset();
    } catch (error) {
      toast.error('Create failed')
    }
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: formDefaultValues
  })

  //!Update a note ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//!

  const updateNote = async (updateData: any) => {
    try {
      const response = await apiService.put(`/note/update/${updateData.id}`, updateData)
      console.log(response);
      getNoteList();
      setSelectedNote(null);
    } catch (error) {
      toast.error('Update Failed');
      console.log(error);
    }
  }

  //! Delete a note ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//!
  const onDelete = (noteId: string) => {
    deleteNote(noteId)
  }

  const deleteNote = async (noteId: string) => {
    try {
      const response = await apiService.delete(`/note/delete/${noteId}`);
      console.log(response);
      if (response.status === 200) {
        toast.success('Deleted successfully')
        getNoteList();
      }
    } catch (error) {
      toast.error('Delete failed');
    }
  }

  return (
    <NoteContainer>
      <div className="createNote">
        <div className="createTitle">
          <Controller
            control={control}
            name="title"
            render={({ field }) =>
              <TextField
                className="text"
                {...field}
                label="Title"
              />}
          />
          {errors.title && (
            <span className="error">{errors?.title?.message?.toString()}</span>
          )}
        </div>
        <div className="createContent">
          <Controller
            control={control}
            name="content"
            render={({ field }) =>
              <TextField
                className="text"
                {...field}
                label="Content"
              />}
          />
          {errors.content && (
            <span className="error">{errors?.content?.message?.toString()}</span>
          )}
        </div>
        <div className="createStatus">
          <Controller
            control={control}
            name="status"
            render={({ field }) =>
              <TextField
                className="select"
                {...field}
                select
                label="Status"
              >
                <MenuItem value="NORMAL">Normal</MenuItem>
                <MenuItem value="IMPORTANT">Important</MenuItem>
                <MenuItem value="HIGHLIGHT">Highlight</MenuItem>
              </TextField>}
          />
        </div>
        <Button
          className="CreateBtn"
          variant="outlined"
          onClick={handleSubmit(createNoteCard)}
        >Create</Button>
      </div>
      <div className="note">
        {notes.map((data, index) => (
          <Card key={index} className="card" sx={{ border: `5px solid ${getStatusBorderColor(data.status)}` }}>
            <div className="head">
              <h3>{data.title}</h3>
              <div className="icon">
                <ModeEditOutlineIcon className="edit" onClick={() => setSelectedNote(data)} />
                <DeleteIcon className="delete" onClick = {() => onDelete(notes.id)}/>
              </div>
            </div>
            <Badge className="badge" badgeContent={`${data.status} `} color="secondary" />
            <p className="note-content">{data.content}</p>
          </Card>
        ))}
      </div>
      <Dialog
        open={!!selectedNote}
        title="Update Note"
        submitBtn="Update"
        onCancel={() => setSelectedNote(null)}
        onSubmit={handleSubmit(() => updateNote(selectedNote))}
      >
        <div className="text-field-title">
          <TextFieldStyle
            label="Title"
          >
          </TextFieldStyle>
        </div>

        <TextFieldStyle
          className="text-field-content"
          label="Content"
        >
        </TextFieldStyle>
        <TextFieldStyle
          label="Status"
          select
        >
          <MenuItem value="NORMAL">Normal</MenuItem>
          <MenuItem value="IMPORTANT">Important</MenuItem>
          <MenuItem value="HIGHLIGHT">Highlight</MenuItem>
        </TextFieldStyle>
      </Dialog>

    </NoteContainer>
  )
}
