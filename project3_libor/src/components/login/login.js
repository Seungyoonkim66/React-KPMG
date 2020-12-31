import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Logo from '../main_ver2/logo';
import LoginInput from './logininput';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'left',
    },
    div: {
        backgroundColor: 'rgba(107, 186, 167, 0.5)',
        height: '70%',
    },
    container: {
        padding: 0,
        height: '100%',
    },
    gridContainer: {
        marginTop: theme.spacing(4),
        height: '100%',
    },
    card: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        height: '60%',
        marginTop: theme.spacing(13),
        borderRadius: '4px',
        width: '60%',
        boxShadow: '1px 1px 4px grey',
        padding: theme.spacing(2)
    },
}));


export default function Login() {
    const classes = useStyles();

    return (
        <Box height={900} className={classes.root}>
            <Logo />
            <div className={classes.div}>
                <Container className={classes.container}>
                    <Grid container direction="row" justify="center" alignItems="stretch" className={classes.gridContainer}>
                        <Grid item xs={7} className={classes.gridItem}>
                           
                        </Grid>

                        <Grid item xs={5} className={classes.gridItem}>
                            <div className={classes.card}>
                                <div style={{ fontSize: '50px', color: '#fff' }}>Login</div>
                                <div id='login_card_txt' style={{ fontSize: '10px', color: '#999', borderBottom: '1px solid #999', paddingBottom: '8px' }}>Welcome. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                <LoginInput />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Box>
    );
}


