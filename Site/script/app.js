//Ceci a été réalise par Thomas Malavard, Romain Borsari et Thomas Bertacchi
function indexfonc() {
  let text;
  let person = prompt("Quel est ton nom?", "");
  if (person == null || person == "") {
    alert("Je ne mord pas tu peux me dire ton nom");
  }else  {
    alert("Bonjour"+" "+person+" "+"Comment allez vous")
  return;}
  let person2 = prompt("ça veut dehek ? Je t'ai dis de te dire de donner ton nom!!!", "")
  if (person2 == null || person2 ==""){
    alert("tu es Voldemort ou quoi")}
    else{
  alert("Tu vois quand tu veux"+" "+person2+" "+ "Ducoup, que la force soit avec toi")
    }
  document.getElementById("demo").innerHTML = text;
}

function mapsfonc() {
  let text;
  let age = prompt("Quel age as tu?", "");
  if (age == null || age == "") {
    alert("Je ne suis un pédophile tu peux me donner ton age");
  }else  {
    alert("Ah ouai"+" "+age+" "+"c'est jeune")
  return;}
  let age2 = prompt("Ducoup tu as quel age?", "")
  if (age2 == null || age2 ==""){
    alert("tu es vieux s'est ça?")}
    else{
  alert("Tu vois quand tu veux, c'est pas l'age qui compte")
    }
  document.getElementById("demo").innerHTML = text;
}



function annoncefonc() {
  let text;
  let classe = prompt("tu es en quel classe?", "");
  if (classe == null || classe == "") {
    alert("T'as honte de ta classe ou quoi?");
  }else  {
    alert("Ah ouai"+" "+classe+" "+"c'est une bonne classe")
  return;}
  let classe2 = prompt("Ducoup c'est quoi ta classe?", "")
  if (classe2 == null || classe2 ==""){
    alert("t'as une classe de merde c'est ça?")}
    else{
  alert("Tu vois quand tu veux, c'est une classe comme les autres")
    }
  document.getElementById("demo").innerHTML = text;
}

function armesfonc() {
  let text;
  let ndf = prompt("quel est ton nom de famille?", "");
  if (ndf == null || ndf == "") {
    alert("T'as honte de ton famille ou quoi?");
  }else  {
    alert("Vous voyer Monsieur"+" "+ndf+" "+"c'est une bonne classe")
  return;}
  let ndf2 = prompt("Ducoup c'est quoi ton nom de famille?", "")
  if (ndf2 == null || ndf2 ==""){
    alert("T'as un nom de famille imprononsable c'est ça?")}
    else{
  alert("Tu vois quand tu veux, c'est un nom de famille comme les autres")
    }
  document.getElementById("demo").innerHTML = text;
}

function agentsfonc() {
  let text;
  let genre = prompt("quel est ton genre? Tu es un homme, une femme, autre?", "");
  if (genre == null || genre == "") {
    alert("Tu veux pas me le dire?");
  }else  {
    alert("d'accord je vois tu es"+" "+genre+"")
  return;}
  let genre2 = prompt(" tu veux vrément pas?", "")
  if (genre2 == null || genre2 ==""){
      alert("c'est pas grave")}
    else{
      alert("je comprends que tu ne veuille pas")
    }
  document.getElementById("demo").innerHTML = text;
}

function aproposfonc(){
  alert(" Ce site a été fait par Thomas Malavard, Romain Borsari et Thomas Bertacchi. Tu pensais que j'allais sortir ton prénom? beh non je vais vendre tes infos personnels et les acheter un talent")
}
