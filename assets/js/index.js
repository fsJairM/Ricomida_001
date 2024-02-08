$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();

    //Funcion para aparecer mensaje de alerta
    $('#enviarCorreo').click(function(){
        alert('El correo fue enviado correctamente...');
    });

    //Favoritos
    $('#favoritos').click(function(){
        alert('Se añadio a Favoritos...');
    });

    //Funcion para cambiar el color de los titulos
    $('#titulo1').on('dblclick',function(){
        $(this).addClass('text-danger');
    });

    $('#titulo2').on('dblclick',function(){
        $(this).addClass('text-danger');
    });

    $('#titulo3').on('dblclick',function(){
        $(this).addClass('text-primary');
    });
    

    //Funcion para aplicar Toggle en las tarjetas
    $('#recetasRelacionadas .card-title').on('click',function(){
        $('.card-text').toggle(2000);
    });

});