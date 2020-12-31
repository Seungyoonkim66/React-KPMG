import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root:{
        float:'right',
    }
}));


function LogoutButton({ logout, history }) {

    const classes = useStyles();
    const handleClick = () => {
        logout()
        history.push("/")
    }
    return (
        <div className={classes.root}>
            <Button onClick={handleClick} color="secondary">logout</Button>
        </div>
    );
}

export default withRouter(LogoutButton)