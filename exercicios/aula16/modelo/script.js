function contar() { 
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        alert('[ERRO] Verifique os dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 
        if(i == f) {
            alert('[ERRO] início igual a fim [Retifique e tente novamente!]')
            
        } else if (p <= 0) {
            alert('[ERRO] Passo = 0{undefined} Considerando PASSO [1]')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESECENTE
             for (let cont = i; cont <= f; cont+=p) {
             res.innerHTML += ` ${ cont } \u{1F449}`
             }
        } else  {
            // CONTAGEM REGRESSIVA
             for (let cont = i; cont >= f; cont-=p) {
                res.innerHTML += ` ${ cont } \u{1F449}`
             }  
         } 
          
        res.innerHTML += `\u{1F3C1}`     
      }
    }              



