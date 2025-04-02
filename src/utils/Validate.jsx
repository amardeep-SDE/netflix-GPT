import React from 'react'

const Validate = (email, password) => {

    // const isNameValid = name.length >= 6;
    const isEmailValid  = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = password.length >= 4;

    // if(!isNameValid) return "Name is required 6 digits";
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is required 4 digits";

    return null;
}

export default Validate