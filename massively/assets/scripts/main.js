const scrollIntrBtn=document.getElementById("scroll");
const intro=document.querySelector(".intro");


function introHandler(){
    //console.log(intro.getBoundingClientRect().y,intro.getBoundingClientRect().y<-180);
    if(intro.getBoundingClientRect().y<=-180){
        document.querySelector(".intro").classList.add("hidden");
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