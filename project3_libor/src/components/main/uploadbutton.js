import { makeStyles } from '@material-ui/core/styles';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    btn: {
        position: 'relative',
        top: '0%',
    },
    input: {
        display: 'none',
    },
    box: {
        paddingTop: '5%',
    }
}));

export default function UploadButton() {
    const classes = useStyles();

    return (
        <div className={classes.btn}>
            <input className={classes.input} id='upload' accept="*" multiple type="file" />
            <label htmlFor='upload'>
                <Box id='btn-upload' className={classes.box} height={80}>
                    <BackupOutlinedIcon fontSize='large' />
                    <div style={{ marginTop: '5%' }}>UPLOAD</div>
                </Box>
            </label>
        </div>
    );
}


