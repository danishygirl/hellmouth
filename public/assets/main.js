const year = document.getElementById('current-year');
if (year) year.textContent = new Date().getFullYear();
const backToTop = document.querySelector('#back-top');
if (backToTop) backToTop.addEventListener('click', event => { event.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });
