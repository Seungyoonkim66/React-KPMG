import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import UploadButton from './uploadbutton_ver2';
import Divider from '@material-ui/core/Divider';
import ResultTable from '../main_ver2/resulttable_ver2';
import FileList from '../main_ver2/filelist_ver2';
import KPMGlogo from '../../static/KPMG_logo_white.svg';
import lighthouselogo from '../../static/lighthouse_logo.png';


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        height: '100%',
        width: '100%',
    },
    titleContainer: {
        color: 'white',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3),
    },
    uploadContainer: {
    },
    dataContainer: {
        backgroundColor: 'rgba(107, 186, 167, 0.5)',
    },
    dataTable: {
        display: 'flex',
        flexDirection: 'row',
    },
    divider: {
        marginLeft: "10%",
        marginRight: "10%",
        backgroundColor: '#f5f5f5',
    },

    container: {
        padding: 0,
    },
    grid: {
    },
    box: {
        paddingTop: theme.spacing(1),
    }
}));



export default function Main() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container direction="row" justify="center" alignItems="center" >
                        <Grid item> <a href="/"><img src={KPMGlogo} alt="KPMG_logo" width='150px' /></a></Grid>
                        <Divider orientation="vertical" flexItem className={classes.divider} color='secondary.light' />
                        <Grid item><a href="/" style={{textDecoration:'none', color:'inherit'}}><div style={{ fontSize: '55px' }}>Libor</div></a></Grid>
                        <Divider orientation="vertical" flexItem className={classes.divider} color='secondary.light' />
                        <Grid item><a href="/"><img src={lighthouselogo} alt="KPMG_logo" width='70px'/></a></Grid>
                    </Grid>
                </Container>
            </div>

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

