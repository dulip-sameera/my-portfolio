const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');
const links = nav.querySelectorAll('a');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active')
}

// Close the menu when any link is clicked
links.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('bx-x');
        nav.classList.remove('active');
    };
});