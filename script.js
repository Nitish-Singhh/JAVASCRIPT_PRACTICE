let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", () => {
  

    let ch = document.createElement("li");
    ch.innerText = inp.value;

    let butn = document.createElement("button");
    // inp.value = "";
    butn.innerText = "Delete";
    
    

    butn.addEventListener("click", () => {
      ch.remove();
      // butn.remove();

    });

    ch.appendChild(butn);
    ul.appendChild(ch);
    inp.value = "";
  
});

inp.addEventListener("click", ()=>{
   inp.placeholder = " ";
})