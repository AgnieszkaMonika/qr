const form = document.getElementById('qr-form');
const qr = document.getElementById('qrcode');

const onSubmit = (e) => {
    e.preventDefault();
    clear();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;

    if (url === '') {
        return;
    } else {
        generateQRCode(url, size, color);
        const checkExist = setInterval(function () {
            const src = qr.querySelector('img').getAttribute('src');
            if (src) {
                createSaveBtn(src);
                clearInterval(checkExist);
            }
        }, 100);

    }
};

const generateQRCode = (url, size, color) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        colorDark: color,
    });
};

const clear = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('download-button');
    if (saveBtn) {
        saveBtn.remove();
    }
};

const createSaveBtn = (url) => {
    const link = `<a href='${url}' id='download-button' class='button button-primary save-qr-code' download='qrcode'>Download Image</a>`;
    document.getElementById('download-btn').innerHTML = link;
};

form.addEventListener('submit', onSubmit);