const colorInput = document.querySelectorAll('.color input');
const gradientBox = document.querySelector('.gradient-box');
const generateGradient = () => {
    const gradient = `linear-gradient(to top left , ${colorInput[0].value}, ${colorInput[1].value})`;
    gradientBox.style.background = gradient;
}

colorInput.forEach(input => {
    input.addEventListener('input', generateGradient);
});