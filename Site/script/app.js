function myFunction() {
    let text;
    let person = prompt("Quel est ton nom?:", "");
    if (person == null || person == "") {
      alert("Je ne mort pas tu peux me dire ton nom");
    }else  {
      alert("Bonjour"+" "+person+" "+"Comment allez vous")
    return;}
    if (person == null || person ==""){
      let person =prompt("Donne ton blase sinon sa va pas le faire!(vraiment sinon ça casse tout)","")
      alert("Tu vois quand tu veux"+" "+person+". "+"Shalom sur toi")
      return}
    document.getElementById("demo").innerHTML = text;
  }