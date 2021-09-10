const scrollIntrBtn=document.getElementById("scroll");

function introHandler(){
    if(mainPanel.getBoundingClientRect().y.toFixed(0)<=580){
        document.querySelector(".intro").classList.add("hidden");
        scrollHandler();
    }
    else{
        document.querySelector(".intro").classList.remove("hidden");
    }
    
}
function main(){
    scrollIntrBtn.addEventListener("click",()=>{
        document.querySelector(".intro").classList.add("hidden");    
    });
    document.body.onscroll=introHandler;

}

main()