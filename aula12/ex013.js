var agora = new Date()
var diasem = agora.getDay()

console.log(diasem)
switch (diasem) {
    case 0: 
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunga Feira')
        break
    case 2: 
        console.log('Terça Feira')
        break
    case 3: 
        console.log('Quarta Feira')
        break
    case 4: 
        console.log('Quinta Feira')
        break
    case 5: 
        console.log('Sexta Feira')
    case 6: 
        console.log('Sabádo')
    default: 
        console.log('[ERRO] Dia inválido')
        break
}