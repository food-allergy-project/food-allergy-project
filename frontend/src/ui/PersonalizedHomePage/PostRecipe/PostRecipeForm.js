import React, {useState} from 'react';
import * as Yup from "yup";
import {ErrorMessage, FieldArray, Field, Formik} from "formik";
import {Button, Form, FormControl, InputGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {DisplayError} from "../../shared/components/display-error/DIsplayError";
import {DisplayStatus} from "../../shared/components/display-status/DIsplayStatus";
import {httpConfig} from "../../../utils/httpConfig";
import {useDropzone} from "react-dropzone";
import "./PostRecipeFormStyle.css"
import {FormDebugger} from "../../shared/components/FormDeBugger";


export const PostRecipeForm = (props) => {
    const {profileId} = props


    const validator = Yup.object().shape({
        recipeTitle: Yup.string()
            .required('Recipe name is required'),
        recipeImage: Yup.string()
            .required("An image is required"),
        recipeImageAlt: Yup.string(),
        recipeIngredients: Yup.array()
            .required("Ingredient list is required"),
        recipeInstructions: Yup.array()
            .required("Cooking instruction is required")
    });

             const recipe = {
                 recipeImage: "",
                 recipeTitle: "",
                 recipeIngredients: [
                     {
                         value: '',      //numerical value
                         unit: '',       //i.e. oz, cup, g
                         name: '',       //name of the ingredient
                     },
                 ],
                 recipeInstructions: [
                     {
                         step: ''
                     },
                 ],
              };


    function submitUserRecipe(values, {resetForm, setStatus}) {

        const submitRecipe = (values) => {
            httpConfig.post(`/apis/recipe/`,{...values, recipeProfileId: profileId})
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
            initialValues={recipe}
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

    return (
        <>
            <Form onSubmit={handleSubmit} >

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
                        <FormControl
                            className="form-control border border-dark border-2"
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
                    <h6 className="mt-2">Ingredients</h6>
                    <FieldArray name="recipeIngredients">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.recipeIngredients.length > 0 &&
                                    values.recipeIngredients.map((recipeIngredients, index) => (
                                        <div className="row" key={index}>
                                            <div className="col">
                                                <label htmlFor={`recipeIngredients.${index}.value`}>Value </label>
                                                <FormControl
                                                    name={`recipeIngredients.${index}.value`}
                                                    placeholder="i.e. 1, 0.5, etc."
                                                    type="text"
                                                    className="form-control border border-dark border-2 mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`recipeIngredients.${index}.value`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>

                                            <div className="col">
                                                <label htmlFor={`recipeIngredients.${index}.unit`}>Unit </label>
                                                <FormControl
                                                    name={`recipeIngredients.${index}.unit`}
                                                    placeholder="cup, ounces, grams"
                                                    type="text"
                                                    className="form-control border border-dark border-2 mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`recipeIngredients.${index}.unit`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor={`recipeIngredients.${index}.name`}>Name</label>
                                                <FormControl
                                                    name={`recipeIngredients.${index}.name`}
                                                    placeholder="i.e. egg, shrimps, etc."
                                                    type="text"
                                                    className="form-control border border-dark border-2 mt-1"
                                                />
                                                <ErrorMessage
                                                    name={`recipeIngredients.${index}.name`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger mt-4"
                                                    onClick={() => remove(index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                <button
                                    type="button"
                                    className="btn btn-outline-success mt-3"
                                    onClick={() => push({
                                        value: '',      //numerical value
                                        unit: '',       //i.e. oz, cup, g
                                        name: '',       //name of the ingredient
                                    },)}
                                >
                                    Add Ingredient
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <DisplayError errors={errors} touched={touched} field={"recipeInstructions"}/>
                </Form.Group>

                {/*Recipe Instructions*/}
                <Form.Group className="mb-1" controlId="recipeInstructions">
                    <h6 className="mt-2">Instructions</h6>
                    <FieldArray name="recipeInstructions">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.recipeInstructions.length > 0 &&
                                    values.recipeInstructions.map((recipeInstructions, index) => (
                                        <div className="row" key={index}>
                                            <div className="col">
                                                {/*<label htmlFor={`recipeInstructions.${index}.step`}>Step</label>*/}
                                                <FormControl
                                                    name={`recipeInstructions.${index}.step`}
                                                    placeholder="Instruction step"
                                                    type="text"
                                                    className="mt-2 form-control border border-dark border-2"
                                                />
                                                <ErrorMessage
                                                    name={`recipeInstructions.${index}.step`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger mt-2"
                                                    onClick={() => remove(index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                <button
                                    type="button"
                                    className="btn btn-outline-success mt-3"
                                    onClick={() => push({
                                        step: '',
                                    },)}
                                >
                                    Add A Step
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <DisplayError errors={errors} touched={touched} field={"recipeInstructions"}/>
                </Form.Group>

                {/*Form Buttons*/}
                <Form.Group className={"mt-4 mb-2"}>
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
            {/*<FormDebugger {...props} />*/}
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

                <div className="d-flex flex-fill ourBackground2 justify-content-center align-items-center border rounded p-5">
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

