function Validation (values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    //Para el username
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
    //para el telefono
    if(values.telefono == ""){
        error.telefono = 'El nombre de usuario no debe estar vacio'
    }
    else{
        error.telefono = ""
    }
    return error;
}
export default Validation