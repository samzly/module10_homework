const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    alert(`Разрешение Вашего экрана:\nширина - ${window.screen.width} пикселей\nвысота - ${window.screen.height} пикселей.`)
})