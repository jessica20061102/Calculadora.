let expression ='';

function appendNumber(number){
    expression += number;
    Document.getElementByld('result').value = expression;
}

function appendOperator(operator){
    expression += operator;
    document.getElementByld('result').value = expression;
}

function calculate(){
    try {
        const result = eval(expression);
        document.getElementById('result').value = result;
        expression= '';
    } catch (error) {
        document.getElementById('result').value = 'Error';
        expression = '';
  }
}

function clear() {
    expression = '';
    document.getElementByld('result').value = '';
}