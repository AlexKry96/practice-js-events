document.addEventListener("DOMContentLoaded", () => {
    const mouseEnter = function () {
        alert('Najechałeś na div')
    };

    const mouseLeave =  function () {
        alert('Opuściłeś div')
    };



    const container = document.querySelector('div')
    if (container) {
            container.addEventListener('mouseenter', mouseEnter)
            container.addEventListener('mouseleave', mouseLeave)
    };

})