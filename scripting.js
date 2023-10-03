function giveInstructions(){
    console.log('functionncalled');
    const instructions = document.createElement("p");
    instructions.textContent = "Welcome to Calorie Counter! You will be prompted to enter information for 3 meals (name, number of grams of fat, number of grams of carbs, number of grams of protein), and I will keep track of your calorie total for the day!";
    document.body.appendChild(instructions);
}
button.addEventListener("click", giveIntsructions);