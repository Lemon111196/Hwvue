import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { RegisterContainer } from "./style";
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ChangeEvent, useState } from "react";
import { IForm } from "./interface";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";



export default function Register() {
  const formDefaultValues = {
    username: '',
    name: '',
    password: '',
    confirmPassword: ''
  }
  const {
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: formDefaultValues,
  })

  const [registerForm, setRegisterForm] = useState<IForm>({
    username: '',
    name: '',
    password: '',
    confirmPassword: ''
  })

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const handleRegisterForm = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({
      ...registerForm,
      [e.target?.name]: e.target.value
    })
  }

  //!Create a new account~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const createAccount = async (e: any) => {
    e.preventDefault();
    if (registerForm.password !== registerForm.confirmPassword) {
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
            {...register("username")}
            name="username"
            value={registerForm.username}
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
          {errors.username && (
            <span className="error">{errors?.username?.message?.toString()}</span>
          )}
        </div>
        <div className="inputForm">
          <TextField className="input"
            {...register("name")}
            value={registerForm.name}
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
          {errors.name && (
            <span className="error">{errors?.name?.message?.toString()}</span>
          )}
        </div>
        <div className="inputForm">
          <TextField className="input"
            {...register("password")}
            name="password"
            color="success"
            id="filled-basic"
            label="Password"
            variant="filled"
            type={showPassword ? 'text' : 'password'}
            value={registerForm.password}
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
          {errors.password && (
            <span className="error">{errors?.password?.message?.toString()}</span>
          )}
        </div>
        <div className="inputForm">
          <TextField className="input"
            {...register("confirmPassword")}
            name="confirmPassword"
            inputProps={{ style: { color: `white` } }}
            color="success"
            id="filled-basic"
            label="Confirm Password"
            variant="filled"
            type={showConfirmPassword ? 'text' : 'password'}
            value={registerForm.confirmPassword}
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
          {errors.confirmPassword && (
            <span className="error">{errors?.confirmPassword?.message?.toString()}</span>
          )}
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
