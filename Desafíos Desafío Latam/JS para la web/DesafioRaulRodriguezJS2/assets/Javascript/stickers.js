
export const totalStickers= ()=> {

const num1 = document.querySelector('.numero1').value
const num2 = document.querySelector('.numero2').value
const num3 = document.querySelector('.numero3').value
const total= Number(num1)+Number(num2)+Number(num3)
const tooMuch=document.querySelector('.total')

    if (total>10){
    
    tooMuch.innerHTML='Llevas demasiados stickers'
} else {
    var suma= document.querySelector('.total')
suma.innerHTML=total
}}

export const botonStickers=document.querySelector('.botonStickers')