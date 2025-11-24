let arrayContainer = document.getElementById('array-container');
const startingArray = document.getElementById('starting-array');

const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');

const generateElement = () => Math.floor(Math.random()*100 + 1);

let genArray = [];

function generateArray() {
  const randomIntegers = []
  for (let i=0; i<5; i++) {
    randomIntegers.push( generateElement() );
  }
  return randomIntegers;
}

const generateContainer = () => document.createElement("div");

function fillArrContainer( htmlElem, arr) {
  htmlElem.innerHTML = `\n\t<span>${[...arr].join("</span>\n\t<span>")}</span>\n`;
  return htmlElem;
}

function highlightCurrentEls( htmlElem, idx){
  const spans = htmlElem.querySelectorAll("span");
  for (let i=0; i<spans.length; i++) {
    if (i===idx || i===idx+1)
      spans[i].style.border = "1px dashed red";
    else
      spans[i].removeAttribute("style");
  }
  return htmlElem
}

const isOrdered = (a, b) => a<=b;

function swapElements(arr, idx) {
  if (idx < arr.length - 1 && !isOrdered(arr[idx], arr[idx + 1])) {
    const temp = arr[idx];
    arr[idx] = arr[idx + 1];
    arr[idx + 1] = temp;
    return true;
  }
  return false;
}

generateBtn.addEventListener("click", () => {
  const containerDivs = arrayContainer.querySelectorAll("div")
  for ( let i=1; i<containerDivs.length; i++ ) 
    containerDivs[i].remove()
  
  genArray = generateArray();  
  fillArrContainer(startingArray,genArray);
});

sortBtn.addEventListener("click", () => {
  let switched = true;
  let stepArray = startingArray;

   while( switched == true)
   {
    switched = false;

    for( let idx=0; idx<genArray.length-1; idx++){
      highlightCurrentEls( stepArray, idx);

      if (swapElements(genArray, idx))
        switched = true;

      stepArray = fillArrContainer(generateContainer(),genArray);
      arrayContainer.appendChild(stepArray);
    }
  }
});




