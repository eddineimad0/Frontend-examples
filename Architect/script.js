window.onload= ()=>{
setTimeout(()=>{
    document.querySelector(".spinner-container").classList.add("display");
    document.querySelector(".container").classList.add("display");
},4000)
}

let hamburgerMenu=document.querySelector(".hamburger-menu");
let menuLines=document.querySelectorAll(".menu-line");
hamburgerMenu.addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("deactivate");
    hamburgerMenu.classList.toggle("change");
    menuLines.forEach((line)=>{
        line.classList.toggle("change");
    })

})
document.querySelector(".scroll-btn").addEventListener("click",()=>{
    setTimeout(()=>{
        document.querySelector("html").style.scrollBehavior="smooth";
    },1000);
})