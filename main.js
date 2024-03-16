$(document).ready(function() {
    $('#formulario-tarefa').submit(function(event) {
        event.preventDefault();
        var tarefaNome = $('#input-tarefa').val();
        if (tarefaNome.trim() !== '') {
            $('#lista-tarefa').append('<li>' + tarefaNome + '</li>');
            $('#input-tarefa').val('');
        } 
    });
   
    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

});