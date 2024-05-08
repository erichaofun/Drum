/* document.getElementById("increment").addEventListener("click", increment); 


document.querySelector("button").addEventListener("click", function play(){
    alert( " Play successful ")
} );




var but1 = document.getElementsByClassName('drum'); 
but1.addEventListener('click' , function play(){
    alert( " 9999 ")
} );


*/




var numofdrumbuttons=document.querySelectorAll(".drum").length;

/*
for (var i=0; i < numofdrumbuttons; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener('click' , function play(){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();


        
    } );
    
}

*/



for (var i=0; i < numofdrumbuttons; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener('click' , function play(){

        var buttonInnerHTML=this.innerHTML
        playosund(buttonInnerHTML);
        buttonanimation(buttonInnerHTML);
}
    )


document.addEventListener("keydown", function (event){
    playosund(event.key);
    buttonanimation(event.key);

}

)

function playosund(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
        case "a":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default: console.log(key);
    }


    
} 


}



function buttonanimation(currentkey) {
    var activebuttom=document.querySelector("."+currentkey);
    activebuttom.classList.add("pressed");

    setTimeout(function()
    {
        activebuttom.classList.remove("pressed");

    }, 100);

}





/* 
這邊的 buttonanimation(currentkey)是追朔上面的兩個值
buttonanimation(buttonInnerHTML);
buttonanimation(event.key);

假設得到w,currentkey就是w的意思，只是用變數去代替
再來再新建一個activebutton變數，這邊是用這變數去代替後面一串，後面就等於是.w ==>w按鈕的class

接下來透過新增一個class的去製造按鈕變稍白的特效，在按鈕w中新增了pressed的這個ＣＳＳ
activebuttom.classList.add("pressed");



*/
