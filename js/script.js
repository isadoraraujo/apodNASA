let form = $('#form').submit((event) => {
    event.preventDefault()
    return nasa()
})


function nasa() {
    let conteudo = $('#data').val()
    console.log(conteudo)
    $.get({
        type: `GET`,
        url: `https://api.nasa.gov/planetary/apod?api_key=6ifsI1kyzgSG0BhA5pS3gg3nh3fXQy0MO80gbWLs&date=${conteudo}`,

        success: function (dados) {
            console.log(dados)
            $('#descricao').text(dados.explanation)
            if (dados.media_type === 'image') {
                $('#video').css('display', 'none')

                $('#video').attr({
                    src: ''
                })

                $('#img').css('display', 'flex')

                $('#img').attr({
                    src: dados.hdurl
                })
            } else {
                $('#img').css('display', 'none')

                $('#img').attr({
                    src: ''
                })

                $('#video').css('display', 'flex')

                $('#video').attr({
                    src: dados.url
                })
            }
        },
        error: function () {
            if (conteudo < '1995-06-16') {
                alert('Você precisa adicionar datas a partir de 16 de junho de 1995')
            }
        }
    })
}