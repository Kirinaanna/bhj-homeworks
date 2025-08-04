document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.has-tooltip');
    let activeTooltip = null;

    tooltips.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            if (activeTooltip && activeTooltip.trigger === this) {
                activeTooltip.element.remove();
                activeTooltip = null;
                return;
            }

            if (activeTooltip) {
                activeTooltip.element.remove();
                activeTooltip = null;
            }

            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip tooltip_active';
            tooltip.textContent = this.title;

            const coords = this.getBoundingClientRect();
            tooltip.style.left = coords.left + window.scrollX + 'px';
            tooltip.style.top = coords.bottom + window.scrollY + 'px';

            document.body.appendChild(tooltip);

            activeTooltip = {
                element: tooltip,
                trigger: this
            };
        });
    });

    document.addEventListener('click', function (event) {
        if (
            activeTooltip &&
            !event.target.classList.contains('has-tooltip')
        ) {
            activeTooltip.element.remove();
            activeTooltip = null;
        }
    });
});