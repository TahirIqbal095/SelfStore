const hamburgerEl = document.getElementById("hamburger-icon")
const sidebarEl = document.getElementById("sidebar")
const overlayEl = document.getElementById("overlay")
const closeEl = document.getElementById("close")
const navbarEl = document.getElementById("navbar")

hamburgerEl.addEventListener('click', ()=>{
    sidebarEl.style.width = "300px"
    overlayEl.classList.toggle("hidden")
})

closeEl.addEventListener('click', ()=>{
    sidebarEl.style.width = "0px"
    overlayEl.classList.toggle("hidden")
})