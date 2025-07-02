var istatus = document.querySelector("h5")
var addfriend = document.querySelector("#add")
var check = 0

addfriend.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "Friend"
    istatus.style.color = "green"
    check = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        check = 0     
    }
})
