import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
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

const testUsers = [
    { email: "kim@test.com", password: "123", name: "Kim" },
    { email: "lee@test.com", password: "456", name: "Lee" },
    { email: "park@test.com", password: "789", name: "Park" },
]


export default function LoginInput() {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [auth, setAuth] = React.useState();

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
            const user = testUsers.find((user) => user.email === email && user.password === password)
            if (user === undefined) return false;
            setAuth(true);
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
            }
            else {
                alert('Login failed');
                setEmail("");
                setPassword("");
            }
        }
        else {
            alert("Both email and password are required.");
        }
    }

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
                <Link style={{ textDecoration: 'none' }} to={auth ? "/" : "/login"}>
                    <Button
                        variant="contained"
                        fullWidth={true}
                        disableElevation={true}
                        onClick={handleLogin}
                        className={classes.btn}
                    >login
                    </Button>
                </Link>
            </InputLabel>
        </div>
    );
}




//autoComplete="current-password"