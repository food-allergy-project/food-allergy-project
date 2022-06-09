import React from "react";
import * as Yup from "yup";
import {httpConfig} from "../../utils/httpConfig";
import {Form, Formik} from "formik";
import {FormControl, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {DisplayError} from "../shared/components/display-error/DIsplayError";

export const EditProfileForm = () => {
    const editProfile = {
        profileFullName: "",
    };
    const validator = Yup.object().shape({
        profileFullName: Yup.string()
            .required("profile handle is required"),
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
    const {
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
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-1" controlId="profileFullName">
                    <Form.Label>Recipe Name</Form.Label>
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
            </Form>
        </>
    )
}