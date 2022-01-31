const img = document.getElementById( 'img' )
const buttons = document.getElementById( 'buttons' )
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}

const nextColor = () => {
    if (colorIndex < 2){
        colorIndex ++
    } else{
        colorIndex = 0
    }
}

const changeColor = () =>{
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextColor()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}
const turnOn = {
    'red' :  () => img.src = '../Desafio semáforo/img/vermelho.png',
    'green' : () => img.src = '../Desafio semáforo/img/verde.png',
    'yellow': () => img.src = '../Desafio semáforo/img/amarelo.png',
    'automatic' : () => intervalId = setInterval(changeColor, 1000),
    'off': () => img.src = '../Desafio semáforo/img/desligado.png',
}

buttons.addEventListener( 'click', trafficLight)



//if(event.target.id == 'red'){
  //  img.src = '../Desafio semáforo/img/vermelho.png'
//} else if (event.target.id == 'green'){
//    img.src = '../Desafio semáforo/img/verde.png'
//} else if (event.target.id == 'yellow'){
 //   img.src = '../Desafio semáforo/img/amarelo.png'
//}