import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { RegisterContainer } from "./style";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

export default function Register() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

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
                        id="filled-basic"
                        label="Password"
                        variant="filled"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        type ={showConfirmPassword ? 'text' : 'password'}
                        value={ confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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
                <p className="back">Already have an account?<Link className="link" to='/login'>Sign in</Link></p>
            </div>
        </RegisterContainer>
    )
}
