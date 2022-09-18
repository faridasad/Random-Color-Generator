const text = document.getElementById("txt");
const change_btn = document.getElementById("change-btn");
const previous_btn = document.getElementById("previous-btn");
const copy_code_btn = document.getElementById("copy-code-button");

symbolsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
codesArray = new Array();

const randomColorCode = () => {
  var hexCode = "#";
  for (let x = 0; x < 6; x++) {
    hexCode += symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
  }
  codesArray.push(hexCode);
  return hexCode;
};

change_btn.addEventListener("click", () => {
  var colorCode = randomColorCode();
  text.innerText = colorCode;
  document.body.style.backgroundColor = colorCode;
});

previous_btn.addEventListener("click", () => {
  if (codesArray.length > 1) {
    const previousCode = codesArray[codesArray.length - 2];
    text.innerText = previousCode;
    document.body.style.backgroundColor = previousCode;
    codesArray.pop();
  } else {
    txt.innerText = "#FFFFFF";
    document.body.style.backgroundColor = "#FFFFFF";
    codesArray.shift();
  }
});

copy_code_btn.addEventListener("click", () => {
  var txt = document.getElementById("txt").textContent;
  navigator.clipboard.writeText(txt)
  copy_code_btn.innerText = "Code Copied!";
  setTimeout(() => {
    copy_code_btn.innerText = "Copy Hex Code";
  }, 1300);
});
