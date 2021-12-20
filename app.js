const lista = document.querySelector('#lista')

const arrayLista = ['item 1', 'item 2', 'item 3']

const template = document.querySelector('#template-li').content
const frangment = document.createDocumentFragment()

arrayLista.forEach(item => {
     template.querySelector('span').textContent = item
    const clone = template.cloneNode(true)
    frangment.appendChild(clone)

})

lista.appendChild(frangment)