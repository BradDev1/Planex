var container = document.getElementById('lottie-container');
var loadingBtn = document.getElementById('loadingButton');
  
  
  var animation = bodymovin.loadAnimation({
    container: container,
    path: '../assets/images/lottieFile/astronaute.json', 
    renderer: 'svg', 
    loop: true, 
    autoplay: true 
  });

  function displayFrom(){
    alert("ok");  
}
loadingBtn.addEventListener('click', displayFrom);




const numOfPlanets = 150;
var colorArray = [
  "aliceblue",
  "aqua",
  "aquamarine",
  "azure",
  "blueviolet",
  "blue",
  "cadetblue",
  "chartreuse",
  "coral",
  "red",
  "cornflowerblue",
  "cyan",
  "crimson",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkmagenta",
  "darkseagreen",
  "darkorange",
  "darkslateblue",
  "darkorchid",
  "darkslategray",
  "darkturquoise",
  "deeppink",
  "darkviolet",
  "dodgerblue",
  "floralwhite",
  "fuchsia",
  "gold",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indigo",
  "lawngreen",
  "lightblue",
  "lightcyan",
  "lightgreen",
  "lightskyblue",
  "lightsalmon",
  "lightseagreen",
  "mediumslateblue",
  "mediumpurple",
  "midnightblue",
  "paleturquoise",
  "palegreen",
];

let squareDiv = document.getElementById("square");
for (let i = 0; i < numOfPlanets; i++) {
  const childToAppend = document.createElement("span");
  squareDiv.appendChild(childToAppend);
}

const spans = document.querySelectorAll("span");
spans.forEach((span) => {
  const randHeight = Math.random() * 500 + 0.8 * 250;
  const randWidth = Math.random() * 1000 + 0.8 * 500;
  span.style.height = `${randHeight}px`;
  span.style.width = `${randWidth}px`;
  span.style.position = "fixed";

  const randInterval = Math.floor(Math.random() * 10000 + 15000);
  const randDelay = Math.floor(Math.random() * 20000);
  span.style.animationDuration = `${randInterval}ms`;
  span.style.animationDelay = `-${randDelay}ms`;

  const childNode = document.createElement("div");
  const divRadius = Math.random() * 15 + 2;
  childNode.style.height = `${divRadius}px`;
  childNode.style.width = `${divRadius}px`;

  const lengthOfColors = colorArray.length;
  const randomColorIndex = Math.floor(Math.random() * lengthOfColors);
  const randomColor = colorArray[randomColorIndex];
  childNode.style.background = randomColor;
  childNode.style.boxShadow = `0 0 1px 1px ${randomColor}`;

  span.appendChild(childNode);
});