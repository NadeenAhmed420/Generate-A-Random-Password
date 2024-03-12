const passwordBox = document.querySelector("#password");
const generateBtn = document.querySelector(".generate-pass");
const CopyImg = document.querySelector(".copy-pass");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$&*";
const numbers = "0123456789";
const allcharacters = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  //it means int the end it give me pass with 1(upper)1(lower)1(number)1(symbol)

  //here to make sure length we decided(12) will apper completly
  //   (12 > 4) so will add again chara till reach 12 chara (Randomly)
  while (length > password.length) {
    //add all the characters in pass
    password += allcharacters[Math.floor(Math.random() * allcharacters.length)];
  }
  passwordBox.value = password; //value inside the input = password we created
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

generateBtn.addEventListener("click", createPassword);
CopyImg.addEventListener("click", copyPassword);
