import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom"
import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    input: {
        marginTop: theme.spacing(1),
    },
    btn: {
        backgroundColor: 'rgba(251,161,0, 0.8)',
        marginTop: theme.spacing(3),
        color: '#555'
    },
}));



export default function LoginInput({ authenticated, login }) {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const isEmailValid = ({ email }) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        else {
            return false;
        }
    }

    const authToLogin = ({ email, password }) => {

        if (isEmailValid({ email }) === true) {
            login({ email, password })
            return true;
        }
        else {
            return false;
        }
    }

    const handleLogin = () => {

        if (email !== "" && password !== "") {
            if (authToLogin({ email, password }) === true) {
                console.log("login success");
                authenticated = true;
            }
            else {
                alert('Login failed');
                setEmail("");
                setPassword("");
                authenticated = false;
            }
        }
        else {
            alert("Both email and password are required.");
        }
    }

    if (authenticated) return <Redirect to='/main' />

    return (
        <div>
            <FormControl id='auth' fullWidth={true} className={classes.formControl} variant="outlined">
                <TextField
                    className={classes.input}
                    id="auth-email"
                    type="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={({ target: { value } }) => setEmail(value)}
                />
                <TextField
                    className={classes.input}
                    id="auth-password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                />
            </FormControl>
            <InputLabel htmlFor='auth'>
                    <Button
                        variant="contained"
                        fullWidth={true}
                        disableElevation={true}
                        onClick={handleLogin}
                        className={classes.btn}
                    >login
                    </Button>
            </InputLabel>
        </div>
    );
}




//autoComplete="current-password"