function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora > 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#888353'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#c99076'
    } else {
        // BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#25505e'
    }
}