let loaderElement = document.querySelector('#loader');
let linksFixed = document.querySelector('#linksFixed');

window.addEventListener('load', function() {
    loaderElement.classList.add('lod');
})

window.addEventListener('scroll', function() {
    if(window.pageYOffset >=  375) {
        linksFixed.classList.add('linkFix');
    } else {
        linksFixed.classList.remove('linkFix');
    }
})

let headerLinks = document.querySelector('#header-links');
let headerBurger = document.querySelector('#header-burger');

headerBurger.addEventListener('click', function(e) {
    e.preventDefault();

    headerBurger.classList.toggle('active');
    headerLinks.classList.toggle('show');
})