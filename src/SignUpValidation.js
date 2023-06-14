function Validation (values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    //Para la cedula de identidad
    if(values.ci == ""){
        error.ci = 'La cedula de identidad no debe estar vacio'
    }
    else{
        error.ci = ""
    }
    //para el username
    if(values.username == ""){
        error.username = 'El nombre de usuario no debe estar vacio'
    }
    else{
        error.username = ""
    }
    //para el email
    if(values.email == ""){
        error.email = 'El email no debe estar vacio'
    }
    else if (!email_pattern.test(values.email)){
        error.email = "El email didn't match"
    }else{
        error.email = ""
    }
    //Para la validacion del password
    if(values.password == ""){
        error.password = 'El password no debe estar vacio'
    }
    else if (!password_pattern.test(values.password)){
        error.password = "password didn't match"
    }else{
        error.password = ""
    }
    return error;
}
export default Validation