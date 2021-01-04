import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';

// 서버 생기면 서버에서 GET 요청으로 받아오기 
import Files from '../../static/samplefile.json';

const getFile = Files.files;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        borderRadius: '4px',
        overflow: 'auto',
        boxShadow: '1px 1px 1px #555555',
    },
    box: {
        borderRadius: '4px',
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    listTitle: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        textAlign: 'left',
        paddingLeft: theme.spacing(2),
        fontSize: '20px',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    listTitleHighlight: {
        backgroundColor: 'rgba(255,255,255,0.85)',
        textAlign: 'left',
        paddingLeft: theme.spacing(2),
        fontSize: '15px',
    }
}));


export default function FileList() {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const numSelected = selected.length;

    const handleChange = (e) => {
        if (e.target.checked === true) {
            setSelected(selected.concat(e.target.value));
        }
        else {
            setSelected(selected.filter(row => row !== e.target.value));
        }
    }

    const handleDelete = () => {
        console.log("delete");
    }

    const fileList = getFile.map((file) =>
        <ListItem button>
            <Checkbox onChange={handleChange} value={file.id} />
            <Link key={file.id} style={{ textDecoration: 'none', color: 'black' }} to={file.id}>
                <ListItemText primary={file.name} />
            </Link>
        </ListItem>
    );

    return (
        <div className={classes.root}>
            <Box className={classes.box} height={682.5}>
                {numSelected > 0
                    ? (<div className={classes.listTitleHighlight} id='filelist-title'>
                        {numSelected} selected
                        <Tooltip title="Delete"><IconButton aria-label="delete" onClick={handleDelete}><DeleteIcon /></IconButton></Tooltip>
                    </div>)
                    : (<div className={classes.listTitle} id='filelist-title'> FILES</div>)
                }
                <List component="nav">{fileList}</List>
            </Box>
        </div>
    );
}
