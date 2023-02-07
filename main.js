const btnMenu = document.getElementById('btnMenu')
const btnClose = document.getElementById('btnClose')
const listMenu = document.getElementById('listMenu')

btnMenu.onclick = () => {
    console.log('clickenado 2')

    listMenu.classList.toggle('showMenu')

}

btnClose.onclick= () => {
    console.log('clickenado 1')
    listMenu.classList.toggle('showMenu')

}