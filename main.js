const menuEmail = document.getElementById("email");
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu(){
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}
console.log('JS working')