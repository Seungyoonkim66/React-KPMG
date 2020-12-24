import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ResultValue from './resultvalue';
import SampleImage from '../../static/sample_image.jpg';
import Files from '../../static/files.json';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        whiteSpace: 'wrap',
        margin: theme.spacing(2),
        textAlign: 'left'
    },
    table: {
        backgroundColor: 'rgba(255,255, 255, 0.3)',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'wrap',
        margin: theme.spacing(2),
    },
    controlBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '50px',
    }
}));


export default function Detail({ fileIndex }) {
    const classes = useStyles();

    return (
        <Container id='detail'>
            <Grid container justify="center" alignItems="stretch">
                <Grid item xs={12} >
                    <Box bgcolor="primary.light" className={classes.box} height={50}>
                        <div className={classes.controlBar}>
                            {Files[fileIndex].name}
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <IconButton aria-label="delete" color="default">
                                    <CloseIcon fontSize="large" />
                                </IconButton>
                            </Link>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <div style={{ textAlign: 'left', marginLeft: '20px' }}>Annotations</div>
                    <Box bgcolor="primary.light" className={classes.table} height={630}>
                        <ResultValue fileIndex={fileIndex} />
                    </Box>
                </Grid>
                <Grid item xs={7} >
                    <div style={{ textAlign: 'left', marginLeft: '20px' }}>Image</div>
                    <Box bgcolor="primary.light" className={classes.box} height={630}>
                        <div style={{ height: '630px', overflow: 'auto' }}>
                            <img src={SampleImage} alt="sample_image" style={{ width: '100%' }} />
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ textAlign: 'left', marginLeft: '20px' }}>Documentation Information</div>
                    <Box bgcolor="primary.light" id='doc_info' className={classes.box} height={85}>
                        <div id='doc_info_table' style={{ display: 'flex', flexDirection: 'row', lineHeight: '1.2rem', textAlign: 'center' }}>
                            <div id='doc_info_title'
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '30%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    borderRadius: '4px',
                                    fontWeight: '600',
                                }} >
                                <div id='doc_info_table_each_row'>file name</div>
                                <div id='doc_info_table_each_row'>#pages</div>
                                <div id='doc_info_table_each_row'>processing date</div>
                                <div id='doc_info_table_each_row'>uploader</div>
                            </div>
                            <div id='doc_info_content'
                                style={{
                                    width: '70%',
                                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                    borderRadius: '4px',
                                    marginLeft: '1%',
                                    color: 'black',
                                }}>
                                <div id='doc_info_table_each_row'>{Files[fileIndex].name}</div>
                                <div id='doc_info_table_each_row'>{Files[fileIndex].pages}</div>
                                <div id='doc_info_table_each_row'>{Files[fileIndex].processing_date}</div>
                                <div id='doc_info_table_each_row'>{Files[fileIndex].uploader}</div>
                            </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

