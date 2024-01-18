import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { RegisterContainer } from "./style";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Register() {
  return (
    <RegisterContainer>
              <div>
        <h1>Login</h1>
        <div className="inputForm">
          <TextField className="input" 
          color="success"
          id="filled-basic" 
          label="Username" 
          variant="filled"
          ></TextField>
          <PersonIcon className="icon" />
        </div>
        <div className="inputForm">
          <TextField className="input"
          color="success"
          type="password"
          id="filled-basic" 
          label="Password" 
          variant="filled"
          ></TextField>
          <VisibilityIcon className="icon"/>
        </div>
        <div className="inputForm">
          <TextField className="input"
          inputProps={{style: {color: `white`}}}
          color="success"
          type="password"
          id="filled-basic" 
          label="Confirm Password" 
          variant="filled"
          ></TextField>
          <VisibilityIcon className="icon"/>
        </div>
        <div>
          <Button color="secondary" 
          type="submit"
          variant="contained"
          className="btn"
          >Register</Button>
        </div>
        <p className="back">Already have an account?<Link className="link" to='/login'>Sign in</Link></p>
      </div>
    </RegisterContainer>
  )
}
