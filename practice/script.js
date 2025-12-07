var h5 = document.querySelector("h5");
var addfriend = document.querySelector("#add");

let check = 0;

addfriend.addEventListener("click" , function(){
    if(check==0){
        h5.innerHTML = "Friends";
        h5.style.color = "green";
 check = 1;
    }
    else{
        h5.innerHTML = "Stranger";
h5.style.color = "red";
addfriend.innerHTML = "Remove friend";
    }

})
