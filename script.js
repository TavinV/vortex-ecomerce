var menu_aberto = false
var search_aberto = false

const links_EL = document.getElementById('links-active')
const mobile_search_EL = document.getElementById('mobile-search-bar')


function abrir_menu(){
    links_EL.classList.toggle('active')
}

function abrir_search(){
    mobile_search_EL.classList.toggle('active')
}