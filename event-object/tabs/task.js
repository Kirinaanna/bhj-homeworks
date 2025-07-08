const buttons = document.querySelectorAll(".tab")
const tabs = document.querySelectorAll(".tab__content")

buttons.forEach((el, i) => {
    el.onclick = function () {
        buttons.forEach(el => {
            el.classList.remove('tab_active')
        })
        buttons[i].classList.add('tab_active')

        tabs.forEach(el => {
            el.classList.remove('tab__content_active')
        })
        tabs[i].classList.add('tab__content_active')

    }
})