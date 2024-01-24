import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { RegisterContainer } from "./style";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ChangeEvent, useState } from "react";
import * as yup from 'yup';
import { passwordRegex } from "../../services/regex";
import { IForm } from "./interface";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  username: yup.string()
    .required('Username is required')
    .max(20, 'Username must be at most 20 characters'),
  name: yup.string()
    .required('Name is required')
    .max(20, 'Name must be at most 20 characters'),
  password: yup.string()
    .required('Password is required')
    .matches(passwordRegex, 'Password is not valid')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required')
    .matches(passwordRegex, 'Password is not valid').min(8, 'Password must be at least 8 characters'),
})

export default function Register() {
  const [register, setRegister] = useState<IForm>({
    username: '',
    name: '',
    password: '',
    confirmPassword: ''
  })
  const [alert, setAlert] = useState(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [registerForm, setRegisterForm] = useState<IForm[]>([]);

  const handleRegisterForm = (e:ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [e.target?.name]: e.target.value
    })
  }

  //!Create a new account~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const createAccount = async (e:any) => {
    e.preventDefault();
    if(register.password !== register.confirmPassword){
      toast.error('Password do not match')
      return;
    }
  }

  const toggleBtn = () => {
    setShowPassword(!showPassword);
  }
  const toggleBtnConfirm = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }
  return (
    <RegisterContainer>
      <div>
        <h1>Sign up</h1>
        <div className="inputForm">
          <TextField className="input"
            name="username"
            value={register.username}
            color="success"
            id="filled-basic"
            label="Username"
            variant="filled"
            sx={{ input: { color: 'white' } }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            onChange={handleRegisterForm}
          ></TextField>
        </div>
        <div className="inputForm">
          <TextField className="input"
          value={register.name}
            name="name"
            color="success"
            id="filled-basic"
            label="Name"
            variant="filled"
            sx={{ input: { color: 'white' } }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            onChange={handleRegisterForm}
          ></TextField>
        </div>
        <div className="inputForm">
          <TextField className="input"
            name="password"
            color="success"
            id="filled-basic"
            label="Password"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            value={register.password}
            onChange={handleRegisterForm}
            sx={{ input: { color: 'white' } }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleBtn} edge="end">
                    {showPassword ? <VisibilityIcon className="iconPassword" /> : <VisibilityOffIcon className="iconPassword" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>
        <div className="inputForm">
          <TextField className="input"
            name="confirmPassword"
            inputProps={{ style: { color: `white` } }}
            color="success"
            id="filled-basic"
            label="Confirm Password"
            variant="filled"
            type={showConfirmPassword ? 'text' : 'password'}
            value={register.confirmPassword}
            onChange={handleRegisterForm}
            sx={{ input: { color: 'white' } }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleBtnConfirm} edge="end">
                    {showConfirmPassword ? <VisibilityIcon className="iconPassword" /> : <VisibilityOffIcon className="iconPassword" />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>
        <div>
          <Button 
            onClick={createAccount}
            color="secondary"
            type="submit"
            variant="contained"
            className="btn"
          >Register</Button>
        </div>
        <p className="back">Already have an account?<Link className="link" to='/auth/login'>Sign in</Link></p>
      </div>
    </RegisterContainer>
  )
}
