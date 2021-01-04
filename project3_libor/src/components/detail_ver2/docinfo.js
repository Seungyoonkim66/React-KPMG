import { makeStyles } from '@material-ui/core/styles';
import annotationlist from '../../static/annotationlist.json';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        height:'100%',
        color: 'white',
    },
    cell: {
        fontWeight:'500',
        paddingTop: theme.spacing(1),
    },
    cellContent: {
        textAlign:'left',
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(1),
    },
    grid: {
        borderRadius: '4px',
    },
}));

const qalist = annotationlist.annotatonlist;

export default function DocInfo({ fileId }) {
    const classes = useStyles();
    const file = qalist[fileId];

    return (
        <Grid container className={classes.root} direction="row" justify="space-between" id='doc_info'>
            <Grid item xs={2} style={{color: 'black', fontSize:'20px'}}>
                DOCUMENT INFORMATION
            </Grid>
            <Grid item xs={3} className={classes.grid} style={{ backgroundColor:'rgba(255,255,255,0.1)'}}>
                <div className={classes.cell}>FILE ID</div>
                <div className={classes.cell}>FILE NAME</div>
            </Grid>
            <Grid item xs={7} className={classes.grid} style={{ backgroundColor:'rgba(255,255,255,0.2)'}}>
                <div className={classes.cellContent}>{file.id}</div>
                <div className={classes.cellContent}>{file.fileName}</div>
            </Grid>
        </Grid>
    );
}