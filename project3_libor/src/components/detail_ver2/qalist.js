import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import annotationlist from '../../static/annotationlist.json';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { AnnotationDelete } from '.././funct/delete';

const qalist = annotationlist.annotatonlist;

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    list: {
        height: '85%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        padding: theme.spacing(2),
    },
    listHead: {
        height: '7%',
        textAlign: 'left',
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(1),
        fontSize: '25px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    highlight: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
    },
}));


export default function QAList({ fileId }) {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);

    const handleChecked = (e) => {

        if (e.target.checked === true) {
            setSelected(selected.concat(e.target.value));
        }
        else{
            setSelected(selected.filter(row => row !== e.target.value));
        }

    }

    const handleDelete = () => {
        AnnotationDelete({selected});
        setSelected([]);
        alert("checked items are deleted :  check deleted items' annotation id in console ");
    }

    const numSelected = selected.length;

    return (
        <div className={classes.root} id='qalist'>
            <div className={clsx(classes.listHead, {
                [classes.highlight]: numSelected > 0,
            })}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subtitle1" component="div">
                        {numSelected} selected
                    </Typography>
                ) : (
                        <Typography variant="h6" id="tableTitle" component="div">
                            RESULTS
                        </Typography>
                    )}

                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                        null
                    )}
            </div>

            <Divider />

            <div className={classes.list}>
                {
                    qalist.map((qa) => {

                        if (qa.fileID === fileId)
                            return (
                                <FormControl key={qa.id}>
                                    <div style={{ marginBottom: '5%', display: 'flex', flexDirection: "row" }}>
                                        <Checkbox onChange={handleChecked} value={qa.id} inputProps={{ 'aria-label': qa.id }} />
                                        <TextField
                                            label={qa.resultKey}
                                            defaultValue={qa.resultValue}
                                            variant="outlined"
                                            fullWidth
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </div>
                                </FormControl>)
                        else
                            return null
                    })
                }
            </div>
            {/* <div className={classes.btn}><Button variant="contained" color='secondary' fullWidth onClick={handleDelete}>delete</Button></div> */}
        </div>
    );
}
