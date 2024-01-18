import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoginContainer } from "./style";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleBtn = () => {
    setShowPassword(!showPassword);
  };
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
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleBtn} edge="end">
                    {showPassword ? <VisibilityIcon className="iconPassword"/> : <VisibilityOffIcon className="iconPassword" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
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
