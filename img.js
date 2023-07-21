function readMore(){
    let d0 = document.getElementById("dot0");
    let more0 = document.getElementById("p0");
    let btn = document.getElementById("btn0");

    if(d0.style.display == "none"){
        d0.style.display = "inline";
        btn.innerHTML = "Read more >"; 
        more0.style.display = "none";
    } 
    else{
        d0.style.display = "none";
        btn.innerHTML = "< Read less"; 
        more0.style.display = "inline";
    }
}

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

/*function more(){
    let ext = document.getElementsByClassName(extensions);
    let adding = document.getElementsByClassName(add);
    if(adding.style.display == "none"){
        adding.style.display = "inline";
    }
    else{
        adding.style.display = "none";
    }
}*/
