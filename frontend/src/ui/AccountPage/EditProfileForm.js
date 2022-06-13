import React from "react";
import * as Yup from "yup";
import {httpConfig} from "../../utils/httpConfig";
import {Formik} from "formik";
import {Button, FormControl, InputGroup, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DisplayError} from "../shared/components/display-error/DIsplayError";
import {DisplayStatus} from "../shared/components/display-status/DIsplayStatus";
// import {useDropzone} from "react-dropzone";


export const EditProfileForm = () => {
    const editProfile = {
        profileFullName: "",
    };
    const validator = Yup.object().shape({
        profileFullName: Yup.string()
            .required("profile name is required"),
    });

    const submitEditProfile = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/account/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                }
            );
    };

    return (

        <Formik
            initialValues={editProfile}
            onSubmit={submitEditProfile}
            validationSchema={validator}
        >
            {EditProfileFormContent}
        </Formik>

    )
};

function EditProfileFormContent(props){
    // const [selectedImage, setSelectedImage] = useState(null)
    const {
        // setFieldValue,
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;

    // change recipeImage to profileAvatar when we edited the backend
    // if (values.recipeImage !== ""){
    //     console.log(values.recipeImage.get("image"))
    // }
    // console.log(values.recipeImage)

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="profileFullName">

                        {/*Image Input*/}
                        {/*<ImageDropZone*/}
                        {/*    formikProps={{*/}
                        {/*        values,*/}
                        {/*        handleChange,*/}
                        {/*        handleBlur,*/}
                        {/*        setFieldValue,*/}
                        {/*        fieldValue: 'recipeImage', setSelectedImage: setSelectedImage*/}
                        {/*    }}>*/}
                        {/*</ImageDropZone>*/}
                        {/*<div>*/}
                        {/*    {selectedImage !== null ? <img src={selectedImage}/> : ""}*/}
                        {/*</div>*/}

                        {/*{*/}
                        {/*    errors.recipeImage && touched.recipeImage && (*/}
                        {/*        <div className="alert alert-danger">*/}
                        {/*            {errors.recipeImage}*/}
                        {/*        </div>*/}
                        {/*    )*/}
                        {/*}*/}

                    <Form.Label>Full Name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="envelope"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profileFullName"
                            type="text"
                            value={values.profileFullName}
                            placeholder="Enter new name here"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"profileFullName"} />
                </Form.Group>
                <Form.Group className={"mt-3"}>
                    <Button className="btn btn-success" type="submit">Submit</Button>
                    {" "}
                    <Button
                        className="btn btn-danger"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Clear All
                    </Button>
                </Form.Group>

            </Form>
            <DisplayStatus status={status} />
        </>
    )
}