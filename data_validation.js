function handle_submit(){
    var name = document.forms["myForm"]["name"].value;
    var funFact = document.forms["myForm"]["funFact"].value;
    console.log("Name: " + name);
    console.log("Fun Fact: " + funFact);

    document.getElementById("nameText").innerText = "HELLO";
}