let scr = document.getElementById("scroll");
window.onscroll = function(){
    scrollFnc();
}
function scrollFnc(){
    if(document.documentElement.scrollTop > 5){
        scr.style.display = "block";
    }
    else{
        scr.style.display = "none";
    }
}
//window.onscroll = scrollFnc();
function toTop(){
    document.documentElement.scrollTop = 0;
}
