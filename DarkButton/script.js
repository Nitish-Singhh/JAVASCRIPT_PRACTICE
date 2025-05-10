let btn = document.querySelector("button");
let bdy = document.querySelector("body");
let dec = false;

btn.addEventListener("click", function () {
  if (dec){
    Light();
    console.log("Dark Mode");
  } 

  else{
    console.log("Light Mode");
    Dark();
  }
  dec = !dec;
});

function Dark() {
  bdy.style.backgroundColor = "Black";
  bdy.style.color = "White";
  btn.innerText = "Light";
}
function Light() {
  bdy.style.backgroundColor = "White";
  bdy.style.color = "Black";
  btn.innerText = "Dark";
}
