document.addEventListener('mousemove', function(e) {

    let cursorEffect = document.querySelector(".big-circle");

        setTimeout(() => {
            cursorEffect.style.left = e.pageX + 'px';
            cursorEffect.style.top = e.pageY + 'px';
        }, 60);
        
})


