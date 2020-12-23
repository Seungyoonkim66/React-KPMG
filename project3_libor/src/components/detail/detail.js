import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ResultValue from './resultvalue';
import SampleImage from '../../static/sample_image.jpg';


const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        margin: theme.spacing(2),
    },
}));


export default function Detail() {
    const classes = useStyles();

    return (
        <Container fluid>
            <Grid container>
                <Grid item xs={12} direction="column" justify="center" alignItems="stretch" >
                    <Box bgcolor="primary.light" className={classes.box} height={50}>controller</Box>
                </Grid>
                <Grid item xs={5} direction="column" justify="center" alignItems="stretch" >
                    <Box bgcolor="primary.light" className={classes.box} height={650}>
                        <ResultValue />
                    </Box>
                </Grid>
                <Grid item xs={7} direction="column" justify="center" alignItems="stretch" >
                    <Box bgcolor="primary.light" className={classes.box} height={650}>
                        <div style={{height:'650px', overflow:'auto'}}>
                        <img src={SampleImage} alt="sample_image" style={{width:'100%'}}/>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} direction="column" justify="center" alignItems="stretch" >
                    <Box bgcolor="primary.light" className={classes.box} height={100}>doc info</Box>
                </Grid>
            </Grid>
        </Container>
    );
}

