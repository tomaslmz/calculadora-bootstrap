var par = true;
var equation = '';
const screen = document.getElementById("screen");

const buttons = (value) => {
    if(screen.innerHTML == 'ERROR') {
        equation = '';
        screen.innerHTML = '';
        par = true;
        screen.style.color = 'black';
    }

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
        case '*':
            if(equation.substring(equation.length - 1) == '+' || equation.substring(equation.length - 1) == '-' || equation.substring(equation.length - 1) == '*' || equation.substring(equation.length - 1) == '/' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '%' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '√' || screen.innerHTML.substring(screen.innerHTML.length - 1) == 'π' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '^' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '!') {
                equation = equation.substring(0, equation.length - 1);
                screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
            }
            equation+=value;
            screen.innerHTML += 'x';
        break;
        case '/':
            if(equation.substring(equation.length - 1) == '+' || equation.substring(equation.length - 1) == '-' || equation.substring(equation.length - 1) == '*' || equation.substring(equation.length - 1) == '/' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '%' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '√' || screen.innerHTML.substring(screen.innerHTML.length - 1) == 'π' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '^' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '!') {
                equation = equation.substring(0, equation.length - 1);
                screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
            }

            equation+='/';
            screen.innerHTML += '÷';
        break;
        case '=':
            if(screen.innerHTML != '') {
                try {
                    equation = eval(equation).toString();
                    screen.innerHTML = equation;
                } catch(e) {
                    alert(e);
                    screen.style.color = 'red';
                    screen.innerHTML = 'ERROR';
                }
            }
        break;
        case '%':
            if(equation.substring(equation.length - 1) == '+' || equation.substring(equation.length - 1) == '-' || equation.substring(equation.length - 1) == '*' || equation.substring(equation.length - 1) == '/' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '%' || screen.innerHTML.substring(0, screen.innerHTML.length - 1) == '√' || screen.innerHTML.substring(screen.innerHTML.length - 1) == 'π' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '^' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '!') {
                equation = equation.substring(0, equation.length - 1);
                screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
            }
            equation += '*(1/100)*';
            screen.innerHTML += '%';
        break;
        case 'backspace':
            if(screen.innerHTML.substring(0, screen.innerHTML.length - 1) == '(') {
                par = false;
            } else {
                par = true;
            }
            screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
            equation = equation.substring(0, equation.length - 1);
        break;
        case '√':
            if(equation.substring(equation.length - 1) == '+' || equation.substring(equation.length - 1) == '-' || equation.substring(equation.length - 1) == '*' || equation.substring(equation.length - 1) == '/' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '%' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '√' || screen.innerHTML.substring(screen.innerHTML.length - 1) == 'π' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '^' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '!') {
                screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
                equation = equation.substring(0, equation.length - 1);
            }
            equation += "Math.sqrt(";
            screen.innerHTML += "√(";
            par = false;

        break;
        default:
            if(typeof value == 'number') {
                equation+=value;
                screen.innerHTML += value;
            } else {
                if(equation.substring(equation.length - 1) == '+' || equation.substring(equation.length - 1) == '-' || equation.substring(equation.length - 1) == '*' || equation.substring(equation.length - 1) == '/' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '%' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '√' || screen.innerHTML.substring(screen.innerHTML.length - 1) == 'π' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '^' || screen.innerHTML.substring(screen.innerHTML.length - 1) == '!') {
                    screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length - 1);
                    equation = equation.substring(0, equation.length - 1);
                    
                } 
                equation += value;
                screen.innerHTML += value;
            }
        break;
    }
}

{/* <button class="btn btn-dark col-2" onclick="buttons('√')">√</button>
<button class="btn btn-dark col-2" onclick="buttons('π')">π</button>
<button class="btn btn-dark col-2" onclick="buttons('^')">^</button>
<button class="btn btn-dark col-2" onclick="buttons('!')">!</button> */}