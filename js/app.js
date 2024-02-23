const colorInput = document.querySelectorAll('.color input');

const generateGradient = () => {
    const gradient = `linear-gradient(to top left , ${colorInput[0].value}, ${colorInput[1].value})`;
    console.log(gradient);
}

colorInput.forEach(input => {
    input.addEventListener('input', generateGradient);
});