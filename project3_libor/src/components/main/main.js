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

const user = "user_name";

const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        margin: theme.spacing(2),
    },
    divider: {
        margin: theme.spacing(2, 0),
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
        whiteSpace: 'nowrap',
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
    },
    user: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
        backgroundColor: '#33334c',
        borderRadius: '4px',
    },
}));



export default function Main() {
    const classes = useStyles();

    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={3} direction="column" justify="center" alignItems="stretch" >
                    <Box bgcolor="primary.light" className={classes.logo} height={200}>
                        <img src={KPMGlogo} alt="KPMG_logo" style={{ width: '40%', marginBottom:'3%' }} />
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
                    <Box bgcolor="primary.light" className={classes.box} height={535}>
                        <FileList />
                    </Box>
                </Grid>
                <Grid item xs={9} direction="column" justify="center" alignItems="stretch" >
                    <Box bgcolor="primary.light" className={classes.box} height={900}>
                        <ResultTable />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

