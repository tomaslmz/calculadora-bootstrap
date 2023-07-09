var par = true;
var equation = '';
const screen = document.getElementById("screen");

const buttons = (value) => {
    switch(value) {
        case 'AC':
            equation = '';
            screen.innerHTML = '';
            par = true;
        break;
        case '()':
            if(par) {
                equation += '(';
                screen.innerHTML += '(';
                par = false;
            } else {
                equation += ')';
                screen.innerHTML += ')';
                par = true;
            }
        break;
        case '/':
            equation += '/';
            screen.innerHTML += '÷';
        break;
        case '=':
            equation = math.evaluate(equation)
            screen.innerHTML = equation;
        break;
        case 'backspace':
            screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
            equation = equation.substring(0, equation.length - 1);
        break;
        default:
            equation+=value;
            screen.innerHTML += value;
        break;
    }
}