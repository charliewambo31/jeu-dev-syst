const selectElement1 = document.querySelector('.choix');
selectElement1.addEventListener('change', (event) => {
var result1 = document.querySelector('.boisson');
  result1.textContent = `Votre choix est : ${event.target.value}`;
});

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




  
 

