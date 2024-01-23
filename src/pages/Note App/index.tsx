import { Button, Card, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { NoteContainer } from "./style";
import { useState } from "react";
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Note() {
  const [status, setStatus] = useState('')
  const handleChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value);
  }


  return (
    <NoteContainer>
      <div className="createNote">
        <div className="createTitle">
          <p>Title</p>
          <TextField className="text" />
        </div>
        <div className="createContent">
          <p>Note</p>
          <TextField
            className="text"
          />
        </div>
        <div className="createStatus">
          <p>Status</p>
          <Select
            className="select"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Status"
            value={status}
            onChange={handleChange}
          >
            <MenuItem value={10}>Normal</MenuItem>
            <MenuItem value={20}>Important</MenuItem>
            <MenuItem value={30}>Highlight</MenuItem>
          </Select>
        </div>
        <Button
          className="CreateBtn"
          variant="outlined">Create</Button>
      </div>
      <div className="note">
        <Card className="card">
          <div className="head">
            <h3>Alo</h3>
            <div className="icon">
              <ModeEditOutlineIcon className="edit"/>
              <DeleteIcon className="delete"/>
            </div>
          </div>
          <p>status</p>
          <p>lorem*5</p>
        </Card>
      </div>
    </NoteContainer>
  )
}
