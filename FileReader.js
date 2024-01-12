//This scripts purpose is to read the csv file / database.

const reader = new FileReader(); //The reader gains access to the csv file
const submit = document.getElementById("submitBTN").addEventListener("click", updateFile); //When submit button is clicked it will run updateFile()

function updateFile(){
    const file = document.getElementById("myFile"); //Route access to file
    reader.readAsText(file);
}

