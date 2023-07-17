let myVid = document.getElementById("vid1");
function playPause(){
    if(myVid.paused){
        myVid.play();
    }
    else{
        myVid.pause();
    }
}
function muteUnmute(){
    if(myVid.muted == true)
        myVid.muted = false;
    else
        myVid.muted = true;
}
