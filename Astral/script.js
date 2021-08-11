let icons=document.querySelectorAll(".icon");
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
        console.log(`#${panel}`);
        document.querySelector(`#${panel}`).classList.toggle("active");
    
    })
})