const content = [
  [
    "Password length is 8 characters",
    "Password includes only upper-case letters and lower-case letters",
    "Password is easy to remember but can also be judged easily ",
    "Do Not Use it for protecting sensitive data ",
  ],
  [
    "Password length is 10 characters",
    "Password includes upper-case letters, lower-case letters, and numbers",
    "Password provides moderate security",
    "Can be used for non-critical data",
  ],
  [
    "Password length is 12 characters",
    "Password includes upper-case letters, lower-case letters, numbers, and symbols",
    "Password provides strong security",
    "Recommended for protecting sensitive data",
  ],
];

const btnEasyPassword = document.getElementById("easy-password");
const btnMediumPassword = document.getElementById("medium-password");
const btnDifficultPassword = document.getElementById("difficult-password");
const tabContent = document.getElementById("tab-content");

function displayContent(items) {
  let listContent = "";
  for (const item of items) {
    listContent += `<li>${item}<li>`;
  }
  const list = document.createElement("ul");
  tabContent.innerHTML = "";
  tabContent.innerHTML = listContent;
  tabContent.append(list);
}

function highlightButton(button) {
  btnEasyPassword.classList.remove("active");
  btnMediumPassword.classList.remove("active");
  btnDifficultPassword.classList.remove("active");
  button.classList.add("active");
}

function handleClick(event) {
  const btnID = event.target.id;
  highlightButton(event.target);
  if (btnID === "easy-password") {
    displayContent(content[0]);
  } else if (btnID === "medium-password") {
    displayContent(content[1]);
  } else if (btnID === "difficult-password") {
    displayContent(content[2]);
  }
}

function createPassword() {
  let password = "";
  let passwordLength;
  let chars;

  const easyPasswordLength = 8;
  const mediumPasswordLength = 10;
  const difficultPasswordLength = 12;

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!@#$%^&*:;<=>?@[](){}|/";

  const easyChars = upperCase + lowerCase;
  const mediumChars = upperCase + lowerCase + number;
  const difficultChars = upperCase + lowerCase + number + symbol;

  const selectedButton = document.querySelector(".buttons-container .active");

  if (selectedButton === btnEasyPassword) {
    passwordLength = easyPasswordLength;
    chars = easyChars;
  } else if (selectedButton === btnMediumPassword) {
    passwordLength = mediumPasswordLength;
    chars = mediumChars;
  } else if (selectedButton === btnDifficultPassword) {
    passwordLength = difficultPasswordLength;
    chars = difficultChars;
  }

  for (let i = 0; i < passwordLength; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordBox = document.getElementById("password");
  passwordBox.select();
  document.execCommand("copy");
}

function resetPassword() {
  document.getElementById("password").value = "";
}

btnEasyPassword.addEventListener("click", handleClick);
btnMediumPassword.addEventListener("click", handleClick);
btnDifficultPassword.addEventListener("click", handleClick);
