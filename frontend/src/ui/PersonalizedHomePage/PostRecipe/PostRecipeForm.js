import React, {useState} from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {Button, Form, FormControl, InputGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {DisplayError} from "../../shared/components/display-error/DIsplayError";
import {DisplayStatus} from "../../shared/components/display-status/DIsplayStatus";
import {httpConfig} from "../../../utils/httpConfig";
import {useDropzone} from "react-dropzone";
import "./PostRecipeFormStyle.css"


export const PostRecipeForm = (props) => {
    const {profileId} = props


    const validator = Yup.object().shape({
        recipeTitle: Yup.string()
            .required('Recipe name is required'),
        recipeImage: Yup.string()                                //should this be .string?
            .required("An image is required"),
        recipeImageAlt: Yup.string(),
        recipeIngredients: Yup.string()
            .required("Ingredient list is required"),
        recipeInstructions: Yup.string()
            .required("Cooking instruction is required")
    });

            // const recipe = {
            //     recipeIngredients: "",
            //     recipeImage: "",
            //     recipeInstructions: "",
            //     recipeTitle: "",
            // };

    function submitUserRecipe(values, {resetForm, setStatus}) {

        const submitRecipe = (submitARecipe) => {
            httpConfig.post(`/apis/recipe/`,submitARecipe) //{...values, recipeProfileId: profileId}
                .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                    return (reply)
                })
        };

        if (values.recipeImage !== undefined) {
            httpConfig.post(`/apis/image-upload`, values.recipeImage)
                .then(reply => {
                        let {message, type} = reply;

                        if (reply.status === 200) {
                            submitRecipe({...values, recipeImage: message})
                        } else {
                            setStatus({message, type});
                        }
                    }
                );
        } else {
            submitRecipe(values);
        }

    }

    return (

        <Formik
            initialValues={profileId}
            onSubmit={submitUserRecipe}
            validationSchema={validator}
        >
            {PostRecipeFormContent}
        </Formik>

    )
};

function PostRecipeFormContent(props) {
    const [selectedImage, setSelectedImage] = useState(null)
    const {
        setFieldValue,
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

    if (values.recipeImage !== "") {
        console.log(values.recipeImage.get("image"))
    }
    console.log(values.recipeImage)

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-1" controlId="recipeForm">

                    {/*Image Input*/}
                    <ImageDropZone
                        formikProps={{
                            values,
                            handleChange,
                            handleBlur,
                            setFieldValue,
                            fieldValue: 'recipeImage', setSelectedImage: setSelectedImage
                        }}>
                    </ImageDropZone>

                    <div>
                        {selectedImage !== null ? <img className="img-fluid" src={selectedImage}/> : ""}
                    </div>

                    {
                        errors.recipeImage && touched.recipeImage && (
                            <div className="alert alert-danger">
                                {errors.recipeImage}
                            </div>
                        )
                    }

                    {/*Recipe Tile*/}
                    <Form.Label>Recipe Name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="envelope"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="recipeTitle"
                            type="text"
                            value={values.recipeTitle}
                            placeholder="Please enter the recipe name"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"recipeTitle"}/>
                </Form.Group>

                {/*Recipe Ingredients*/}
                <Form.Group className="mb-1" controlId="recipeIngredients">
                    <Form.Label>Ingredients</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="key"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="recipeIngredients"
                            type="text"
                            value={values.recipeIngredients}
                            placeholder="Please provide a list of Ingredients"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"recipeInstructions"}/>
                </Form.Group>

                {/*Recipe Instructions*/}
                <Form.Group className="mb-1" controlId="recipeInstructions">
                    <Form.Label>Instructions</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="dove"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="recipeInstructions"
                            type="text"
                            value={values.recipeInstructions}
                            placeholder="Provide instructions on how to make this."
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"recipeInstructions"}/>
                </Form.Group>

                {/*Form Buttons*/}
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
            <DisplayStatus status={status}/>

        </>


    )
}

{/*ImageDropZone Function*/}

function ImageDropZone({formikProps}) {

    const onDrop = React.useCallback(acceptedFiles => {

        const formData = new FormData()
        formData.append('image', acceptedFiles[0])

        const fileReader = new FileReader()
        fileReader.readAsDataURL(acceptedFiles[0])
        fileReader.addEventListener("load", () => {
            formikProps.setSelectedImage(fileReader.result)
        })

        formikProps.setFieldValue(formikProps.fieldValue, formData)

    }, [formikProps])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <Form.Group className={"mb-3"} {...getRootProps()}>
            <Form.Label>Recipe Images</Form.Label>

            <InputGroup size="lg" className="">

                <div className="d-flex flex-fill bg-light justify-content-center align-items-center border rounded">
                    <FormControl
                        aria-label="recipe image files drag and drop area"
                        aria-describedby="image drag drop area"
                        className="form-control-file"
                        accept="image/*"
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        {...getInputProps()}
                    />
                    {
                        isDragActive ?
                            <span className="align-items-center">Drop image here</span> :
                            <span className="align-items-center">Drag and drop image here, or click here to select an image</span>
                    }
                </div>
            </InputGroup>
        </Form.Group>
    )
}

