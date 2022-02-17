function salary() {
    const totalIncomeText = document.getElementById('income');
    const totalIncome = totalIncomeText.value;
    return parseFloat(totalIncome);
}
function getInput() {
    const foodCostField = document.getElementById('food');
    const foodCost = foodCostField.value;
    const rentCostField = document.getElementById('rent');
    const rentCost = rentCostField.value;
    const clothCostField = document.getElementById('clothes');
    const clothCost = clothCostField.value;
    const expensesCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothCost);
    // clear input
    foodCostField.value = '';
    rentCostField.value = '';
    clothCostField.value = '';
    return expensesCost;
}
// calculate button 
document.getElementById('calculate-btn').addEventListener('click',
    function () {
        const totalIncome = salary();
        const getInputCost = getInput();
        const expencesBalance = document.getElementById('total-expenses').innerText = getInputCost;
        // Balance
        const netBalance = parseFloat(totalIncome) - getInputCost;
        const balance = document.getElementById('available-balance').innerText = netBalance;
    })
// save button
document.getElementById('save-btn').addEventListener('click',
    function () {
        const totalIncome = salary();
        const getInputCost = getInput();

        const persentage = document.getElementById('parcent').value;
        const saveMoney = (parseFloat(totalIncome) * (parseFloat(persentage) / 100)).toFixed(2);
        // saving amount
        const savingAmountText = document.getElementById('saving-amount').innerText = saveMoney;
        // remaining balance 
        const netBalance = parseFloat(totalIncome) - getInputCost;
        const remainingBalance = netBalance - saveMoney;

        const balance2 = document.getElementById('remaining-balance');
        balance2.innerText = remainingBalance;
    }
)