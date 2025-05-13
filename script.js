let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", () => {
  {

    let ch = document.createElement("li");
    ch.innerText = inp.value;
    let butn = document.createElement("button");
    inp.value = "";
    butn.innerText = "Delete";
    ul.appendChild(ch);
    ul.appendChild(butn);
    

    butn.addEventListener("click", () => {
      ch.remove();
      butn.remove();

    });
  }
});

inp.addEventListener("click", ()=>{
   inp.placeholder = " ";
})