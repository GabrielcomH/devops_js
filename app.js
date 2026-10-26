function calcular(operacao, a, b) {
    switch (operacao) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Erro: Divisão por zero!";
            }
            return a / b;
        default:
            return "Operação inválida";
    }
}

const num1 = 10;
const num2 = 5;

console.log("=== CALCULADORA SIMPLES ===");
console.log(`${num1} + ${num2} = ${calcular('+', num1, num2)}`);
console.log(`${num1} - ${num2} = ${calcular('-', num1, num2)}`);
console.log(`${num1} * ${num2} = ${calcular('*', num1, num2)}`);
console.log(`${num1} / ${num2} = ${calcular('/', num1, num2)}`);

module.exports = { calcular };