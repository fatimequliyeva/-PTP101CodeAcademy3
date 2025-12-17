


const result=document.querySelector('#result')
const firtsNum=document.querySelector('#value1')
const secondNum=document.querySelector('#value2')

const add=document.querySelector('#add') //bu rengnie cxdi bilmirem
const subtract=document.querySelector('#subtract')

const multiply=document.querySelector('#multiply')
const devide=document.querySelector('#divide')

const reset=document.querySelector('#reset')







add.addEventListener('click', ()=>{
    result.textContent=Number(firtsNum.value)+Number(secondNum.value)
})

subtract.addEventListener('click',()=>{
    result.textContent=Number(firtsNum.value)-Number(secondNum.value)
})

multiply.addEventListener('click',()=>{
    result.textContent=Number(firtsNum.value)*Number(secondNum.value)
})


devide.addEventListener('click',()=>{
    result.textContent=Number(firtsNum.value)/Number(secondNum.value)
})

reset.addEventListener('click',()=>{
  result.textContent=0
})