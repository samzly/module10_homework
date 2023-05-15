const btnSvg = document.getElementsByClassName('button__svg');
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    setTimeout(() => {
        btnSvg[0].classList.toggle('clicked');
        btnSvg[1].classList.toggle('shown');
    }, 800);
    // btnSvg[0].classList.toggle('clicked');
    // btnSvg[1].classList.toggle('shown');
    btn.classList.toggle('button_clicked')
})