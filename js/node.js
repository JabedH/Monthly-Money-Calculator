// convert Value
function convertValue(valueId) {
  const getValueId = document.getElementById(valueId);
  const getValueConvert = parseFloat(getValueId.value);
  if (!isNaN(getValueConvert) && getValueConvert > 0) {
    return getValueConvert;
  }
  // if (isNaN(getValueConvert)) {
  //   console.log("please insert a number");
  // } else if (getValueConvert < 0) {
  //   console.log("please insert possivtive number");
  // } else if (!isNaN(getValueConvert) && getValueConvert > 0) {
  //   return getValueConvert;
  // }
  // return getValueConvert;
}

// Income and Expenses
document.getElementById("calculateBtn").addEventListener("click", function () {
  // expenses area
  const convertIncomeValue = convertValue("incomeValue");

  const incomeAlertMessage = document.getElementById("incomeAlert");
  const negativeAlertMessage = document.getElementById("negativeAlert");
  if (isNaN(convertIncomeValue)) {
    incomeAlertMessage.removeAttribute("hidden");
  }
  if (isNaN(convertIncomeValue)) {
    alert("Please input valid number");
  }

  if (incomeAlertMessage > 0) {
    negativeAlertMessage.removeAttribute("hidden");
  }
  if (convertIncomeValue > 0) {
    newConvertIncomeValue = convertIncomeValue;
  }
  const foodConvertValue = convertValue("foodValue");
  const rentConvertValue = convertValue("rentValue");
  const clothesConvertValue = convertValue("clothesValue");
  const totalValue = foodConvertValue + rentConvertValue + clothesConvertValue;
  if (!isNaN(totalValue) && totalValue > 0) {
    newTotalValue = totalValue;
  }
  if (isNaN(totalValue)) {
    incomeAlertMessage.removeAttribute("hidden");
  }
  // expenses
  const expensesValue = document.getElementById("expenses");
  const convertExpensesValue = parseFloat(expensesValue.innerText);
  const totalExpensesValue = convertExpensesValue + newTotalValue;
  expensesValue.innerText = totalExpensesValue;
  // push the value to total balance

  const balance = document.getElementById("addBalance");
  const convertBalance = parseFloat(balance.innerText);
  const totalConvertBalance =
    newConvertIncomeValue + convertBalance - totalExpensesValue;
  balance.innerText = totalConvertBalance;

  // error message
  const expensesAlertMessage = document.getElementById("expensesAlert");
  if (totalExpensesValue > newConvertIncomeValue) {
    expensesAlertMessage.removeAttribute("hidden");
  }
});
// saving amount area
document.getElementById("saveBtn").addEventListener("click", function () {
  console.log("clicked");
  // get value from input balance
  const newConvertIncomeValue = convertValue("incomeValue");
  // calculate Percentage
  const getSavingAmount = convertValue("savingValue");
  const savingAmountPercentage = getSavingAmount / 100;
  const totalPercentage = savingAmountPercentage * newConvertIncomeValue;

  //Saving Amount
  const savingInnerText = document.getElementById("savingAmount");
  const convertSavingInnerText = parseFloat(savingInnerText.innerText);
  console.log(convertSavingInnerText);
  const totalSaving = convertSavingInnerText + totalPercentage;
  savingInnerText.innerText = totalSaving;

  // Remaining Balance
  const remainingBalance = document.getElementById("remainingBalance");
  const convertRemainingBalance = parseFloat(remainingBalance.innerText);
  const totalRemainingBalance =
    convertRemainingBalance + newConvertIncomeValue - totalPercentage;
  remainingBalance.innerText = totalRemainingBalance;

  // error message
  const balance = document.getElementById("addBalance");
  const convertBalance = parseFloat(balance.innerText);
  const savingAlertMessage = document.getElementById("savingAlert");
  if (totalSaving > convertBalance) {
    savingAlertMessage.removeAttribute("hidden");
  }
});
