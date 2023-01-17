function myFunction() {
    let text;
    let person = prompt("Please enter your name:", " Uvuvuevuevue Uvuvuevuevue ossas ");
    if (person == null || person == "") {
      alert("Je ne mort pas tu peux me dire ton nom");
    } else {
      alert("Bonjour"+" "+person+" "+"Comment allez vous")
    }
    document.getElementById("demo").innerHTML = text;
  }