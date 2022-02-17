function errorMsg(inputId) {
    const inputError = document.getElementById(inputId);
    return inputError;
}
function salary() {
    const totalIncomeText = document.getElementById('income');
    const totalIncomeValue = totalIncomeText.value;
    if (isNaN(totalIncomeValue) || (totalIncomeValue < 0)) {
        errorMsg('salary-wrong').style.display = 'block';
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
    if (isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost) || (foodCost < 0) || (rentCost < 0) || (clothCost < 0)) {
        errorMsg('expenses-wrong').style.display = 'block';
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
        if (netBalance < 0) {
            errorMsg('balance-over').style.display = 'block';
        }
        else {
            const balance = document.getElementById('available-balance');
            balance.innerText = netBalance;
        }
    })
// save button
document.getElementById('save-btn').addEventListener('click',
    function () {
        const incomeSalry = salary();
        let getInputCost2 = getInput();

        const persentage = document.getElementById('parcent').value;
        if (isNaN(persentage) == true || (persentage < 0)) {
            errorMsg('percent-wrong').style.display = 'block';
        }
        const saveMoney = (incomeSalry * (parseFloat(persentage) / 100)).toFixed(2);
        // saving amount
        const savingAmountText = document.getElementById('saving-amount');
        savingAmountText.innerText = saveMoney;
        // remaining balance 
        const netBalance = incomeSalry - getInputCost2;
        const remainingBalance = netBalance - saveMoney;
        if (remainingBalance < 0) {
            errorMsg('balance-over').style.display = 'block';
        }
        else {
            const balance2 = document.getElementById('remaining-balance');
            balance2.innerText = remainingBalance;
        }
    }
);