import sampleImage from '../../static/sample_image.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1)
    }
}));

export default function ExtractedImage({fileId}){
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <img alt='extracted' width='100%' src={sampleImage} />
        </div>
    );
}