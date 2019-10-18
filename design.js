var submit = document.getElementById("button");
var container = document.getElementById("cont");


submit.addEventListener("click",() => {
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  container.innerHTML='';
  container.style.backgroundColor= "white";
  container.style.gridTemplateColumns =  `repeat(${width}, 1fr)`;
  container.style.gridTemplateRows =  `repeat(${height}, 1fr)`;

  for (i=0; i<height*width; i++)
  {
    var cell = document.createElement("div");
    cell.setAttribute("id",i);
    cell.setAttribute("class","cell");
    container.appendChild(cell);
  }
});



container.addEventListener("click" , (e) => {
  var thisCell = document.getElementById(e.target.id);
  var color = document.getElementById("colorPicker").value;
  thisCell.style.backgroundColor = color;
});
