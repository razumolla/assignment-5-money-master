function errorMsg() {
    const inputError = document.getElementById('input-wrong');
    return inputError;
}
function salary() {
    const totalIncomeText = document.getElementById('income');
    const totalIncomeValue = totalIncomeText.value;
    if (isNaN(totalIncomeValue) == true) {
        errorMsg().style.display = 'block';
    }
    else {
        const totalIncome = parseFloat(totalIncomeValue);
        return totalIncome;
    }
}
function getInput() {
    const foodCostField = document.getElementById('food');
    const foodCostV = foodCostField.value;
    const foodCost = parseFloat(foodCostV);
    const rentCostField = document.getElementById('rent');
    const rentCostV = rentCostField.value;
    const rentCost = parseFloat(rentCostV);
    const clothCostField = document.getElementById('clothes');
    const clothCostV = clothCostField.value;
    const clothCost = parseFloat(clothCostV);
    const expensesCost = foodCost + rentCost + clothCost;
    if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost)) {
        errorMsg().style.display = 'block';
    }
    else {
        return expensesCost;
    }
}
// calculate button 
document.getElementById('calculate-btn').addEventListener('click',
    function () {
        const incomeSalary = salary();
        let getInputCost = getInput();
        // Expenses cost
        const expencesBalance = document.getElementById('total-expenses');
        expencesBalance.innerText = getInputCost;
        // Balance
        const netBalance = incomeSalary - getInputCost;
        const balance = document.getElementById('available-balance').innerText = netBalance;
    })
// save button
document.getElementById('save-btn').addEventListener('click',
    function () {
        const incomeSalry = salary();
        let getInputCost2 = getInput();

        const persentage = document.getElementById('parcent').value;
        if (isNaN(persentage) == true) {
            errorMsg().style.display = 'block';
        }

        const saveMoney = (incomeSalry * (parseFloat(persentage) / 100)).toFixed(2);
        // saving amount
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = saveMoney;
        // remaining balance 
        const netBalance = incomeSalry - getInputCost2;
        const remainingBalance = netBalance - saveMoney;

        const balance2 = document.getElementById('remaining-balance');
        balance2.innerText = remainingBalance;
    }
);