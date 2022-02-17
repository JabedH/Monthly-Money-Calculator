// convert Value
function convertValue(valueId) {
  const getValueId = document.getElementById(valueId);
  const getValueConvert = parseFloat(getValueId.value);
  return getValueConvert;
}

// Income and Expenses
document.getElementById("calculateBtn").addEventListener("click", function () {
  // expenses area
  const foodConvertValue = convertValue("foodValue");
  const rentConvertValue = convertValue("rentValue");
  const clothesConvertValue = convertValue("clothesValue");
  const totalValue = foodConvertValue + rentConvertValue + clothesConvertValue;
  // expenses 2nd value
  const expensesValue = document.getElementById("expenses");
  const convertExpensesValue = parseFloat(expensesValue.innerText);
  const totalExpensesValue = convertExpensesValue + totalValue;
  expensesValue.innerText = totalExpensesValue;
  // push the value to total balance
  const convertIncomeValue = convertValue("incomeValue");
  const balance = document.getElementById("addBalance");
  const convertBalance = parseFloat(balance.innerText);
  const totalConvertBalance =
    convertIncomeValue + convertBalance - totalExpensesValue;
  balance.innerText = totalConvertBalance;
});
// saving amount area
document.getElementById("saveBtn").addEventListener("click", function () {
  console.log("clicked");
  // get value from balance
  const balance = document.getElementById("addBalance");
  const convertBalance = parseFloat(balance.innerText);
  // calculate Percentage
  const getSavingAmount = convertValue("savingValue");
  const savingAmountPercentage = getSavingAmount / 100;
  console.log("totalPercentage", savingAmountPercentage);
  const totalPercentage = savingAmountPercentage * convertBalance;

  //Saving Amount
  const savingInnerText = document.getElementById("savingAmount");
  const convertSavingInnerText = parseFloat(savingInnerText.innerText);
  console.log(convertSavingInnerText);
  savingInnerText.innerText = convertSavingInnerText + totalPercentage;

  // Remaining Balance
  const remainingBalance = document.getElementById("remainingBalance");
  const convertRemainingBalance = parseFloat(remainingBalance.innerText);
  const totalRemainingBalance =
    convertRemainingBalance + convertBalance - totalPercentage;
  remainingBalance.innerText = totalRemainingBalance;
});
