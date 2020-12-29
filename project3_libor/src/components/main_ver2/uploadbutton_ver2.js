import { makeStyles } from '@material-ui/core/styles';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3)
    },
    btn: {
        backgroundColor: 'rgba(251,161,0, 0.5)',
        width: '30%',
        display: 'block',
        margin: 'auto',
        padding: theme.spacing(1),
        borderRadius: '500px',
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
        <div className={classes.root}>
            <input style={{ display: 'none' }} id='upload' accept="*" multiple type="file" onChange={handleUpload} />
            <label htmlFor='upload'>
                <div className={classes.btn}>
                    <BackupOutlinedIcon color="secondary" />
                    <div style={{color: '#f5f5f5'}}>upload</div>
                </div>
            </label>
        </div>
    );
}


