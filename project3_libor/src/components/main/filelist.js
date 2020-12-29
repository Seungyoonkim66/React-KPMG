import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Files from '../../static/samplefile.json';

const getFile = Files.files;

const fileList = getFile.map((file) => 
    <Link key={file.id} style={{ textDecoration: 'none', color: 'black' }} to={file.id}>
        <ListItem button>
            <ListItemText primary={file.name}/>
        </ListItem>
    </Link>
);


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        borderRadius: '4px',
        overflow: 'auto',
    },
}));


export default function FileList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box bgcolor="primary.main" height={535}>
                <List component="nav">
                    {fileList}
                </List>
            </Box>
        </div>
    );
}
