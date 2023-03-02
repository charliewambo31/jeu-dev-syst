let userinput
switch(true) {
  case userinput <= 10:
    alert("Less than 10");
    break;

  case userinput > 10:
    alert("Greater than 10");
    break;

  default:
    alert("Please input value");
    break;
}


const myArray = ["apple", "banana", "orange", "grape", "pear"];
const randomIndex = Math.floor(Math.random() * myArray.length);
const randomElement = myArray[randomIndex];
console.log(randomElement);




const selectElement1 = document.querySelector('.choix1');
selectElement1.addEventListener('change', (event) => {
var result1 = document.querySelector('.clinique1');
  result1.textContent = `La clinique choisi est : ${event.target.value}`;
});










function inputIQFunction() {
    var userinput = document.getElementById("inputIQ").value;
    userinput = parseInt(userinput);
    switch (true) {

        case userinput <= 10:
            alert("Less than 10");
            break;

        case userinput > 10:
            alert("Greater than 10");
            break;

        default:
            alert("Please input value");
            break;
      }
  }


  
 

