import axios from 'axios';

export function FileDelete({ selected }) {
    console.log(selected);
    const deletedFiles = [];
    selected.map((id) => {
        const settingData = { "id": id }
        console.log(settingData);
        deletedFiles.push(settingData);

        return deletedFiles;
    });

    console.log(deletedFiles);

    const formData = { "files": deletedFiles }
    console.log(formData);
    // const formData = new FormData();
    // formData.append("files", deletedFiles);

    axios.delete('http://.../files', formData)
        .then((reponse) => console.log(reponse))
        .catch((error) => console.log(error))
        .then(() => console.log("send file delete request"));
}

export function AnnotationDelete({ selected }) {
    console.log(selected);
    selected.map((field) => {
        return (
            axios.delete(`http://.../annotation/${field}`)
                .then((reponse) => console.log(reponse))
                .catch((error) => console.log(error))
                .then(() => console.log("send annotation delete request"))
        );
    })

}