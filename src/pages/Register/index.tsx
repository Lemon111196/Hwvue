import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { RegisterContainer } from "./style";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import * as yup from 'yup';
import { passwordRegex } from "../../services/regex";
import { useForm } from "react-hook-form";
import { IForm } from "./interface";
import { yupResolver } from "@hookform/resolvers/yup";



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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const { register, handleSubmit, formState } = useForm<IForm>({
    resolver: yupResolver(schema),
  });
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
            {...register("username")}
            color="success"
            id="filled-basic"
            label="Username"
            variant="filled"
            sx={{ input: { color: 'white' } }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
          ></TextField>
        </div>
        <div className="inputForm">
          <TextField className="input"

            color="success"
            id="filled-basic"
            label="Name"
            variant="filled"
            sx={{ input: { color: 'white' } }}
            InputLabelProps={{
              style: { color: '#fff' },
            }}
          ></TextField>
        </div>
        <div className="inputForm">
          <TextField className="input"

            color="success"
            id="filled-basic"
            label="Password"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            inputProps={{ style: { color: `white` } }}
            color="success"
            id="filled-basic"
            label="Confirm Password"
            variant="filled"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          <Button color="secondary"
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
