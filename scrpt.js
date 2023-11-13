let expression='';

function appendNumber(number) {
    expression += number;
    Document.getElementByld('result').value = expression;
}

function appendOperator(operator){
    expression += operator;
    document.getElementByld('result').value = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('result').valeue = 'Error';
        expression= '';
    }
}

function clear() {
    expression = '' ;
    document.getElementByld('result').value = '' ;
}