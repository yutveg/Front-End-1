import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axiosWithAuth from '../../utils/axiosWithAuth';
import decode from 'jwt-decode'


function AddItemForm(props) {

    return (
        <Form className="add-item-form">
            <label htmlFor="additem">Add Item:</label>
            <Field name="name" type="name" placeholder="name" />
            <Field type="description" name="description" placeholder="description" />
            <Field name="link" type="link" placeholder="link" />


            <div>
                <button type="submit" className="add-item-button">Update List</button>
                </div>
                </Form>
    )
}

const token  = localStorage.getItem('token')
const decoded = decode(token)
const FormikAddItemForm = withFormik({
    mapPropsToValues({name, description, link}) {
        return {
            name: name || "",
            description: description || "",
            link: link || "",
            deadline: '2030-10-10',
            completed: false
        }
    },
    handleSubmit(values, props) {
        // console.log(values);
        // console.log(props);
        console.log(decoded.id)
        axiosWithAuth()
        .post(`bucketlists/6/items`, values)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }
})(AddItemForm);



    
    export default FormikAddItemForm;
    
