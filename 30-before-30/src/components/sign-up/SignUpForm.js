import React /*,{ useState, useEffect }*/ from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik';
//import * as Yup from 'yup';

const SignUpForm = ({touched, errors, status}) => {
    // const [users, setUsers] = useState([]);
    //const history = useHistory();
    // useEffect(() => {
    //     status && setUsers(users => [...users, status]);
    // }, [status]);

    return (
        <div className="formwrapper">
            <h1>SIGN UP</h1>
        <Form className="signupform">
            <div>
                <label htmlFor="username">USERNAME:</label>
                <Field type="text" name="username" placeholder="Username.." />
                {touched.username && errors.username && <span className="errors">{errors.username}</span>}
            </div>

            {/*<div>
                <label htmlFor="email">EMAIL:</label>
                <Field type="email" name="email" placeholder="Email.." />
                {touched.email && errors.email && <span className="errors">{errors.email}</span>}
            </div>*/}
            
            <div>
                <label htmlFor="password">PASSWORD:</label>
                <Field type="password" name="password" placeholder="Password.." />
                {touched.password && errors.password && <span className="errors">{errors.password}</span>}
            </div>

            <div>
                <label htmlFor="displayname">DISPLAY NAME:</label>
                <Field type="text" name="displayname" placeholder="Display name.." />
                {touched.displayname && errors.displayname && <span className="errors">{errors.displayname}</span>}
            </div> 

            {/* ############# BUTTON TO BE ROUTED TO USERS PROFILE PAGE ############ */}
            <button type="submit" >LET'S GO!</button>
        </Form>
        </div>
    )
}

const FormikSignUpForm = withFormik({
    mapPropsToValues({ username, /*email,*/ password, displayname }) {
        return {
            username: username || "",
            //email: email || "",
            password: password || "",
            displayname: displayname || ""
        }
    },
    // validationSchema: Yup.object().shape({
    //     username: Yup.string().required(),
    //     //email: Yup.string().required(),
    //     password: Yup.string().required(),
    //     displayname: Yup.string().required()
    // }),
    handleSubmit(values) {
        console.log(values);
        axios
        .post("https://bucketlist-30-before-30.herokuapp.com/api/auth/register", values)
        .then(res => {
            const token = res
            console.log(token);
        })
        .catch(error => console.log(error));
        //history.push('/home')
    }
})(SignUpForm);

export default FormikSignUpForm;