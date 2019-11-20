import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';


function AddItemForm(props) {
    

    return (
        <Form className="add-item-form">
            <label htmlFor="additem">Add Item:</label>
            <Field name="additem" type="text" placeholder="Add item.." />
            <div>
                <button type="submit" className="add-item-button">Update List</button>
            </div>
        </Form>
    )
}

const FormikAddItemForm = withFormik({
    mapPropsToValues({ additem }) {
        return {
            additem: additem || ""
        }
    },
    handleSubmit(values, props) {
        console.log(values);
        axios
        .post(`https://bucketlist-30-before-30.herokuapp.com/api/bucketlists/${props.id}/items/`, values)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
    }
})(AddItemForm);

export default FormikAddItemForm;