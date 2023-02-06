var firstInput = document.getElementById('firstInput');
var secondInput = document.getElementById('secondInput');
var submitBtn = document.getElementById('submitBtn');
var resultState = [];
var payloadState = [];
function add(num1, num2, operation) {
    if (operation === void 0) { operation = '+'; }
    switch (operation) {
        case '+':
            return num1 + num2;
        default:
            throw new Error('Operation Not Found');
    }
}
function printResult(result, mode) {
    if (mode === 'success') {
        console.log("Result is ".concat(result));
    }
    else if (mode === 'error') {
    }
    return "Result is ".concat(result);
}
function isEven(result) {
    return result % 2 === 0 ? false : true;
}
function send(payload, httpMethod) {
    console.log(payload);
}
submitBtn.addEventListener('click', function () {
    var num1 = +firstInput.value;
    var num2 = secondInput.valueAsNumber;
    var result = add(num1, num2);
    resultState.push(num1);
    var payload = {
        res: result,
        header: 'Bearer '
    };
    payloadState.push(payload);
    send(payload, 1 /* HttpMethod.POST */);
    printResult(result, 'error');
});
