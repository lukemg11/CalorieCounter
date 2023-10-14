var num1 = 0;
var mealCalories = 0;
var totalCalories = 0;
eventNum = 0;
function askForFatData(){
    num1 = 0;
    eventNum = 5;
    const question1 = document.createElement("p");
    question1.textContent = "How many grams of fat were in your meal? Click the add or subtract buttons and then the done button when you have the right number.";
    document.body.appendChild(question1);
}
function askForCarbData(){
    num1 = 1;
    eventNum = 10;
    const question2 = document.createElement("p");
    question2.textContent = "How many grams of carbs were in your meal? Click the add or subtract buttons and then the done button when you have the right number.";
    document.body.appendChild(question2);
}
function askForProteinData(){
    num1 = 2;
    eventNum = 15;
    const question3 = document.createElement("p");
    question3.textContent = "How many grams of protein were in your meal? Click the add or subtract buttons and then the done button when you have the right number.";
    document.body.appendChild(question3);
}
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
//const button4 = document.querySelector("#button4");

button1.addEventListener("click", askForFatData);
button2.addEventListener("click", askForCarbData);
button3.addEventListener("click", askForProteinData);
//button4.addEventListener("click", done);

function initialize()
{
	equationOutput = document.getElementById("equation");
    caloriecounterOutput = document.getElementById("caloriecounter");
    instructionsOutput = document.getElementById("instructions");
    doneOutput = document.getElementById("instructions");
	firstNumber = 0;
    instrs = "";
    donemsg = "";
	display();
}
function updateFirstNumber(modifier)
{
	firstNumber += modifier;
    if(firstNumber < 0)
    {
        firstNumber = 0;
    }
	calculate();
}
function updateInstructions()
{
	instrs = "Welcome to Calorie Counter! You will be prompted to enter information for 3 meals (number of grams of fat, number of grams of carbs, number of grams of protein), and I will keep track of your calorie total for the day!";
	calculate();
}
function done()
{
    if((mealCalories == 0) && (totalCalories > 0))
    {
        askForFatData();
        firstNumber = 0;
    }
    else if(num1 == 0) 
    {
        totalCalories += (firstNumber * 9);
        mealCalories += (firstNumber * 9);
        askForCarbData();
        firstNumber = 0;
    }
    else if(num1 == 1)
    {
        totalCalories += (firstNumber * 4);
        mealCalories += (firstNumber * 4);
        askForProteinData();
        firstNumber = 0;
    }
    else
    {
        totalCalories += (firstNumber * 4);
        mealCalories = 0;
        donemsg = "Thanks for the information. Click on the next meal to enter more data!";
        firstNumber = 0;
        num1 = 0;
    }
    display2();
}
function calculate()
{
	display();
}
function display()
{
	equationOutput.innerHTML = firstNumber;
    caloriecounterOutput.innerHTML = "Meal Calories: " + mealCalories + "       " + "Total Calories: " + totalCalories;
    instructionsOutput.innerHTML = instrs;
}
function display2()
{
    doneOutput.innerHTML = donemsg;
}