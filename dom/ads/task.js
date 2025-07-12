const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = Array.from(cases).findIndex(el => el.classList.contains('rotator__case_active'));
    if (activeIndex === -1) activeIndex = 0;

    setInterval(() => {
        cases[activeIndex].classList.remove('rotator__case_active');
        activeIndex = (activeIndex + 1) % cases.length;
        cases[activeIndex].classList.add('rotator__case_active');
    }, 1000);
});

