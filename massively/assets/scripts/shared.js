const menuLine=document.querySelector(".menu");
const navPanel=document.getElementById("navpanel");
const mainPanel=document.querySelector("main");

function scrollHandler(){
    if(mainPanel.getBoundingClientRect().y.toFixed(0)<60){
        menuLine.classList.add("noir");
    }
    else{
        menuLine.classList.remove("noir");
    }
}

function hameburgerMenuHandler(){
    this.classList.toggle("close");
    navPanel.classList.toggle("open");
}

function main(){
    document.body.onscroll=scrollHandler;
    menuLine.addEventListener("click",hameburgerMenuHandler);
}


main();