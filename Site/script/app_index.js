function myFunction() {
    let text;
    let person = prompt("Quel est ton nom?:", "");
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