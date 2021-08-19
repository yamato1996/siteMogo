
//header
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
});
