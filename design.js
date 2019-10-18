// Fetching the submit button and the canvas container
var submit = document.getElementById("button");
var container = document.getElementById("cont");

//Start makeGrid Fn on click
submit.addEventListener("click",() => {
  //Fetching the input fields values
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
  
  //removing all container elements (Refreshing)
  container.innerHTML='';
  container.style.backgroundColor= "white";
  
  //layout using CSS3 grid
  container.style.gridTemplateColumns =  `repeat(${width}, 1fr)`;
  container.style.gridTemplateRows =  `repeat(${height}, 1fr)`;

  //Appending divs (cells) as children into the container 
  for (i=0; i<height*width; i++)
  {
    var cell = document.createElement("div");
    cell.setAttribute("id",i);
    cell.setAttribute("class","cell");
    container.appendChild(cell);
  }
});
//End makeGrid Fn on click

//Fetching the cell click event to get the exact id of the cell clicked
container.addEventListener("click" , (e) => {
  var thisCell = document.getElementById(e.target.id);
  //Fetching the color value
  var color = document.getElementById("colorPicker").value;
  //giving CSS background color for the cell clicked using the color value in the color picker
  thisCell.style.backgroundColor = color;
});
