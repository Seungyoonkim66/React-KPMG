import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import { deepPurple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import UploadButton from './uploadbutton';

import ResultTable from './resulttable';

import FileList from './filelist';
import KPMGlogo from '../../static/KPMG_logo_white.svg';
import PopUp from './popup';

const user = "user_name";

const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: theme.spacing(1),
    },
    icon: {
        position: 'relative',
        top: '35%',
    },
    avatar: {
        backgroundColor: deepPurple[50],
        color: deepPurple[500],
    },
    logo: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        whiteSpace: 'wrap',
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
    },
    user: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: '#33334c',
        borderRadius: '4px',
    },
}));



export default function Main() {
    const classes = useStyles();

    return (
        <Container fluid="true">
            <Grid container justify="center" alignItems="stretch" >
                <Grid item xs={3}>
                    <Box bgcolor="primary.light" className={classes.logo} height={200}>
                        <a href="/"><img src={KPMGlogo} alt="KPMG_logo" style={{ width: '40%', marginBottom: '3%' }} /></a>
                        <div className={classes.user} id='user-info'>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Avatar className={classes.avatar}><PersonIcon /></Avatar>
                                <p style={{ paddingLeft: '10px', fontSize: '20px', lineHeight: '10px' }}>{user} </p>
                            </div>
                            <div id='p-intro'>user info or site introduction</div>
                        </div>
                        <div className={classes.user} id='user-info'></div>
                    </Box>
                    <Box bgcolor="primary.light" color='text.primary' className={classes.box} height={100}>
                        <UploadButton />
                    </Box>
                    <Box bgcolor="primary.light" className={classes.box} height={550}>
                        <FileList />
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <Box bgcolor="primary.light" className={classes.box} height={898}>
                        <div style={{ textAlign: 'left', padding: '5% 2%', fontSize: '3rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            libor
                <PopUp btnTitle="how to use" />
                        </div>
                        <ResultTable />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

