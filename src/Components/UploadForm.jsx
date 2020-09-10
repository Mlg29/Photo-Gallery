import React, {useState, useEffect} from "react"
import { connect } from "react-redux"
import {Form, Button} from "react-bootstrap"
import { beginAddPhoto } from "../Redux/actions/photos"


const UploadForm = ({errors, dispatch}) => {

    const [photo, setPhoto] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errMsg, setErrMsg] = useState(null)

    useEffect(() => {
        setErrMsg(errors) 
    }, [errors])

    useEffect(() => {
        setErrMsg('') //to reset err messae on page reload
    }, [])

    const handleOnChange = (e) => {
        const file = e.target.files[0];
        setPhoto(file);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (photo) {
            setErrMsg("");
            dispatch(beginAddPhoto(photo))
            setIsSubmitted(true);
        }
    };

    return (
        <React.Fragment>
            {
                errMsg && errMsg.upload_error ? (
                    <p className="errorMsg centered-message">{errMsg.upload_error}</p>
                ) : (
                    isSubmitted && (
                        <p className="successMsg centered-message">Photo upload Succesfully</p>
                    )
                )
            }

            <Form 
                onSubmit={handleFormSubmit}
                method="post"
                encType="multipart/form-data"
                className="upload-form"
            >
                <Form.Group>
                    <Form.Label>Select photo to upload</Form.Label>
                    <Form.Control type="file" name="photo" onChange={handleOnChange} />
                </Form.Group>

                <Button 
                    variant="primary"
                    type="submit"
                    className={`${!photo ? 'disabled submit-btn' : 'submit-btn'}`}
                    disabled={photo ? false : true}
                >
                    Upload
                </Button>
            </Form>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    photos: state.photos || [],
    errors: state.errors || {}
})

export default connect(mapStateToProps)(UploadForm)