let StoryBtnArray=document.querySelectorAll(".story-btn");

StoryBtnArray.forEach(btn =>{
    btn.addEventListener("click",()=>{
        btn.classList.toggle("change");
        btn.nextElementSibling.classList.toggle("change")
    })
})