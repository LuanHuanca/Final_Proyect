function Validation (values){
    let error = {}
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    //Para la cedula de identidad
    if(values.ci == ""){
        error.ci = 'El nombre de usuario no debe estar vacio'
    }
    else{
        error.ci = ""
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