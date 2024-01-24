import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { RegisterContainer } from "./style";
import { Link, useNavigate, useParams } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from "react";
import { IForm } from "./interface";
import { toast } from "react-toastify";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiService } from "../../services";



export default function Register() {
  const formDefaultValues = {
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: formDefaultValues
  })
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  //!Create a new account~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const createAccount: SubmitHandler<IForm> = async (data) => {
    console.log(data);
    try {
      const response = await apiService.post(`/auth/register`, data)
      // console.log('check' , response);
      if (response.status === 201) {  
        toast.success('Account registered successfully');
        navigate('/auth/login')
      }
    } catch (error) {
      toast.error('Error registering account');
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
      <div className="form-wrapper">
        <h1>Sign up</h1>
        <div className="inputForm">
          <Controller
            control={control}
            name="username"
            render={({ field }) =>
              <TextField
                {...field}
                className="input"
                name="username"
                color="success"
                id="filled-basic"
                label="Username"
                variant="filled"
                sx={{ input: { color: 'white' } }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />}
          />
          {errors.username && (
            <span className="error">{errors?.username?.message?.toString()}</span>
          )}
        </div>
        <div className="inputForm">
          <Controller
            control={control}
            name="name"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                name="name"
                color="success"
                id="filled-basic"
                label="Name"
                variant="filled"
                sx={{ input: { color: 'white' } }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />}
          />
          {errors.name && (
            <span className="error">{errors?.name?.message?.toString()}</span>
          )}
        </div>
        <div className="inputForm">
          <Controller
            control={control}
            name="password"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                name="password"
                color="success"
                id="filled-basic"
                label="Password"
                variant="filled"
                type={showPassword ? 'text' : 'password'}
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
              />}
          />
          {errors.password && (
            <span className="error">{errors?.password?.message?.toString()}</span>
          )}
        </div>
        <div className="inputForm">
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                name="confirmPassword"
                inputProps={{ style: { color: `white` } }}
                color="success"
                id="filled-basic"
                label="Confirm Password"
                variant="filled"
                type={showConfirmPassword ? 'text' : 'password'}
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
              />}
          />
          {errors.confirmPassword && (
            <span className="error">{errors?.confirmPassword?.message?.toString()}</span>
          )}
        </div>
        <div>
          <Button
            onClick={handleSubmit(createAccount)}
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
