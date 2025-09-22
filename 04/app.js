const divs = document.querySelectorAll('div');


divs.forEach(function(div) {
    div.addEventListener('click', function(e) {
        e.stopPropagation();

        let current = e.currentTarget;

        while (current && current.tagName === 'DIV') {

            const element = current;
            const delay = Number(element.dataset.time) || 0;

            setTimeout(function() {
                element.classList.add('clicked')
            }, delay);

            current = current.parentElement;           
        }
    })
})

document.body.addEventListener('click', function (e) {

    if(e.target === document.body) {
        document.querySelectorAll('div').forEach(function (div) {
            div.classList.remove('clicked')
        })

    }
    
})

