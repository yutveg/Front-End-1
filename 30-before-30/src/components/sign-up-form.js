import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignUpForm = ({touched, errors, status}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
      }, [status]);

    return (
        <div className="formwrapper">
            <h1>SIGN UP</h1>
        <Form className="signupform">
            <div>
                <label htmlFor="username">USERNAME:</label>
                <Field type="text" name="username" placeholder="Username.." />
                {touched.username && errors.username && <span className="errors">{errors.username}</span>}
            </div>

            <div>
                <label htmlFor="email">EMAIL:</label>
                <Field type="email" name="email" placeholder="Email.." />
                {touched.email && errors.email && <span className="errors">{errors.email}</span>}
            </div>
            
            <div>
                <label htmlFor="password">PASSWORD:</label>
                <Field type="password" name="password" placeholder="Password.." />
                {touched.password && errors.password && <span className="errors">{errors.password}</span>}
            </div>

            <div>
                <label htmlFor="dateof30th">DATE OF 30TH BIRTHDAY:</label>
                <Field type="text" name="dateof30th" placeholder="Date Of 30th.." />
                {touched.dateof30th && errors.dateof30th && <span className="errors">{errors.dateof30th}</span>}
            </div>

            {/* ############# BUTTON TO BE ROUTED TO USERS PROFILE PAGE ############ */}
            <button type="submit" >LET'S GO!</button>
        </Form>
        </div>
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ username, email, password, dateof30th }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            dateof30th: dateof30th || ""
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        dateof30th: Yup.string().required()
    }),
    handleSubmit(values, { setStatus }) {
        console.log(values);
        axios
        .post("https://project-30-before-30.herokuapp.com/api/auth/register", values)
        .then(res => {
            setStatus(res.data);
            console.log(res);
        })
        .catch(error => console.log(error.response));
    }
})(SignUpForm);

export default FormikSignUpForm;