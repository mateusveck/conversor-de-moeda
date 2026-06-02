const selectElement = document.querySelector("#coin")



let cotacao
let result
let simbolo


let userCot = document.querySelector('#userCot')
let userValue = document.querySelector('#UserValue')

let caracter = document.querySelector('#simbolo')

let main = document.querySelector('main')

const form = document.querySelector('.form')

let userResult = document.querySelector('.UserResult')

let finalResult = document.querySelector('#Result')

let botton = document.querySelector('button')

function checkForm() {
    if (selectElement.selectedIndex > 0 && userValue.value.trim() !== '') {
        botton.removeAttribute('disabled')
    } else {
        botton.setAttribute('disabled', true)
    }
}

selectElement.addEventListener('change', checkForm)

userValue.addEventListener('input', checkForm)





form.addEventListener('submit', (event) => {
    event.preventDefault()

    switch (selectElement.value) {
  case 'dolar':
    cotacao = 5.25
    simbolo = "US$"
    break

  case 'euro':
    cotacao = 5.50
    simbolo = "€"
    break

  case 'libra':
    cotacao = 6.20
    simbolo = "£"
    break

    case 'iene':
    cotacao = 0.048
    simbolo = "¥"
    break

  case 'peso-argentino':
    cotacao = 0.055
    simbolo = "ARS$"
    break

  case 'yuan':
    cotacao = 0.80
    simbolo = "¥"

    break

}

result = Number(userValue.value.replace(/\./g, '').replace(',', '.')) * cotacao



userCot.textContent = cotacao.toFixed(2).replace('.', ',')
caracter.textContent = simbolo
finalResult.textContent = result.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})

userValue.value = Number(userValue.value.replace(/\./g, '').replace(',', '.'))
  .toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  


userResult.classList.remove('hidden')
userResult.classList.add('show')

main.classList.add('expanded')


})


userValue.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '')
})