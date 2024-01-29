import { Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField } from "@mui/material";
import { LoginContainer } from "./style";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { apiService } from "../../services";
import { toast } from "react-toastify";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./schema";
import { IForm } from "./interface";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);

  const formDefaultValues = {
    username: '',
    password: '',
  }
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: formDefaultValues
  })


  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  //! Logging in~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const gotoDashboard: SubmitHandler<IForm> = async (data) => {
    console.log(data);
    try {
      setLoading(true)
      const response = await apiService.post(`/auth/login`, data);
      console.log(response);
      if (response.status === 200) {
        toast.success('Account logging in successfully');
        // console.log(toast);
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/');
      } else {
        toast.error('Error logging in. Please try again.');
      }
    } catch (error) {
      toast.error('Error logging in. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  const toggleBtn = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LoginContainer>
      <div>
        <h1>Login</h1>
        <div className="inputForm">
          <Controller
            control={control}
            name="username"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                color="success"
                label="Username"
                variant="filled"
                sx={{ input: { color: 'white' } }}
                InputLabelProps={{
                  style: { color: '#fff' },
                }}
              />}
          />
          <PersonIcon className="icon" />
        </div>
        {errors.username && (
          <span className="error">{errors?.username?.message?.toString()}</span>
        )}
        <div className="inputForm">
          <Controller
            control={control}
            name="password"
            render={({ field }) =>
              <TextField
                className="input"
                {...field}
                color="success"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                variant="filled"
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
        </div>
        {errors.password && (
          <span className="error">{errors?.password?.message?.toString()}</span>
        )}
        <div>
          <div className="checkbox">
            <FormControlLabel control={<Checkbox sx={{ color: "white" }} color="secondary" />} label="Remember me" />
            <p><Link className="link" to='/auth/register'>Forgot Password? </Link></p>
          </div>
          <Button color="secondary"
            type="submit"
            variant="contained"
            className="btn"
            onClick={handleSubmit(gotoDashboard)}
          // disable={loading}
          // loading={loading}
          // disabled
          >{loading ? 'Logging in...' : 'Log in'}</Button>
        </div>
        <p className="register">Don't you have an account?<Link className="link" to='/auth/register'>Register</Link></p>
      </div>
    </LoginContainer>
  )
}