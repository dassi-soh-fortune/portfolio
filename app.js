const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const name = document.querySelector("#name");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
    
});
name.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
})


