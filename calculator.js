document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const outputSpan = document.getElementById('output');
    const buttons = document.querySelectorAll('.calculator button');

    // Make functions globally accessible for verification check
    window.add = (a, b) => a + b;
    window.subtract = (a, b) => a - b;
    window.multiply = (a, b) => a * b;
    window.divide = (a, b) => {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const num1 = parseFloat(num1Input.value);
            const num2 = parseFloat(num2Input.value);

            if (isNaN(num1) || isNaN(num2)) {
                outputSpan.textContent = "Error: Please enter valid numbers";
                return;
            }

            const operation = button.dataset.op;
            let result;

            try {
                switch (operation) {
                    case 'add':
                        result = window.add(num1, num2);
                        break;
                    case 'subtract':
                        result = window.subtract(num1, num2);
                        break;
                    case 'multiply':
                        result = window.multiply(num1, num2);
                        break;
                    case 'divide':
                        result = window.divide(num1, num2);
                        break;
                    default:
                        result = "Error: Unknown operation";
                }
                outputSpan.textContent = result;
            } catch (error) {
                outputSpan.textContent = `Error: ${error.message}`;
            }
        });
    });
});