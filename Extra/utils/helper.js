const validateEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._-]+\@successive\.tech/;
    return regexEmail.test(String(email).toLowerCase());
}

export default validateEmail;