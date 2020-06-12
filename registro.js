//(function(){
//Variables de los campos
    let formulario = document.querySelector('#formulario'),
        nombre = document.querySelector('#nombre'),
        correo1 = document.querySelector('#correo-1'),
        correo2 = document.querySelector('#correo-2'),
        contraseña1 = document.querySelector('#contraseña-1'),
        contraseña2 = document.querySelector('#contraseña-2'),
        condiciones = document.querySelector('#condiciones'),
        error = document.getElementsByClassName('error')
// Variables de Errores
    let errorBlanco = document.querySelector('#error-blanco'),
        correoNoIgual = document.querySelector('#correo-noIgual'),
        contraseñaNoIgual = document.querySelector('#contraseña-noIgual'),
        errorTerminos = document.querySelector('#error-terminos'),
        errorNumeros = document.querySelector('#error-numeros'),
        errorMayMin = document.querySelector('#error-maymin'),
        errorCaracteresEsp = document.querySelector('#error-especial'),
        errorCaracteres = document.querySelector('#error-caracteres'),
        errorEspacios = document.querySelector('#error-espacios')

// Eventos

formulario.addEventListener('submit', validarFormulario)

//Validar todos los espacios en los campos

    function validarEspacios(e) {
        e.preventDefault()
        
        if (nombre.value === '' || nombre.value === null) {
            
            errorBlanco.style.display = 'block'
        }  

        if ( correo1.value === '' || correo1.vaue === null){

            errorBlanco.style.display = 'block'
        }

        if ( correo2.value === '' || correo2.vaue === null){

            errorBlanco.style.display = 'block'
        }

        if ( contraseña1.value === '' || contraseña1.vaue === null){

            errorBlanco.style.display = 'block'
        }

        if ( contraseña2.value === '' || contraseña2.vaue === null){

            errorBlanco.style.display = 'block'
        }

    }
//Valida el check de los terminos
    function validarTerminos(e) {
        e.preventDefault()
        
        if ( condiciones.checked === false){

            errorTerminos.style.display = 'block'
        } else {
            errorTerminos.style.display = 'none'
        }
    }

//Valida si los correo son iguales
    function validarCorreo(e){
        e.preventDefault()
        

        if(correo1.value !== correo2.value) {
            correoNoIgual.style.display = 'block'
        }
    }

//Valida si las contraseñas son iguales

    function validarContraseñaNoigual(e){
        e.preventDefault()

        if(contraseña1.value !== contraseña2.value) {
            contraseñaNoIgual.style.display = 'block'
        }
    } 

//Valida las contraseñas el numero minimo de caracteres 8
    function validarCaracteres(e){
        e.preventDefault()


        if(contraseña1.value.length <8 ){
            errorCaracteres.style.display = 'block'
        }

        if(contraseña2.value.length <8 ){
            errorCaracteres.style.display = 'block'
        }
    }

//Valida si las contraseñas contienen numeros
    function validarNumeros(e){
        e.preventDefault()

        let numeros = "0123456789",
            contraseña1v = contraseña1.value,
            contraseña2v = contraseña2.value

        for(i=0;i<contraseña1v.length; i++){
            
            if(numeros.indexOf(contraseña1v.charAt(i),0)!=-1){
                errorNumeros.style.display = 'none'	
            }else {
                errorNumeros.style.display = 'block'
            }
        }

        for(i=0;i<contraseña2v.length; i++){
            
            if(numeros.indexOf(contraseña2v.charAt(i),0)!=-1){
                errorNumeros.style.display = 'none'	
            }else {
                errorNumeros.style.display = 'block'
            }
        }
    }
        
//Valida si las contraseñas contienen mayusculas y minnusculas

    function validarMayusculas(e){
        e.preventDefault()

        

        for(i=0; i<contraseña1.value.length; i++){
            if(contraseña1.value.charCodeAt(i) >= 65 && contraseña1.value.charCodeAt(i) <=90) {
                console.log('entre')
                errorMayMin.style.display = 'none'
            }else {
                
                errorMayMin.style.display = 'block'
            }
        }
        
        for(i=0; i<contraseña2.value.length; i++){
            if(contraseña2.value.charCodeAt(i) >= 65 && contraseña2.value.charCodeAt(i) <=90) {

                errorMayMin.style.display = 'none'
            }else {
                errorMayMin.style.display = 'block'
            }
        }
    }

    function validarMinusculas(e) {
        e.preventDefault()

        for(i=0; i<contraseña1.value.length; i++){
            if(contraseña1.value.charCodeAt(i) >= 97 && contraseña1.value.charCodeAt(i) <=122) {

                errorMayMin.style.display = 'none'
            }else {
                errorMayMin.style.display = 'block'
            }
        }

        for(i=0; i<contraseña2.value.length; i++){
            if(contraseña2.value.charCodeAt(i) >= 97 && contraseña2.value.charCodeAt(i) <=122) {

                errorMayMin.style.display = 'none'
            }else {
                errorMayMin.style.display = 'block'
            }
        }
    }
//Valida que deba contener caracteres especiales
    function validarCaracteresEsp(e){
        e.preventDefault()

        for(i=0; i<contraseña1.value.length; i++){
            if(contraseña1.value.charCodeAt(i) >=33 && contraseña1.value.charCodeAt(i) <=47) {
                
                errorCaracteresEsp.style.display = 'none'
            }else {
            
                errorCaracteresEsp.style.display = 'block'
            }
        }

        for(i=0; i<contraseña2.value.length; i++){
            if(contraseña2.value.charCodeAt(i) >=33 && contraseña2.value.charCodeAt(i) <=47) {
                
                errorCaracteresEsp.style.display = 'none'
            }else {
            
                errorCaracteresEsp.style.display = 'block'
            }
        }
    }





    function validarFormulario(e){

        error.innerHTML = ''

        validarEspacios(e)
        validarTerminos(e)
        validarCorreo(e)
        validarContraseñaNoigual(e)
        validarCaracteres(e)
        validarNumeros(e)
        validarMayusculas(e)
        validarMinusculas(e)
        validarCaracteresEsp(e)
    }

//})