import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import KPMGlogo from '../../static/KPMG_logo_white.svg';
import lighthouselogo from '../../static/lighthouse_logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3),
    },
    divider: {
        marginLeft: "10%",
        marginRight: "10%",
        backgroundColor: '#f5f5f5',
    },
}));

export default function Logo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="center" alignItems="center" >
                <Grid item><img src={KPMGlogo} alt="KPMG_logo" width='150px' /></Grid>
                <Divider orientation="vertical" flexItem className={classes.divider} color='secondary.light' />
                <Grid item><div style={{ fontSize: '55px' }}>Libor</div></Grid>
                <Divider orientation="vertical" flexItem className={classes.divider} color='secondary.light' />
                <Grid item><img src={lighthouselogo} alt="KPMG_logo" width='70px' /></Grid>
            </Grid>
        </div>
    );
}