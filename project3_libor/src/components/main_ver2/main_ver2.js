import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import UploadButton from './uploadbutton_ver2';
import ResultTable from '../main_ver2/resulttable_ver2';
import FileList from '../main_ver2/filelist_ver2';
import Logo from './logo';


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        height: '100%',
        width: '100%',
    },
    dataContainer: {
        backgroundColor: 'rgba(107, 186, 167, 0.5)',
    },
    dataTable: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        padding: 0,
    },
    box: {
        paddingTop: theme.spacing(1),
    }
}));



export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Logo />

            <div className={classes.dataContainer}>
                <Container className={classes.container}>
                    <Box height={700} className={classes.box}>
                        <Grid container direction="row" justify="center" alignItems="stretch" className={classes.grid}>
                            <Grid item xs={2}><FileList /></Grid>
                            <Grid item xs={10}><ResultTable /> </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>

            <div className={classes.uploadContainer}>
                <Container maxWidth="lg" className={classes.container}><UploadButton /></Container>
            </div>
        </div>
    );
}

