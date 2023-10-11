function giveInstructions(){
    const instructions = document.createElement("p");
    instructions.textContent = "Welcome to Calorie Counter! You will be prompted to enter information for 3 meals (number of grams of fat, number of grams of carbs, number of grams of protein), and I will keep track of your calorie total for the day!";
    document.body.appendChild(instructions);
}
function askForMealData(){
    const question1 = document.createElement("p");
    const question2 = document.createElement("p");
    const question3 = document.createElement("p");
    question1.textContent = "How many grams of fat were in your meal?";
    question2.textContent = "How many grams of carbs were in your meal?";
    question3.textContent = "How many grams of protein were in your meal?";
    document.body.appendChild(question1);
    document.body.appendChild(question2);
    document.body.appendChild(question3);
    
}
const button = document.querySelector("#button");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
button.addEventListener("click", giveInstructions);
button1.addEventListener("click", askForMealData);
button2.addEventListener("click", askForMealData);
button3.addEventListener("click", askForMealData);

function giveOtherInstructions(){
    const myDiv = document.getElementById("test");
    console.log(myDiv)
    myDiv.innerHTMl = "Instructions"
}