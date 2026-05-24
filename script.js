let balance = 0;
let income = 0;
let expense = 0;

document.getElementById('operation-add').addEventListener('click', () => {

    let name = document.getElementById('operation-name').value;
    let amount = parseInt(document.getElementById('operation-amount').value);

    if (isNaN(amount) || name === "") {
        alert("Заповни поля");
        return;
    }

    balance += amount;

    if (amount > 0) {
        income += amount;
    } else {
        expense += Math.abs(amount);
    }

    document.getElementById('balance-val').innerHTML = "Ваш Баланс: " + balance;
    document.getElementById('income').innerHTML = income;
    document.getElementById('expense').innerHTML = expense;

    document.getElementById('history').innerHTML += `
        <li>
            ${name}
            <div class="${amount > 0 ? 'income' : 'expense'}">
                ${amount}
            </div>
        </li>
    `;

    document.getElementById('operation-name').value = "";
    document.getElementById('operation-amount').value = "";
});