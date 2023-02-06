const firstInput = document.getElementById('firstInput') as HTMLInputElement;
const secondInput = <HTMLInputElement>document.getElementById('secondInput');
const submitBtn = document.getElementById('submitBtn')!;

type PayloadState = { res: number, header: string };
type ModeType = 'success' | 'error' | { info: string };

const enum HttpMethod  { GET, POST, PUT, PATCH, DELETE, OPTIONS }

const resultState: number[] = [];
const payloadState: PayloadState[] = []

function add(num1: number, num2: number, operation: '+' | '-' | '*' | '/' = '+'): number {
    switch (operation) {
        case '+':
            return num1 + num2;
        default:
            throw new Error('Operation Not Found')
    }
}

function printResult(result: number, mode: ModeType): string {
    if (mode === 'success') {
        console.log(`Result is ${result}`);
    } else if (mode === 'error') {
    }
    return `Result is ${result}`
}

function isEven(result: number): boolean {
    return result % 2 === 0 ? false : true;
}

function send(payload: PayloadState, httpMethod: HttpMethod) {
    console.log(payload);
}

submitBtn.addEventListener('click', () => {
    const num1 = +firstInput.value;
    const num2 = secondInput.valueAsNumber;

    const result = add(num1, num2);

    resultState.push(num1);

    const payload: PayloadState = {
        res: result,
        header: 'Bearer '
    };

    payloadState.push(payload);

    send(payload, HttpMethod.POST);

    printResult(result, 'error');
});

