var student = {
  name:"",
  type:"studnet"
}

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event){
  document.getElementById("name").addEventListener("keyup",keyUp)
}

function keyUp(event){
  calculateNumericOutput();
}

function calculateNumericOutput(){
  student.name = document.getElementById("name").value;

  var  totalNumberValue = 0;
  for (var i = 0; i < student.name.length; i++) {
    totalNumberValue += student.name.charCodeAt(i);
  }

  //update the result in webpage
    var output = "Total numberi value of the "+ student.name +" name is: "+ totalNumberValue;
    document.getElementById("output").innerText = output;
}
