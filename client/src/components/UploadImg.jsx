
import React, { useState } from 'react';
import axios from 'axios';
import { FileUploader } from "react-drag-drop-files";


function UploadImg() {

    const [file, setFile] = useState()

    const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];


    const handleChange = (file) => {

        const formData = new FormData();

        formData.append('image', file);


        axios({

            method: 'post',
            url: 'http://localhost:5000/upload',   //addyoururl
            data: formData,
            headers: { 'Content-type': 'multipart/form-data' },
            withCredentials: true
        })
            .then(result => console.log(result.data));

    };



    function handleSubmit(event) {
        event.preventDefault()



    }

    return (
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} hoverTitle="fsdfsd" />
    );
}

export default UploadImg;