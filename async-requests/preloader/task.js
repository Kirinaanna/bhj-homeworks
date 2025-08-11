const loaderElement = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

function renderRates(data) {
    itemsContainer.innerHTML = '';

    const valuteDictionary = data && data.response && data.response.Valute ? data.response.Valute : {};
    Object.values(valuteDictionary).forEach((valute) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';

        const codeElement = document.createElement('div');
        codeElement.className = 'item__code';
        codeElement.textContent = valute.CharCode;

        const valueElement = document.createElement('div');
        valueElement.className = 'item__value';
        valueElement.textContent = valute.Value;

        const currencyElement = document.createElement('div');
        currencyElement.className = 'item__currency';
        currencyElement.textContent = 'руб.';

        itemElement.append(codeElement, valueElement, currencyElement);
        itemsContainer.appendChild(itemElement);
    });
}

function hideLoader() {
    loaderElement.classList.remove('loader_active');
}

fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to load rates');
        }
        return response.json();
    })
    .then((data) => {
        renderRates(data);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        hideLoader();
    });


