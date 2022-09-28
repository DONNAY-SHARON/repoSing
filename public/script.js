//Elaboration des chronos
departMinutes = 2
let temps = departMinutes * 60

const timerElement = document.getElementById("timer")

setInterval(() => {
  let minutes = parseInt(temps / 60, 10)
  let secondes = parseInt(temps % 60, 10)

  minutes = minutes < 10 ? "0" + minutes : minutes
  secondes = secondes < 10 ? "0" + secondes : secondes

  timerElement.innerText = `${minutes}:${secondes}`
  temps = temps <= 0 ? 0 : temps - 1
}, 1000)

 function updateClock(initTime) {
  var now = new Date();
  var milli = now.getTime() - initTime;
  document.getElementById('timedate').innerHTML = milli;

}

function initClock() {
  var initTime = new Date().getTime();
  updateClock();
  window.setInterval(updateClock, 1, initTime);
}

//Fonction clique sur le bouton

 function check(){
 //Cacher le bouton envoyer du formulaire

 document.getElementById("send").style.visibility = "hidden";

//Cacher l'élément titre et gagne
  document.getElementById("titre").style.visibility = "hidden";
  document.getElementById("gagne").style.visibility = "hidden";

            
//Création de la variable qui choisit un nombre de 1 à 1000

           var min=1; 
var max=1000;  
var jauge_detir = Math.floor(Math.random() * (max - min)) + min; 


    document.getElementById('tir').value = jauge_detir;

            //paire ou impaire
              if(jauge_detir%2 == 0)
              {
    document.getElementById('resultat').value = "Nombre paire / BUT"
    document.getElementById('resultat2').value = "Olympique de Marseille"
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
    var om = document.getElementById('number').value;

           var psg = document.getElementById('number2').value;
           if (om > psg) {
      document.getElementById('gagne').value = "Olympique de Marseille"
     }
     if (psg > om) {
      document.getElementById('gagne').value = "Paris Saint Germain"
     }
     if (psg === om){
      document.getElementById('gagne').value = "Match nul"
     }
  

              }
              else
              {
    document.getElementById('resultat').value = "Nombre impaire / BUT"
    document.getElementById('resultat2').value = "Paris Saint Germain"
                     var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
    var om = document.getElementById('number2').value;
           var psg = document.getElementById('number2').value;
           if (om > psg) {
      document.getElementById('gagne').value = "Olympique de Marseille"
     }
     if (psg > om) {
      document.getElementById('gagne').value = "Paris Saint Germain"
     }
     if (psg === om){
      document.getElementById('gagne').value = "Match nul"
     }
    
            }
   
         }
 

 //Cacher des éléments après une période donnée

 function showDiv1() {
      document.getElementById("div1").style.visibility = "visible";
     
    }
    setTimeout("showDiv1()", 1500); // aprés 15 sec
    function showDiv2() {
      document.getElementById("div2").style.visibility = "visible";
    }
    setTimeout("showDiv2()", 7000); // aprés 30 secs
    function showDiv3() {
    table6.style.display = "none";
     
    }
    setTimeout("showDiv3()", 120000); //Le temps en millisecondes disparait après 2 minutes

 function showDiv4() {
    
      document.getElementById('send').click();
     
    }
    setTimeout("showDiv4()", 120000); // aprés 2 minutes clique automatique sur le bouton pour executer la methode get
    
    function showDiv5() {
    
      document.getElementById('sons').click();
     
    }
    setTimeout("showDiv5()", 12000); // aprés 2 minutes clique automatique sur le bouton pour executer la methode get
 


//Récupération des données sur l'URL dans la page fin et affichage dans le tableau

<!-- Début

var paramOk = true;

function FaitTableau(n) {
  // Création d’un tableau (array)
  // aux dimensions du nombre de paramètres.
  this.length = n;
  for (var i = 0; i <= n; i++) {
    this[i] = 0
  }
  return this
}

function ParamValeur(nValeur) {
  // Récupération de la valeur d’une variable
  // Pour créer la variable en Javascript.
  var nTemp = "";
  for (var i=0;i<(param.length+1);i++) {
    if (param[i].substring(0,param[i].indexOf("=")) == nValeur)
      nTemp = param[i].substring(param[i].indexOf("=")+1,param[i].length)
  }
  return Decode(nTemp)
}

// Extraction des paramètres de la requête HTTP
// et initialise la variable "paramOk" à false
// s’il n’y a aucun paramètre.
if (!location.search) {
  paramOk = false;
}
else {
  // Éliminer le "?"
  nReq = location.search.substring(1)
  // Extrait les différents paramètres avec leur valeur.
  nReq = nReq.split("&");
  param = new FaitTableau(nReq.length-1)
  for (var i=0;i<(nReq.length);i++) {
    param[i] = nReq[i]
  }
}

// Décoder la requête HTTP
// manuellement pour le signe (+)
function Decode(tChaine) {
  while (true) {
    var i = tChaine.indexOf("+");
    if (i < 0) break;
    tChaine = tChaine.substring(0,i) + "%20" + tChaine.substring(i + 1, tChaine.length);
  }
  return unescape(tChaine)
}
// End -->

<!-- Début
// ***************************************
// À MODIFIER - AJOUTER DES PARAMÈTRES ICI
// ***************************************
// Créer les variables avec leur contenu
// basé sur la requête:
// ?nom=...&prenom=...&email=...
if (paramOk) {
  om = ParamValeur("om");
  
  
  document.getElementById('omm').value = om;
  psg = ParamValeur("psg");
  vainqueur = ParamValeur("gagnant");

  document.getElementById('p1').value = vainqueur;
  document.getElementById('p2').value = psg;
 document.getElementById('c1').value = vainqueur;
  document.getElementById('c2').value = psg;
  document.getElementById('c4').value = psg;
   document.getElementById('c3').value = om;
   document.getElementById('c5').value = om;
}
// End -->

