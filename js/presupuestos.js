//* Funciones de validación
function validar(formulario){
   /*
        ▪ Nombre:  Sólo  podrá  contener  letras  y  tendrá  una  longitud 
        máxima de 15 caracteres. 
        
        ▪ Apellidos:  Sólo  podrá  contener  letras  y  tendrá  una  longitud máxima de 40 caracteres. 
        ▪ Teléfono  de  contacto:  Sólo  podrá  contener  números  y 
        tendrá una longitud máxima de 9 dígitos. 
        
        ▪ Correo electrónico: Deberá cumplir con los estándares de 
        un correo electrónico. Ejemplo: nnnnn_nnn@zzzzz.xxx 
    */ 
    
    
    var es_valido = true;
    var msg = "Ocurrió un error al enviar el formulario:";

    var nombre = formulario.nombre.value;
    var validacion_nombre = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ]{1,15}$/;

    var apellidos = formulario.apellidos.value;
    var validacion_apellidos = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{1,40}$/;

    var telefono = formulario.telefono.value;
    var validacion_telefono = /^[0-9]{9}$/;

    var correo = formulario.correo.value;
    var validacion_correo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Nombre
    if(nombre == ""){
        es_valido = false;
        msg = msg + '\n - El nombre no puede estar vacío.';
    }else if(!validacion_nombre.test(nombre)){
        es_valido = false;
        msg = msg + '\n - El nombre solo puede contener letras y una longitud máxima de 15 caracteres.';
    }

    // Apellidos
    if(apellidos == ""){
        es_valido = false;
        msg = msg + '\n - Los apellidos no pueden estar vacíos.';
    }else if(!validacion_apellidos.test(apellidos)){
        es_valido = false;
        msg = msg + '\n - Los apellidos solo pueden contener letras y una longitud máxima de 40 caracteres.';
    }

    // Teléfono
    if(telefono == ""){
        es_valido = false;
        msg = msg + '\n - El teléfono no puede estar vacío.';
    }else if(!validacion_telefono.test(telefono)){
        es_valido = false;
        msg = msg + '\n - El teléfono solo puede contener números y una longitud máxima de 9 dígitos.';
    }

    // Correo electrónico
    if(correo == ""){
        es_valido = false;
        msg = msg + '\n - El correo electrónico no puede estar vacío.';
    }else if(!validacion_correo.test(correo)){
        es_valido = false;
        msg = msg + '\n - El correo electrónico debe cumplir con el estándar, por ejemplo: nnnnn_nnn@zzzzz.xxx';
    }

    // TODO: Añadir resto de comprobaciones para que todos los campos se hayan completado
    
    var producto = formulario.producto.value;
    if (producto == "") {
        es_valido = false;
        msg = msg + '\n - Seleccione un producto.';
    }

    var plazo = formulario.plazo.value;
    if (plazo == "" || isNaN(plazo) || plazo <= 0) {
        es_valido = false;
        msg = msg + '\n - Ingrese un plazo válido.';
    }

    var extra1 = formulario.extra_1.checked;
    var extra2 = formulario.extra_2.checked;
    var extra3 = formulario.extra_3.checked;
    if (!extra1 && !extra2 && !extra3) {
        es_valido = false;
        msg = msg + '\n - Seleccione al menos un extra.';
    }

    var politica = formulario.politica.checked;
    if (!politica) {
        es_valido = false;
        msg = msg + '\n - Debe aceptar la política de privacidad.';
    }


    if(es_valido){
        // formulario.submit();
    }else{
        alert(msg);
    }
}

function calcular_presupuesto(formulario){

    /*
    Producto: Deberás utilizar las etiquetas HTML pertinentes que permitan al usuario elegir entre varias opciones. Cada opción llevará un precio asociado. Deberás poner un mí- nimo de tres opciones.
    
    Plazo: Deberás utilizar una etiqueta HTML (input numérico) que permita al usuario indicar el número de meses o días en los que desea recibir el producto. Según el valor intro- ducido se le aplicará un descuento sobre el presupuesto final.
    
    Extras: Deberás utilizar varias etiquetas HTML que permitan que el usuario marque todas las opciones extra que desea añadir al producto elegido. Cada opción seleccio- nada aumentará el presupuesto final en un importe de- terminado.
    
    Presupuesto: Deberás utilizar las etiquetas HTML pertinentes para mostrar al usuario el presupuesto final, basado en las elecciones que ha realizado. Este campo deberá ac- tualizarse con cualquier cambio que se realice en las elec- ciones de producto, meses y extras, sin utilizar botones ni refrescar la página.
    
    Condiciones y envío del presupuesto: En este apartado deberás utilizar una etiqueta HTML que te permita crear una opción para aceptar las condiciones de privacidad de la página y un botón que permita enviar el formulario. De forma adicional, podrás crear un botón que permita rese- tear el formulario. Recuerda que para poder enviar el formulario todos los campos deberán estar cumplimenta- dos (incluido el de la aceptación de las condiciones) y de- berán validar todos los datos del apartado de contacto.
    */

    //* Obtengo valores del formulario

    // Precio del Producto
    const precio_producto = formulario.producto.value;

    // Plazo de días
    const plazo = formulario.plazo.value;

    // Extras
    const extras = formulario.extras;

    //* Cálculo de presupuesto total
    // Inicio el total con el precio del producto
    let presupuesto_final = precio_producto;

    // Precios añadidos al extra
    const extra1 = formulario.extra_1.checked ? 20 : 0; // Precio extra 1
    const extra2 = formulario.extra_2.checked ? 30 : 0; // Precio extra 2
    const extra3 = formulario.extra_3.checked ? 40 : 0; // Precio extra 3


    // Aplicamos descuento de plazo de días de entrega
    
    descuento = 0;

    if (plazo <= 10) {
        descuento = 0;
    } else if (plazo <= 20) {
        descuento = (precio_producto * 5) / 100;
    } else if (plazo <= 30) {
        descuento = (precio_producto * 10) / 100;
    } else {
        descuento = (precio_producto * 15) / 100;
    }


    
   

    // TODO: Más descuentos

    presupuesto_final = presupuesto_final - descuento;

    // Extras
    console.log(extras);


    // Suma de Extras
    presupuesto_final += extra1 + extra2 + extra3;

    //* Mostramos Presupuesto final
    formulario.presupuesto_final.value = presupuesto_final;
}


