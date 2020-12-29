import { makeStyles } from '@material-ui/core/styles';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import Box from '@material-ui/core/Box';
import axios from 'axios';

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

    const handleUpload = (e) => {
        const url = "http://...";
        const files = e.target.files;
        const formData = new FormData();
        formData.append("uploadedFiles", files);
        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        axios.post(url, formData, config);
        console.log(files);
    }

    return (
        <div className={classes.btn}>
            <input className={classes.input} id='upload' accept="*" multiple type="file" onChange={handleUpload}/>
            <label htmlFor='upload'>
                <Box id='btn-upload' className={classes.box} height={80}>
                    <BackupOutlinedIcon  fontSize='large' />
                    <div style={{ marginTop: '5%' }}>upload</div>
                </Box>
            </label>
        </div>
    );
}


