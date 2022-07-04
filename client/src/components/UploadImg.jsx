
import React, { useState } from 'react';
import axios from 'axios';
import { FileUploader } from "react-drag-drop-files";
import DataLoader from '../components/DataLoader'
import { useDispatch } from 'react-redux';
import { isLogged } from '../actions/userActions';


function UploadImg() {

    const [file, setFile] = useState()
    const [uploading, setUploading] = useState(false)
    const dispatch = useDispatch()


    const fileTypes = ["JPG", "JPEG", "PNG", "GIF", "WEBP"];


    const handleChange = (file) => {
        setUploading(true)
        const formData = new FormData();

        formData.append('image', file);


        axios({

            method: 'post',
            url: 'http://localhost:5000/upload',   //addyoururl
            data: formData,
            headers: { 'Content-type': 'multipart/form-data' },
            withCredentials: true
        })
            .then(result => {
                if (result.status === 200) {
                    setUploading(false)



                    dispatch(isLogged())


                } else {
                    setUploading(false)
                }
            });

    };



    function handleSubmit(event) {
        event.preventDefault()



    }

    return (
        <>
            {uploading ? <DataLoader /> : null}
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} hoverTitle="fsdfsd" />


        </>
    );
}

export default UploadImg;