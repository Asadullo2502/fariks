let loaderElement = document.querySelector('#loader');
let linksFixed = document.querySelector('#linksFixed');

// window.addEventListener('load', function() {
//     loaderElement.classList.add('lod');
// })

setTimeout(() => {
    loaderElement.classList.add('lod');
}, 1500);

window.addEventListener('scroll', function() {
    if(window.pageYOffset >=  200) {
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

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

let fixLinksBurger = document.querySelector('#fixLinks-burger');
let fixLinks = document.querySelectorAll('.fixed_links');
let insta = document.querySelector('.instagram');

fixLinksBurger.addEventListener('click', function(e) {
    e.preventDefault();
    
    fixLinks.forEach( fixLinks => 
        fixLinks.classList.toggle('fixMobile'));
        insta.classList.toggle('fixMobile');
        linksFixed.classList.toggle('showLink');
        fixLinksBurger.classList.toggle('active1');

})