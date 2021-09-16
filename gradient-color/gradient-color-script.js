const text = document.getElementById("txt");
const change_btn = document.getElementById("change-btn");
const previous_btn = document.getElementById("previous-btn");
const copy_code_btn = document.getElementById("copy-code-button");

symbolsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
codesArray = new Array();
textsArray = new Array();

const randomColorCode1 = () => {
  var hexCode = "#";
  for (let x = 0; x < 6; x++) {
    hexCode += symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
  }
  return hexCode;
};
const randomColorCode2 = () => {
  var hexCode2 = "#";
  for (let x = 0; x < 6; x++) {
    hexCode2 += symbolsArray[Math.floor(Math.random() * symbolsArray.length)];
  }
  return hexCode2;
};
const copyText = (text) => {
  var dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};

change_btn.addEventListener("click", () => {
  const colorCode1 = randomColorCode1();
  const colorCode2 = randomColorCode2();
  if (document.getElementById("r-option").checked) {
    display_text = `${colorCode1} <i id="linear-icon" class="fas fa-angle-double-right"></i> ${colorCode2}`;
    text.innerHTML = display_text;
    textsArray.push(display_text);
    const linearScript = `linear-gradient(to right, ${colorCode1}, ${colorCode2})`;
    document.body.style.background = linearScript;
    codesArray.push(linearScript);
  } else if (document.getElementById("l-option").checked) {
    display_text = `${colorCode2} <i id="linear-icon" class="fas fa-angle-double-left"></i> ${colorCode1}`;
    text.innerHTML = display_text;
    textsArray.push(display_text);
    const linearScript = `linear-gradient(to left, ${colorCode1}, ${colorCode2})`;
    document.body.style.background = linearScript;
    codesArray.push(linearScript);
  } else if (document.getElementById("u-option").checked) {
    display_text = `${colorCode2} <i id="linear-icon" class="fas fa-angle-double-up"></i> ${colorCode1}`;
    text.innerHTML = display_text;
    textsArray.push(display_text);
    const linearScript = `linear-gradient(180deg, ${colorCode1}, ${colorCode2})`;
    document.body.style.background = linearScript;
    codesArray.push(linearScript);
  } else if (document.getElementById("d-option").checked) {
    display_text = `${colorCode1} <i id="linear-icon" class="fas fa-angle-double-down"></i> ${colorCode2}`;
    text.innerHTML = display_text;
    textsArray.push(display_text);
    const linearScript = `linear-gradient(180deg, ${colorCode1}, ${colorCode2})`;
    document.body.style.background = linearScript;
    codesArray.push(linearScript);
  }
});

previous_btn.addEventListener("click", () => {
  if (codesArray.length > 1 && textsArray.length > 1) {
    const previousCode = codesArray[codesArray.length - 2];
    const previousText = textsArray[textsArray.length - 2];
    text.innerHTML = previousText;
    document.body.style.background = previousCode;
    codesArray.pop();
    textsArray.pop();
  } else {
    text.innerHTML =
      '#FFFFFF <i id="linear-icon" class="fas fa-angle-double-right"></i> #000000';
    document.body.style.background =
      "linear-gradient(to right, #ffffff, #000000)";
    codesArray.shift();
    textsArray.shift();
  }
});

copy_code_btn.addEventListener("click", () => {
  var code = document.body.style.background;
  if (code == "") {
    code = "linear-gradient(to right, rgb(255, 255, 255), rgb(0, 0, 0))";
  }
  console.log(code);
  copyText(code);
  copy_code_btn.innerText = "Code Copied!";
  setTimeout(() => {
    copy_code_btn.innerText = "Copy Css Code";
  }, 1300);
});
