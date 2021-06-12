$(function() {

    $("#form-register").validate({
        rules: {
            nombre: { required: true, minlength: 2},
            apellido: { required:true, minlength: 2},
            email: { required:true, email: true},
            telefono: { required:true, minlength: 2},
            terminosPoliticas: { required:true}
        },
        messages: {
            nombre: "El campo Nombre es obligatorio.",
            apellido : "El campo Apellido es obligatorio",
            email : "El campo Email es obligatorio y debe tener formato de email correcto.",
            telefono : "El campo Teléfono no contiene un formato correcto.",
            terminosPoliticas : "Debes aceptar políticas de privacidad y términos y condiciones",
        }
    });
});