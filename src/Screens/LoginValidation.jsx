function Validation(values){
    
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    

    if(values.email === "") {
        error.email = "email no debe estar vacia"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Correo electrónico no coincide"
    }else {
        error.email = ""
    }

    if(values.password === ""){
        error.password = "La contraseña no debe estar vacía"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "La contraseña no coincide"
    } else {
        error.password = ""
    }
    return error;
}
export default Validation;
