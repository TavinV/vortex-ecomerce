var menu_aberto = false
var search_aberto = false

const links_EL = document.getElementById('links-active')
const mobile_search_EL = document.getElementById('mobile-search-bar')


function abrir_menu(){
    if(search_aberto){
        search_aberto = false
        menu_aberto = true
        
        mobile_search_EL.classList.toggle('active') // Caso o search esteja aberto, fecha-lo para abrir o menu
        links_EL.classList.toggle('active')
    } else {
        menu_aberto = true
        links_EL.classList.toggle('active') // Caso o search esteja fechado, abrir menu normalmente
    }
}

function abrir_search(){
    if (menu_aberto){
        menu_aberto = false
        search_aberto = true
        
        links_EL.classList.toggle('active') // Caso o menu esteja aberto, fecha-lo antes de abir o search
        mobile_search_EL.classList.toggle('active')
    } else {
        search_aberto = true
        mobile_search_EL.classList.toggle('active') // Caso o menu esteja fechado, abrir o search
    }
}