const formElement = document.getElementById('form');
const progressElement = document.getElementById('progress');
const sendButton = document.getElementById('send');

if (formElement && progressElement && sendButton) {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(formElement);
        const xhr = new XMLHttpRequest();

        xhr.open('POST', formElement.action);

        sendButton.disabled = true;
        progressElement.value = 0.0;

        xhr.upload.onprogress = (progressEvent) => {
            if (progressEvent.lengthComputable) {
                const fraction = progressEvent.loaded / progressEvent.total;
                progressElement.value = fraction;
            } else {
                progressElement.removeAttribute('value');
            }
        };

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                progressElement.value = 1.0;
            } else {
                progressElement.value = 0.0;
            }
            sendButton.disabled = false;
        };

        xhr.onerror = () => {
            progressElement.value = 0.0;
            sendButton.disabled = false;
        };

        xhr.send(formData);
    });
}


