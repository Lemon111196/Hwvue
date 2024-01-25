import { Button, Card, MenuItem, TextField } from "@mui/material";
import { NoteContainer } from "./style";
import { useState } from "react";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
export default function Note() {
  const [status, setStatus] = useState('normal')

  const formDefaultValues = {
    title: '',
    note: '',
    status: 'normal'
  }

  const getStatusBorderColor = (status:any) => {
    switch (status) {
      case 'normal':
        return 'blue';
      case 'highlight':
        return 'green';
      case 'important':
        return 'red';
      default:
        return 'blue'; // Default color
    }
  }

  const borderColor = getStatusBorderColor(status)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: formDefaultValues
  })


  const createNoteCard = () => {

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
            name="note"
            render={({ field }) =>
              <TextField
                className="text"
                {...field}
                label="Note"
              />}
          />
          {errors.note && (
            <span className="error">{errors?.note?.message?.toString()}</span>
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
 
                select // tell TextField to render select
                label="Status"
              >
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="important">Important</MenuItem>
                <MenuItem value="highlight">Highlight</MenuItem>
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
        <Card className="card"
        sx={{ border: `5px solid ${borderColor}`}}>
          <div className="head">
            <h3>Alo</h3>
            <div className="icon">
              <ModeEditOutlineIcon className="edit" />
              <DeleteIcon className="delete" />
            </div>
          </div>
          <p>status</p>
          <p>lorem*5kjkljkljkljkljkljkljkljjkljlkljkl</p>
        </Card>
      </div>
    </NoteContainer>
  )
}
