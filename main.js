import './style.scss'
import * as bootstrap from 'bootstrap';

let showSidebar = document.getElementById('showSidebar');
let sidebar  = document.getElementById('sidebar');
showSidebar.addEventListener('click',function(){
    //console.log("show");
    sidebar.classList.toggle("show");
})