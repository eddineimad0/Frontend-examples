const icons=document.querySelectorAll(".icon");
const container=document.querySelector(".container");
icons.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        let panel=icon.getAttribute("panel");
        document.querySelectorAll(".active").forEach((target)=>{
            target.classList.toggle("active")
        });
        icon.classList.toggle("active");
        if(panel.length===0){
            return;
        }
        container.style["background-color"]=icon.getAttribute("color");

        document.querySelector(`#${panel}`).classList.toggle("active");
    
    })
})