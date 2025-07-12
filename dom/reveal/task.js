const reveal = document.querySelectorAll(".reveal")
window.addEventListener('scroll', function () {
    reveal.forEach(function (el) {
        const top = (el.getBoundingClientRect().top - window.innerHeight / 2);
        if (top <= 0) {
            el.classList.add("reveal_active");
        }
    })

})