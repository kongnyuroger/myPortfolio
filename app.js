const page = document.querySelector('body');
const button = document.querySelector('.toggle');
const aTags = document.querySelectorAll('a');

function light() {
    page.classList.toggle('active');
    button.classList.toggle('active');
    aTags.classList.toggle('active');
}