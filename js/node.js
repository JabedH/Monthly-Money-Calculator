//
function convertValue(foodId, rentId, clothesId) {
  const foodValue = document.getElementById(foodId);
  const convertFoodValue = parseFloat(foodValue.value);
  const rentValue = document.getElementById(rentId);
  const convertRentValue = parseFloat(rentValue.value);
  const clothesValue = document.getElementById(clothesId);
  const convertClothesValue = parseFloat(clothesValue.value);
  const totalValue = convertFoodValue + convertRentValue + convertClothesValue;
  return totalValue;
}
// expense function
function getExpenses(convertFoodValue) {
  //   const foodValue = document.getElementById(foodId);
  //   const rentValue = document.getElementById(rentId);
  //   const clothesValue = document.getElementById(itemId);
  const expensesValue = document.getElementById("expenses");
  const convertExpensesValue = parseFloat(expensesValue.innerText);
  const totalExpensesValue = convertExpensesValue + convertFoodValue;
  expensesValue.innerText = totalExpensesValue;
  return totalExpensesValue;
}
// ------------------
document.getElementById("calculate").addEventListener("click", function () {
  const totalExpensesValue = convertValue(
    "foodValue",
    "rentValue",
    "clothesValue"
  );
  const foodExpensesValue = getExpenses(totalExpensesValue);
  let incomeValue = document.getElementById("incomeValue").value;
  let convertIncomeValue = parseFloat(incomeValue);
  const balance = document.getElementById("addBalance");
  const convertBalance = parseFloat(balance.innerText);
  balance.innerText = convertIncomeValue + convertBalance - totalExpensesValue;
});

// document.getElementById("calculate").addEventListener("click", function () {
//   calculate expenses
//   const foodValue = document.getElementById("foodValue");
//   const convertFoodValue = parseFloat(foodValue.value);
//   const expensesValue = document.getElementById("expenses");
//   const convertExpensesValue = parseFloat(expensesValue.innerText);
//   const totalExpensesValue = convertExpensesValue + convertFoodValue;
//   expensesValue.innerText = totalExpensesValue;
//calculate primary income
