
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/

export function validate (userData) {
    
    const errors = {}
    if(userData.username === ''){
        errors.username = 'Por favor, complete este campo'
    }
    if (userData.username.length > 0 && !regexEmail.test(userData.username)) {
        errors.username = 'El campo debe ser un email';
    }
   if(userData.username.length > 35){
        errors.username = 'El nombre es demasiado Largo'
    }
    if(!regexPassword.test(userData.password)){
        errors.password = 'La contraseña debe incluir un numero'
    }
    if (userData.password.length > 0 && userData.password.length < 6 ) {
        errors.password = 'La contraseña es muy corta';
    }
    if ( userData.password.length > 10 ) {
        errors.password = 'La contraseña es muy larga';
    }
    if (userData.password === '') {
        errors.password = 'Se requiere una contraseña';
    }
    return errors
  }