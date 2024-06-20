let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let titulo = document.querySelector('h1')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

    if(body.classList.contains('dark')){
        titulo.textContent = 'Modo Light'
    } else {
        titulo.textContent = 'Modo Dark'
    }

})