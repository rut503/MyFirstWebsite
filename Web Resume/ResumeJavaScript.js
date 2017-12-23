/**
 * Created by Rutvik on 10/8/17.
 */


function check() {
    alert("JS Works");
}

window.addEventListener("scroll", function() {

    var scrolledHeight= window.pageYOffset;

    // var welcomeText = document.querySelector(".BV1_welcome");
    // var gameTitle = document.querySelector(".games");
    // var diamondShape = document.querySelectorAll(".diamond");
    // var circleShape = document.querySelectorAll(".circle");
    // var starShape = document.querySelectorAll(".star");
    // var triangleShape = document.querySelectorAll(".triangle");
    // var xShape = document.querySelectorAll(".x");
    var myPicture = document.querySelector(".my_pic");

    // console.log(scrolledHeight);


    if(scrolledHeight > 1){
        myPicture.style.transform = "translate(0px, " + scrolledHeight/25 + "vw)";
    }
    else {
        myPicture.style.transform = "translate(0,0)";
    }

    // if(scrolledHeight > 1 && scrolledHeight < 900){
    //     welcomeText.style.transform = "translate(0px, " + scrolledHeight/30 + "vw)";
    // }
    //
    // if(scrolledHeight > 150){
    //     gameTitle.style.opacity = "1";
    //     gameTitle.style.transform = "translate(-5vw,0)";
    // }
    //
    // if(scrolledHeight > 850){
    //     gameTitle.style.opacity = "0";
    //     gameTitle.style.transform = "translate(0,0)";
    // }
    //
    // if(scrolledHeight < 150){
    //     gameTitle.style.opacity = "0";
    //     gameTitle.style.transform = "translate(0,0)";
    // }
    //
    // if(scrolledHeight > 1){
    //     for (var i = 0; i < diamondShape.length; i++){
    //         var allDiamondShapes = diamondShape[i];
    //         var allCircleShapes = circleShape[i];
    //         var allStarShapes = starShape[i];
    //         var allTriangleShapes = triangleShape[i];
    //         var allXShapes = xShape[i];
    //         allDiamondShapes.style.transform = "rotate(" + scrolledHeight + "deg)";
    //         allCircleShapes.style.transform = "rotate(" + scrolledHeight*2 + "deg)";
    //         allStarShapes.style.transform = "rotate(" + scrolledHeight + "deg)";
    //         allTriangleShapes.style.transform = "rotate(" + scrolledHeight + "deg)";
    //         allXShapes.style.transform = "rotate(" + scrolledHeight + "deg)";
    //     }
    // }
});

function changeThemeColors1() {
    document.documentElement.style.setProperty('--first-color', '#222831');
    document.documentElement.style.setProperty('--second-color', '#393E41');
    document.documentElement.style.setProperty('--third-color', '#3393ca');
    document.documentElement.style.setProperty('--forth-color', '#eeeeee');
}

function changeThemeColors2() {
    document.documentElement.style.setProperty('--first-color', '#2A363B');
    document.documentElement.style.setProperty('--second-color', '#CF4647');
    document.documentElement.style.setProperty('--third-color', '#F5D061');
    document.documentElement.style.setProperty('--forth-color', '#F8F6F6');
}

function changeThemeColors3(){
    document.documentElement.style.setProperty('--first-color', '#1684A7');
    document.documentElement.style.setProperty('--second-color', '#09A599');
    document.documentElement.style.setProperty('--third-color', '#FACC2E');
    document.documentElement.style.setProperty('--forth-color', '#F6F6F6');
}

function changeThemeColors4(){
    document.documentElement.style.setProperty('--first-color', '#FFCD38');
    document.documentElement.style.setProperty('--second-color', '#ffffff');
    document.documentElement.style.setProperty('--third-color', '#b31d1d');
    document.documentElement.style.setProperty('--forth-color', '#4A4A4A');
}

function changeThemeColors5(){
    document.documentElement.style.setProperty('--first-color', '#FFCD38');
    document.documentElement.style.setProperty('--second-color', '#FFDD67');
    document.documentElement.style.setProperty('--third-color', '#4A4A4A');
    document.documentElement.style.setProperty('--forth-color', '#000000');
}

function changeThemeColors6(){
    document.documentElement.style.setProperty('--first-color', '#fff');
    document.documentElement.style.setProperty('--second-color', '#fff');
    document.documentElement.style.setProperty('--third-color', '#000');
    document.documentElement.style.setProperty('--forth-color', '#000');
}