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

/*
{
    "files": [
              {
                "name" : "filename", 
                "type" : "filetype",  
                "lastModified" : "lastModified", 
                "size" : "filesize", 
                "content": "Unit8Array String",
              } 
           ] 
  }
*/

export default function UploadButton() {
    const classes = useStyles();

    const handleUpload = (e) => {
        e.preventDefault();
        const url = "http://.../upload-files";
        const config = { headers: { 'Content-Type': 'application/jso' } };
    
        const files = e.target.files;
        const filesArray = Object.values(files);
        const appendList = [];
        filesArray.map(file => {
            const settingFile = {
                "name": file.name,
                "type": file.type,
                "lastModified": file.lastModified,
                "size": file.size,
                "content": "Unit8Array String"
            }
            return appendList.push(settingFile);
        });
        console.log(appendList);

        const formData = new FormData();
        formData.append("files", appendList);
        
        axios.post(url, formData, config).then(()=>console.log("Success")).catch(()=>console.log("Fail"));
    }

    return (
        <div className={classes.root}>
            <input style={{ display: 'none' }} id='upload' accept="*" multiple type="file" onChange={handleUpload} />
            {/* 업로드 허용 파일 특정하기 : accept="image/*,audio/*,video/mp4,video/x-m4v,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,.csv" */}
            <label htmlFor='upload'>
                <div className={classes.btn}>
                    <BackupOutlinedIcon color="secondary" />
                    <div style={{color: '#f5f5f5'}}>upload</div>
                </div>
            </label>
        </div>
    );
}


