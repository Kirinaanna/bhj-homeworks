document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.querySelector('.tasks__list');
    const input = document.querySelector('.tasks__input');
    const form = document.querySelector('.tasks__control');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const value = input.value.trim();
        if (value !== '') {
            addTask(value);
            input.value = '';
        }
    });

    function addTask(text) {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
        <div class="task__title">${text}</div>
        <a href="#" class="task__remove">&times;</a>
      `;

        task.querySelector('.task__remove').addEventListener('click', function (event) {
            event.preventDefault();
            task.remove();
        });
        todoList.appendChild(task);
    }
});