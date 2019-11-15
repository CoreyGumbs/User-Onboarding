import React from 'react';


const Form = () => {
    return(
        <div>
            <form action="">
                <label htmlFor="name">
                    Name: <input name="name" type="text"/>
                </label>
                <label htmlFor="email">
                    Email: <input name="email" type="email"/>
                </label>
                <label htmlFor="password">
                    Password: <input name="password" type="password"/>
                </label>
                <label htmlFor="tos">
                    Terms of Service: <input name="tos" type="checkbox" id=""/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;