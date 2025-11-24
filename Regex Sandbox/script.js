const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");


function getFlags() {  
  let stringFlags = "";
  if (caseInsensitiveFlag.checked) {
    stringFlags += "i";
  }
  if (globalFlag.checked) {
    stringFlags += "g";
  }
  return stringFlags;
}

testButton.addEventListener("click", () => {
  if (regexPattern.value=="") {
    testResult.innerText = "Please, enter a regex pattern to test";
    return;
  }

  if (stringToTest.innerText==="") {
    testResult.innerText = "Please, enter a string to test";
    return;
  }

  let regexPatternFlags = undefined;
  try {
    regexPatternFlags = new RegExp(regexPattern.value, getFlags());
  }
  catch (SyntaxError) {
    testResult.innerText = "Please, enter a valid regex pattern";
    return;
  }

  const matchedExArray = stringToTest.innerText.match(regexPatternFlags);
  console.log(matchedExArray);
  testResult.innerText = matchedExArray != null 
    ?  matchedExArray.join(", ") 
    : "no match";

  const highlightedText = stringToTest.innerText.replace(regexPatternFlags,
    match => `<span class="highlight">${match}</span>`);  
  stringToTest.innerHTML = highlightedText;
});



