let output = document.querySelector('.calculator__output');

let calculator = document.querySelector('.calculator');


calculator.addEventListener('click', function(e) {
    if (!e.target.classList.contains('calculator__key')) return;
    const value = e.target.innerText;

    switch(value) {
        case 'AC':
            output.innerText = '';
            break;

        case '=':
            output.innerText = eval(output.innerText).toFixed(2);
            break;

        default:
            output.innerText += value;
    }
});  


