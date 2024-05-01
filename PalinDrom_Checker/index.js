function Palindrome(str) {
  let splitString = str.split("");
  // Split use for spliting our strings
  let reversArray = splitString.reverse();
  // here reverse is a function
  let joinArray = reversArray.join("");
  return joinArray;
}
function palindromeCheck() {
  let text = document.querySelector("#text").value;
  let Answer = document.querySelector("#Answer");
  text = text.toLowerCase();
  if(text === ""){
    Answer.innerHTML= ("Empty input Enter You Text Please!");
  }
 else if (text == Palindrome(text)) {
    Answer.innerHTML = "This is palindrome";
  } 
  
  else {
    Answer.innerHTML = "This is not palindrome";
  }
}
