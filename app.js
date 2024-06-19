let btnAbrir = document.getElementById('btn-abrir')
let containerModal = document.getElementById('container-modal')
let btnCerrar = document.getElementById('btn-cerrar')

btnAbrir.addEventListener('click', () => {
    containerModal.style.display = 'block'
})

btnCerrar.addEventListener('click', () => {
    containerModal.style.display = 'none'
})

window.addEventListener('click', (e) => {
    if(e.target === containerModal) {
        containerModal.style.display = 'none'
    }
})