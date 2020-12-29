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
        borderRadius: '4px',
        overflow: 'auto',
        boxShadow: '1px 1px 1px #555555',
    },
    box:{
        borderRadius: '4px',
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    listTitle: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        textAlign:'left',
        paddingLeft: theme.spacing(2),
        fontSize: '20px',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    }
}));


export default function FileList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box className={classes.box} height={682.5}>
                <div className={classes.listTitle} id='filelist-title'>Files</div>
                <List component="nav">{fileList}</List>
            </Box>
        </div>
    );
}
