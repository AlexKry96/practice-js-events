const buttons = document.querySelectorAll('button')

const handleClicked = function (event) {
    event.target.textContent = 'clicked';
    console.log('clicked');
}

buttons.forEach(function (buttons){
    buttons.addEventListener('click', handleClicked, {once: true})
})