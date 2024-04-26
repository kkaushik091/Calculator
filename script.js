const para = document.getElementById("src");
const container_main = document.getElementById("container-main");

container_main.addEventListener("click", function (event) {
  if (event.target.localName === "button") {
    if (event.target.textContent === "=") {
      if (para.innerText.length >= 1) {
        para.innerText = eval(para.textContent);
      }
    } else if (event.target.textContent === "CE") {
      para.innerText = "0";
    } else {
      para.append(event.target.textContent);
      check();
    }
  }
});

function check() {
  if (para.textContent.length > 1 && para.textContent.startsWith("0")) {
    console.log(para.textContent.length);
    para.innerText = para.textContent.substring(1);
  }
}
