let btn = $('#botao').click( ()=> {
     return nasa()  
})


function nasa() {
            let conteudo = $('#data').val()
            console.log(conteudo)
            $.get({
                type: `GET`, 
                url: `https://api.nasa.gov/planetary/apod?api_key=6ifsI1kyzgSG0BhA5pS3gg3nh3fXQy0MO80gbWLs&date=${conteudo}`,

                success: function(dados) {
                    $('#descricao').text(dados.explanation)
                    $('#img').attr({
                        src: dados.hdurl})  
                    || 
                     $('#video').attr({
                    src: dados.hdurl})
            },
                error: function() {
                    if (conteudo < 1995-06-16) {
                        alert('Você precisa adicionar datas a partir de 1995')
                    } 
            }
        })
    }




/*
$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=6ifsI1kyzgSG0BhA5pS3gg3nh3fXQy0MO80gbWLs",
  
  })
    .done(function( data ) {
     $
    });*/