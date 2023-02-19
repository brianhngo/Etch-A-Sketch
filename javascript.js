let container = document.getElementById('gridContainer');
let colorButton = document.getElementById('colorMode');
let rainbowButton = document.getElementById('rainbowMode');
let eraserButton = document.getElementById('eraserMode');
let clearButton = document.getElementById('clearMode');



// Makes the grid 16x16. Makes new div tag with class name "gridElement"
function gridMaker(){
    for (let i = 0; i <16 ;i++){
        var gridElement = document.createElement('div');
        gridElement.classList.add("gridElement")
        gridElement.innerHTML= ``
        container.appendChild(gridElement);
        
        for (let j = 0; j < 15; j++ ){
            var gridElement = document.createElement('div');
            gridElement.classList.add("gridElement")
            gridElement.innerHTML= ``
            container.appendChild(gridElement);
        }
    }
}
gridMaker(); 


const gridElementArray = [...document.getElementsByClassName("gridElement")];

// Function that takes colors input's background black
const makeBlack = function(event){
    event.target.style.backgroundColor=document.getElementById('colorPick').value
}
// Function that turns on action if color button is pressed
function colorGrid(grid) {

    if (colorButton.className == "on"){
        grid.addEventListener("mousedown", makeBlack)};


    grid.addEventListener("mouseover", event => {
    if ((event.buttons == 1) && colorButton.className == "on")
         makeBlack(event);
  });
}
gridElementArray.forEach(colorGrid);



// Colors the grid certain color
function colorFunction(){
    if (colorButton.className == "off"){ // Off to on & turning off all other buttons
        colorButton.setAttribute("class","on");
        colorButton.style.fontSize ="26px";
        colorButton.style.color="white;";
        colorButton.style.backgroundColor="rgb(62,166,255)";
        colorButton.innerHTML ="Color Mode On";

        rainbowButton.style.color="white;"
        rainbowButton.style.backgroundColor="rgb(32,32,32)";
        rainbowButton.style.fontSize ="26px"
        rainbowButton.setAttribute("class","off");
        rainbowButton.innerHTML ="Rainbow Mode Off";

        eraserButton.style.color="white;"
        eraserButton.style.backgroundColor="rgb(32,32,32)";
        eraserButton.style.fontSize ="26px"
        eraserButton.setAttribute("class","off");
        eraserButton.innerHTML ="Eraser Mode Off";


      
    }else { // On to Off Button
        colorButton.style.color="white;"
        colorButton.style.backgroundColor="rgb(32,32,32)";
        colorButton.style.fontSize ="26px"
        colorButton.setAttribute("class","off");  
        colorButton.innerHTML ="Color Mode Off";

        
        
    }

}


// Random Number Generator for Rainbow Colors
var r;
var g;
var b;
function randomNumber(max,min){
    r = Math.floor(Math.random() * (max - min) + min)
    g = Math.floor(Math.random() * (max - min) + min)
    b = Math.floor(Math.random() * (max - min) + min)
}

// making random Rainbow color
const makeRainbow = function(event){
        randomNumber(255,0);
        event.target.style.backgroundColor = `rgb(${r},${g},${b})`
        
}
// Rainbow function action
function rainbowGrid (grid){
    if (rainbowButton == "on"){
        grid.addEventListener('mouseover',makeRainbow())
    }
    grid.addEventListener("mouseover", event => {
        if ((event.buttons == 1) && rainbowButton.className == "on")
             makeRainbow(event);
      });
}

gridElementArray.forEach(rainbowGrid)

// Button for Rainbow
function rainbowFunction(){
    if (rainbowButton.className == "off"){ // Off to on
 
    rainbowButton.setAttribute("class","on");
    rainbowButton.style.fontSize ="26px";
    rainbowButton.style.color="white;";
    rainbowButton.style.backgroundColor="rgb(62,166,255)";
    rainbowButton.innerHTML ="Rainbow Mode On";

    colorButton.style.color="white;"
    colorButton.style.backgroundColor="rgb(32,32,32)";
    colorButton.style.fontSize ="26px"
    colorButton.setAttribute("class","off");  
    colorButton.innerHTML ="Color Mode Off";

    eraserButton.style.color="white;"
    eraserButton.style.backgroundColor="rgb(32,32,32)";
    eraserButton.style.fontSize ="26px"
    eraserButton.setAttribute("class","off");
    eraserButton.innerHTML ="Eraser Mode Off";

    }
    else { // On to Off Button
        rainbowButton.style.color="white;"
        rainbowButton.style.backgroundColor="rgb(32,32,32)";
        rainbowButton.style.fontSize ="26px"
        rainbowButton.setAttribute("class","off");
        rainbowButton.innerHTML ="Rainbow Mode Off";
       
}   
}

// Erase Funciton

const removePaint = function(event){
    event.target.style.backgroundColor="white"
}
// Function that turns on mousedown and mouseover if erase button is pressed
function removePaintGrid(grid) {

    if (eraserButton.className == "on"){
        grid.addEventListener("mousedown", removePaint)};


    grid.addEventListener("mouseover", event => {
    if ((event.buttons == 1) && (eraserButton.className == "on"))
         removePaint(event);
  });
}

gridElementArray.forEach(removePaintGrid)

// Erase button
function eraserFunction(){
    if (eraserButton.className == "off"){ // Off to on
 
    eraserButton.setAttribute("class","on");
    eraserButton.style.fontSize ="26px";
    eraserButton.style.color="white;";
    eraserButton.style.backgroundColor="rgb(62,166,255)";
    eraserButton.innerHTML ="Eraser Mode On";

    colorButton.style.color="white;"
    colorButton.style.backgroundColor="rgb(32,32,32)";
    colorButton.style.fontSize ="26px"
    colorButton.setAttribute("class","off");  
    colorButton.innerHTML ="Color Mode Off";

    rainbowButton.style.color="white;"
    rainbowButton.style.backgroundColor="rgb(32,32,32)";
    rainbowButton.style.fontSize ="26px"
    rainbowButton.setAttribute("class","off");
    rainbowButton.innerHTML ="Rainbow Mode Off";


    }
    else { // On to Off Button
        eraserButton.style.color="white;"
        eraserButton.style.backgroundColor="rgb(32,32,32)";
        eraserButton.style.fontSize ="26px"
        eraserButton.setAttribute("class","off");
        eraserButton.innerHTML ="Eraser Mode Off";
       
}
}

// Clear Grid
function clearFunction(){
    for (let i =0; i < gridElementArray.length;i++){
        gridElementArray[i].style.backgroundColor = "white"
}}

