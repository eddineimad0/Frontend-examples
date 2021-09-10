const scrollIntrBtn=document.getElementById("scroll");
const menuLine=document.querySelector(".menu");
const navPanel=document.getElementById("navpanel");
const mainPanel=document.querySelector("main");


function introHandler(){
    if(mainPanel.getBoundingClientRect().y.toFixed(0)<=580){
        document.querySelector(".intro").classList.add("hidden");
        if(mainPanel.getBoundingClientRect().y.toFixed(0)<60){
            menuLine.classList.add("noir");
        }
        else{
            menuLine.classList.remove("noir");
        }
    }
    else{
        document.querySelector(".intro").classList.remove("hidden");
    }
    
}
function hameburgerMenuHandler(){
    this.classList.toggle("close");
    navPanel.classList.toggle("open");
}

function main(){
    scrollIntrBtn.addEventListener("click",()=>{
        document.querySelector(".intro").classList.add("hidden");    
    });
    document.body.onscroll=introHandler;
    menuLine.addEventListener("click",hameburgerMenuHandler);
    
}

main()