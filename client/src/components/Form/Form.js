import React from 'react';
import {withFormik} from 'formik';


const Form = ({values, handleChange}) => {
    return(
        <div>
            <form action="">
                <label htmlFor="name">
                    Name: <input name="name" type="text" value={values.name} onChange={handleChange}/>
                </label>
                <label htmlFor="email">
                    Email: <input name="email" type="email" values={values.email} onChange={handleChange}/>
                </label>
                <label htmlFor="password">
                    Password: <input name="password" type="password" values={values.password} onChange={handleChange}/>
                </label>
                <label htmlFor="terms">
                    Terms of Service: <input name="terms" type="checkbox" id=""/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({name, email, password, terms}){
        return {
            name: name || "Enter Your Name",
            email: email ||  "",
            password: password || "",
            terms: false
        }
    }
})(Form);

export default FormikForm;

console.log(FormikForm);