import imageCompression from 'browser-image-compression';
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


    const handleChange = async (file) => {


        const compresionOptions = {
            maxSizeMB: 0.1,
            maxWidthOrHeight: 800,
            useWebWorker: true,
            fileType: file.type,
        }

        setUploading(true)

        console.log('before ', file);

        const compressedFile = await imageCompression(file, compresionOptions);

        console.log('after ', compressedFile);

        const formData = new FormData();



        formData.append('image', compressedFile);



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

                    if (result.data.uploadResult) {
                        dispatch(isLogged())

                    } else {
                        alert('Upload file error')
                    }




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