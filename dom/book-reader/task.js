const fontSizes = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontSizes.forEach(size => {
    size.addEventListener('click', function (event) {
        event.preventDefault();
        fontSizes.forEach(s => s.classList.remove('font-size_active'));
        this.classList.add('font-size_active');
        book.classList.remove('book_fs-small', 'book_fs-big');
        if (this.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (this.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});
