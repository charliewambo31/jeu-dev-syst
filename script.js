// let userinput
// switch(true) {
//   case userinput <= 10:
//     alert("Less than 10");
//     break;

//   case userinput > 10:
//     alert("Greater than 10");
//     break;

//   default:
//     alert("Please input value");
//     break;
// }







const selectElement1 = document.querySelector('.choix1');
selectElement1.addEventListener('change', (event) => {
var result1 = document.querySelector('.clinique1');
  result1.textContent = `Votre choix est : ${event.target.value}`;
});


const myArray = ["apple", "banana", "orange", "grape", "pear"];
const randomIndex = Math.floor(Math.random() * myArray.length);
const randomElement = myArray[randomIndex];
console.log(randomElement);


// const bouton = document.getElementById('button');
// bouton.addEventListener('click', () => {
//   alert('Le bouton a été cliqué !');
// });




const bouton1 = document.getElementById('button');
bouton1.addEventListener('click', () => {
  const choix = Math.random();
  if (choix < 0.1) {
    alert('Vous avez gagne 1000$');
  } else if  (choix < 0.3) {
    alert('vous avez gagne 100$');
  } else if  (choix < 0.6) {
    alert('vous avez gagne un autre cafe');
  } else {
    alert('vous avez perdu');
  }
});





// function inputIQFunction() {
//     var userinput = document.getElementById("inputIQ").value;
//     userinput = parseInt(userinput);
//     switch (true) {

//         case userinput <= 10:
//             alert("Less than 10");
//             break;

//         case userinput > 10:
//             alert("Greater than 10");
//             break;

//         default:
//             alert("Please input value");
//             break;
//       }
//   }


  
 

