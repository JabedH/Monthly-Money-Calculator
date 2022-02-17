// convert Value
function convertValue(valueId) {
  const getValueId = document.getElementById(valueId);
  const getValueConvert = parseFloat(getValueId.value);
  if (!isNaN(getValueConvert) && getValueConvert > 0) {
    return getValueConvert;
  }
}
// total Expense and Income
function totalExpenseIncome(convertIncomeValue, totalValue) {
  const expensesValue = document.getElementById("expenses");
  const convertExpensesValue = parseFloat(expensesValue.innerText);
  const totalExpensesValue = convertExpensesValue + totalValue;
  expensesValue.innerText = totalExpensesValue;

  // push the value to total balance
  const balance = document.getElementById("addBalance");
  const convertBalance = parseFloat(balance.innerText);
  const totalConvertBalance =
    convertIncomeValue + convertBalance - totalExpensesValue;
  if (totalExpensesValue < convertIncomeValue) {
    balance.innerText = totalConvertBalance;
  }

  // error message
  const expensesAlertMessage = document.getElementById("expensesAlert");
  if (totalExpensesValue > convertIncomeValue) {
    expensesAlertMessage.removeAttribute("hidden");
  }
}

document.getElementById("calculateBtn").addEventListener("click", function () {
  // expenses area
  const foodConvertValue = convertValue("foodValue");
  const rentConvertValue = convertValue("rentValue");
  const clothesConvertValue = convertValue("clothesValue");
  const convertIncomeValue = convertValue("incomeValue");
  const totalValue = foodConvertValue + rentConvertValue + clothesConvertValue;

  if (!isNaN(totalValue && convertIncomeValue)) {
    totalExpenseIncome(convertIncomeValue, totalValue);
  }
  // alert Message
  if (isNaN(totalValue || convertIncomeValue)) {
    alert("please input valid number");
  }
  if ((totalValue || convertIncomeValue) < 0) {
    alert("please input valid number");
  }

  // error message
  const incomeAlertMessage = document.getElementById("incomeAlert");
  if ((totalValue || convertIncomeValue) < 0) {
    incomeAlertMessage.removeAttribute("hidden");
  }
  if (isNaN(totalValue || convertIncomeValue)) {
    incomeAlertMessage.removeAttribute("hidden");
  }
});

// saving amount area
document.getElementById("saveBtn").addEventListener("click", function () {
  console.log("clicked");
  // get value from input balance.
  const convertIncomeValue = convertValue("incomeValue");
  // calculate Percentage
  const getSavingAmount = convertValue("savingValue");
  const savingAmountPercentage = getSavingAmount / 100;
  const totalPercentage = savingAmountPercentage * convertIncomeValue;

  // get Balance value
  const balance = document.getElementById("addBalance");
  const convertBalance = parseFloat(balance.innerText);

  //Saving Amount
  const savingInnerText = document.getElementById("savingAmount");
  const convertSavingInnerText = parseFloat(savingInnerText.innerText);
  console.log(convertSavingInnerText);
  const totalSaving = convertSavingInnerText + totalPercentage;
  if (totalSaving < convertBalance) {
    savingInnerText.innerText = totalSaving;
  }
  // Remaining Balance
  const remainingBalance = document.getElementById("remainingBalance");
  const convertRemainingBalance = parseFloat(remainingBalance.innerText);
  if (totalSaving < convertBalance) {
    const totalRemainingBalance =
      convertRemainingBalance + convertBalance - totalPercentage;
    remainingBalance.innerText = totalRemainingBalance;
  }
  // error message
  const savingAlertMessage = document.getElementById("savingAlert");
  if (totalSaving > convertBalance) {
    savingAlertMessage.removeAttribute("hidden");
  }
});
