import inquirer from 'inquirer' 


function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    };
}
function printMessage() {
    console.log('Debounce message');
}
function printMessageAlternative() {
    console.log('Another debounce message');
}
const debouncedPrintMessage = debounce(printMessage, 1000);
const debouncedAlternativeMessage = debounce(printMessageAlternative, 2000);



const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'Selecciona una opción: ',
        choices: [
            'Primer mensaje',
            'Segundo mensaje',
            'Salir de CLI',
        ],
    },

];

function runCLI() {
    inquirer.prompt(questions).then((answer) => {
        switch(answer.action) {
            case 'Primer mensaje':
                debouncedPrintMessage();
                break;
            case 'Segundo mensaje' :
                debouncedAlternativeMessage();
                break;
            case 'Salir de CLI':
                console.log('Hasta luego');
                break;
        }
    });
}
runCLI();