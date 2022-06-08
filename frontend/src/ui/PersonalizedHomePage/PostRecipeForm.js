import React from 'react';

import * as Yup from "yup";
import {Formik} from "formik";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


export const PostRecipeForm = () => {
    const recipe = {
        recipeIngredients: "",
        recipeImage: "",
        recipeImageAlt: "",
        recipeInstructions: "",
        recipeTitle: "",
    };

    const validator = Yup.object().shape({
        recipeTitle: Yup.string()
            .required('Recipe name is required'),
        recipeImage: Yup.string()
            .required("An image is required"),
        recipeIngredients: Yup.string()
            .required("Ingredient list is required"),
        recipeInstructions: Yup.string()
            .required("Cooking instruction is required")
    });

    const submitRecipe = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/yourhomepage/", values)
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
            initialValues={recipe}
            onSubmit={submitRecipe}
            validationSchema={validator}
        >
            {PostRecipeFormContent}
        </Formik>

    )
};
function  PostRecipeFormContent(props){
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
                {/*controlId must match what is passed to the initialValues prop*/}
                <Form.Group className="mb-1" controlId="recipeTitle">
                    <Form.Label>recipeTitle</Form.Label>
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
                    <DisplayError errors={errors} touched={touched} field={"recipeTitle"} />
                </Form.Group>
                {/*controlId must match what is defined by the initialValues object*/}
                <Form.Group className="mb-1" controlId="profilePassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="key"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="profilePassword"
                            type="password"
                            value={values.profilePassword}
                            placeholder="P@ssword1"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"recipeIngredients"} />
                </Form.Group>
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
                    <DisplayError errors={errors} touched={touched} field={"recipeInstructions"} />
                </Form.Group>

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
                    <DisplayError errors={errors} touched={touched} field={"recipeImage"} />
                </Form.Group>
                <Form.Group className="mb-1" controlId="recipeImage">
                    <Form.Label>Recipe Image</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon="phone"/>
                        </InputGroup.Text>
                        <FormControl
                            className="form-control"
                            name="recipeImage"
                            type="URL"
                            value={values.recipeImage}
                            placeholder="Please provide a URL of your image"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </InputGroup>
                    <DisplayError errors={errors} touched={touched} field={"recipeImage"} />
                </Form.Group>
                <Form.Group className={"mt-3"}>
                    <Button className="btn btn-success" type="submit">Submit</Button>
                    {" "}
                    <Button
                        className="btn btn-danger"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </Button>
                </Form.Group>


            </Form>
            <DisplayStatus status={status} />

        </>


    )
}
