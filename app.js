const lista = document.getElementById('lista')

const arrayItem = ["item1", "item2", "item3"];

const fragment = document.createDocumentFragment()
// const fragment = new DocumentFragment()

arrayItem.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    fragment.appendChild(li)
})