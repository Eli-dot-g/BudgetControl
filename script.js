let operations = JSON.parse(localStorage.getItem("ops")) || [];

function save() {
    localStorage.setItem("ops", JSON.stringify(operations));
}

function render() {
    let list = document.getElementById("history");
    list.innerHTML = "";

    let balance = 0;
    let income = 0;
    let expense = 0;

    operations.forEach(op => {

        let amount = Number(op.amount);

        balance += amount;

        if (amount > 0) income += amount;
        else expense += Math.abs(amount);

        list.innerHTML += `
            <li>
                <span>
                    ${op.name}
                    <span class="${amount > 0 ? 'tag-income' : 'tag-expense'}">
                        ${amount}
                    </span>
                </span>

                <button class="delete" onclick="removeOperation(${op.id})">X</button>
            </li>
        `;
    });

    document.getElementById('balance-val').innerHTML = "Баланс: " + balance;
    document.getElementById('income').innerHTML = income;
    document.getElementById('expense').innerHTML = expense;
}

function removeOperation(id) {
    operations = operations.filter(op => op.id !== id);
    save();
    render();
}

document.getElementById('operation-add').addEventListener('click', () => {

    let name = document.getElementById('operation-name').value;
    let amount = document.getElementById('operation-amount').value;

    if (!name || !amount) {
        alert("Введіть дані");
        return;
    }

    operations.push({
        id: Date.now(),
        name,
        amount
    });

    save();
    render();

    document.getElementById('operation-name').value = "";
    document.getElementById('operation-amount').value = "";
});

render();