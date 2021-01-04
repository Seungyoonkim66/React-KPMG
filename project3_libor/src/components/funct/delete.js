import axios from 'axios';

export function FileDelete( { selected } ) {
    console.log(selected);
    const deletedFiles = [];
    selected.map(id => {
        const settingFile = {
            "id": id
        }
        return deletedFiles.push(settingFile);
    })

    const formData = new FormData();
    formData.append("files", deletedFiles);
    // JSON.stringify(formData.files);

    // console.log(deletedFiles);
    console.log(formData.files);

    axios.delete('http://.../files', formData)
    .then((reponse) => console.log(reponse))
    .catch((error) => console.log(error))
    .then(() => console.log("send file delete request"));  
}

export function AnnotationDelete({selected}){
    console.log(selected);
    selected.map((field) => {
        axios.delete(`http://.../annotation/${field}`)
        .then((reponse) => console.log(reponse))
        .catch((error) => console.log(error))
        .then(() => console.log("send annotation delete request"));
    })
    
}