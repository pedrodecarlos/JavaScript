function gerarTabuada() {
    var num = document.getElementById('txtnumero')
    var n = Number(num.value)
    var tab = document.getElementById('tab')
    
    if(num.value.length == 0) {
        alert('Por favor, digite um número')
    } else {
        tab.innerHTML = ''
    for (cont = 1; cont <= 10; cont++) {
        let gerar = n*cont
        
        let item = document.createElement('option')
        item.text = `${n} x ${cont} = ${gerar}`
        tab.appendChild(item)
       
       } 
    }
   
    
}



/*
let num = 7

for (cont = 1; cont <=  10; cont++) {
    let res = num*cont
    console.log(`${num} x ${cont} = ${res}`)
}
*/