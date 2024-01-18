import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { LoginContainer } from "./style";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';

export default function Login() {
  return (
    <LoginContainer>
      <div>
        <h1>Login</h1>
        <div className="inputForm">
          <TextField className="input" 
          color="success"
          label="Username" 
          variant="filled"
          ></TextField>
          <PersonIcon className="icon" />
        </div>
        <div className="inputForm">
          <TextField className="input"
          color="success"
          type="password"
          label="Password" 
          variant="filled"
          ></TextField>
          <VisibilityIcon className="icon"/>
        </div>
        <div>
          <div className="checkbox">
            <FormControlLabel control={<Checkbox />} label="Remember me" />
            <p><Link className="link" to='/register'>Forgot Password? </Link></p>
          </div>
          <Button color="secondary" 
          type="submit"
          variant="contained"
          className="btn"
          >Login</Button>
        </div>
        <p className="register">Don't you have an account?<Link className="link" to='/register'>Register</Link></p>
      </div>
    </LoginContainer>
  )
}
