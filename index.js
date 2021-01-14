// Write your code here!
var newHeader;
function run (){
  main.remove();
  newHeader = document.createElement("h1");
  newHeader.id = "victory";
  newHeader.innerHTML = "Your name is the champion!";
  document.body.appendChild(newHeader);
}

run()
