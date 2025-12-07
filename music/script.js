var arr = [
    {songName: "bin tere" ,url: "Bin Tere I Hate Luv Storys 128 Kbps.mp3" , img:"works/3.jpg"},
    {songName: "Dooron Dooron" , url: "works/Dooron Dooron Unplugged Paresh Pahuja 128 Kbps.mp3" , img: "works/2.jpg"},
    {songName : "for a reason" , url: "For A Reason P Pop Culture 128 Kbps.mp3" , img: "works/1.jpg"}
]
var audio = new Audio()
var selectedSong = 0 
var allsongs = document.querySelector(".all-songs")
var poster = document.querySelector(".left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")
function  mainFunction(){
    var clutter = ""
arr.forEach(function(elem,index){
    // console.log('hgf');
    
    clutter += ` <div class="song-card" id = ${index}>
            <div class="part1">
                <img src="${elem.img}" alt="">
                <h2>${elem.songName}</h2>
            </div>
            <h6>3:56</h6>
            </div>`
});
allsongs.innerHTML = clutter
audio.src = arr[selectedSong].url
poster.style.backgroundImage = `url(${arr[selectedSong].img})`

}
mainFunction() 


allsongs.addEventListener("click" , function(dets){
   selectedSong = dets.target.id
     play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
     flag = 1
   mainFunction()
   audio.play()  
})

var flag = 0 
play.addEventListener("click" , function(){
   if(flag == 0 ){
     play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
     mainFunction()
   audio.play()  
     flag = 1
      
   }else{
    play.innerHTML = `<i class="ri-play-mini-fill"></i>`
    mainFunction()
   audio.pause()  
     flag = 0
   }
})

forward.addEventListener("click" , function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
    }else{
        forward.style.opacity = 0.3
    }
})

backward.addEventListener("click" , function(){
    if(selectedSong >=0){
        selectedSong--
        mainFunction()
        audio.play()
    }else{
        backward.style.opacity = 0.3
    }
})