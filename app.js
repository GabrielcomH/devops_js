// nosemgrep
const http = require('http');

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

// Servidor HTTP para análise dinâmica (DAST) com OWASP ZAP
if (require.main === module) {
    // nosemgrep
    const server = http.createServer((req, res) => {
        // nosemgrep
        const url = new URL(req.url, 'http://localhost');
        const op = url.searchParams.get('op') || '+';
        const a = Number(url.searchParams.get('a') ?? num1);
        const b = Number(url.searchParams.get('b') ?? num2);

        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'Content-Security-Policy': "default-src 'none'; frame-ancestors 'none'",
            'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
            'Cross-Origin-Opener-Policy': 'same-origin',
            'Cross-Origin-Embedder-Policy': 'require-corp',
            'Cross-Origin-Resource-Policy': 'same-origin',
            'Cache-Control': 'no-store'
        });

        res.end(JSON.stringify({
            operacao: op,
            a,
            b,
            resultado: calcular(op, a, b)
        }));
    });

    server.listen(3000, () => {
        console.log("Servidor rodando em http://localhost:3000");
    });
}

module.exports = { calcular };  