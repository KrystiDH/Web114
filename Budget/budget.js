let money = 1000;
let housing = 100;
let food = 500;
let utilities = 225;

let totalIncome = money;

let totalExpenses = housing + food + utilities;

let remainingMoney = totalIncome - totalExpenses;

let rentPercentage = (housing / totalIncome) * 100;
let groceriesPercentage = (food / totalIncome) * 100;

console.log( "The total income was: " +   income.toLocaleString("en-US", 
    {style: "currency", currency: "USD", }));
console.log( "The rent amount was: " +   housing.toLocaleString("en-US", 
    {style: "currency", currency: "USD", }));
console.log( "The grocery amount was: " +   food.toLocaleString("en-US", 
    {style: "currency", currency: "USD", }));

console.log( "The percent spent on rent is: " + rentPercentage.toFixed(2) + "%");
console.log("The percent spent on groceries was: " + groceriesPercentage.toFixed(2) + "%");
