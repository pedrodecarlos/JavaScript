let num = [3,5,6,7,8]

/*
for (let pos = 0;pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} 
*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(5)

if (pos == -1) {
    console.log('Não existe')
} else {
    console.log(`O número 5 está na posição ${pos}`)
}
