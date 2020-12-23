import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        borderRadius: '4px',
        overflow: 'auto',
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function FileList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box bgcolor="primary.main" height={535}>
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="File" />
                    </ListItem>
                    <ListItemLink href="#simple-list">
                        <ListItemText primary="File" />
                    </ListItemLink>
                </List>
            </Box>
        </div>
    );
}
