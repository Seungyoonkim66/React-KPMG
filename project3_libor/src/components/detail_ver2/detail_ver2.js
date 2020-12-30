import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Files from '../../static/samplefile.json';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import QAList from './qalist';
import ExtractedImage from './extractedimage';
import DocInfo from './docinfo';


const useStyles = makeStyles((theme) => ({
    titleContainer: {
        color: 'white',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3),
    },
    QAContainer: {
        backgroundColor: 'rgba(107, 186, 167, 0.5)',
    },
    fileInfoContainer: {
        paddingTop: theme.spacing(1.5),
    },
    infoBox: {
        backgroundColor: 'rgba(251,161,0, 0.5)',
        borderRadius: '4px',
    },
    grid: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '4px',
        boxShadow: '1px 1px 1px #555555',
        wordWrap: 'break-word',
        whiteSpace: 'wrap',
        overflow:'auto',
    }
}));


export default function Detail({ fileId }) {
    const classes = useStyles();
    const file = Files.files[fileId];

    return (
        <div className={classes.root}>
            {/* file name */}
            <div className={classes.titleContainer}>
                <Container maxWidth="lg">
                    <Grid container direction="row" justify="space-between">
                        <div style={{ fontSize: '50px' }}>{file.name}</div>
                        <div><Link to='/' style={{ textDecoration: 'none' }}> <IconButton aria-label="delete"><CloseIcon fontSize="large" /></IconButton></Link></div>
                    </Grid>
                </Container>
            </div>
            
            <div className={classes.QAContainer}>
                <Container>
                    <Grid container direction="row" justify="space-between">
                        {/* question and result value pairs list */}
                        <Grid item xs={4} className={classes.grid}><Box height={650} className={classes.box}>
                            <QAList fileId={file.id}/>
                        </Box></Grid>
                        {/* file image , marking extracted parts */}
                        <Grid item xs={8} className={classes.grid}><Box height={650} className={classes.box}>
                            <ExtractedImage fileId={file.id} />
                        </Box></Grid>
                    </Grid>
                </Container>
            </div>
            {/* document information table */}
            <div className={classes.fileInfoContainer}>
                <Container>
                    <Box height={120} className={classes.infoBox}><DocInfo fileId={file.id} /></Box>
                </Container>
            </div>
        </div>
    );
}

