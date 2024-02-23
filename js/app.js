const colorInput = document.querySelectorAll('.color input');
const gradientBox = document.querySelector('.gradient-box');
const selectedMenu = document.querySelector('.selectet-box select');
const textarea = document.querySelector('textarea');
const refresh = document.querySelector('.refresh');
const copyBtn = document.querySelector('.copy');

const getRamdonColor = () => {
    const ramdonHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${ramdonHex}`;
}

const generateGradient = (isRamdom) => {

    if (isRamdom) {
        colorInput[0].value = getRamdonColor();
        colorInput[1].value = getRamdonColor();
    }
    const gradient = `linear-gradient(${selectedMenu.value}, ${colorInput[0].value}, ${colorInput[1].value})`;

    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient}`;
}
const copyCode = () => {
    navigator.clipboard.writeText(textarea.value)
    copyBtn.innerText = 'codigo copiado';
    setTimeout(() => {
        copyBtn.innerText = 'copiar Codigo';
    }, 1600);
}

colorInput.forEach(input => {
    input.addEventListener('input', () => generateGradient(false));
});


selectedMenu.addEventListener('change', () => generateGradient(false));
refresh.addEventListener('click', () => generateGradient(true))
copyBtn.addEventListener('click', copyCode);