/**
 * Created by Rutvik on 8/15/17.
 */


function check() {
    alert("JS Works");
}

////////////////////////////////////////// Menu Button Function /////////////////////////////////////////////

var navButton = false;

function openNavBar() {
    if (navButton == false) {
        document.getElementById("navigation_bar").style.right = "0";
        document.getElementById("menu_button").style.marginLeft = "72vw";
        document.getElementById("menu_button").setAttribute("class", "rotated-menu_button");
        document.getElementById("main_container").setAttribute("class", "opacity_of_main_container");
        // document.getElementById("main_container").style.marginLeft = "-18vw";
        // document.getElementById("main_container").style.marginRight = "18vw";
        navButton = true;
        return;
    }
    else {
        document.getElementById("navigation_bar").style.right = "-18vw";
        document.getElementById("menu_button").style.marginLeft = "90vw";
        document.getElementById("menu_button").setAttribute("class", "menu_button");
        document.getElementById("main_container").setAttribute("class", "main_container");
        // document.getElementById("main_container").style.marginLeft = "0";
        // document.getElementById("main_container").style.marginRight = "0";
        navButton = false;
    }
}

//////////////////////////////////// Different Quote for different day in a month /////////////////////////////////////

function showQuote() {

    //  This is just a array.
    var Quotes= [];

    //  These are all my favorite quotes that i got from internet.
    Quotes[0] = "Doubt kills more dreams than failure ever will"                          + "<br>" +  "- Karim Seddiki";
    Quotes[1] = "The best revenge is massive success"                                     + "<br>" +  "- Frank Sinatra";
    Quotes[2] = "Life is a beautiful struggle"                                            + "<br>" +  "- Napoleon Hill";
    Quotes[3] = "Everything has its beauty, but not everyone sees it"                     + "<br>" +  "- Confucius";
    Quotes[4] = "The future depends on what you do today"                                 + "<br>" +  "- Mahatma Ghandhi";
    Quotes[5] = "Life must be lived forwards, but only understood backwards"              + "<br>" +  "- Kierkegaard";
    Quotes[6] = "Life Begins at the End of Your Comfort Zone"                             + "<br>" +  "- Neale Walsch";
    Quotes[7] = "Rise above the storm and you will find the sunshine"                     + "<br>" +  "- Mario Fernandez";
    Quotes[8] = "Don't Dream Your Life, Live Your Dream"                                  + "<br>" +  "- Mark Twain";
    Quotes[9] = "Everything happens for a reason"                                         + "<br>" +  "- Birbal";
    Quotes[10] = "Nothing is impossible, the word itself says 'I'm possible"              + "<br>" +  "- Audrey Hepburn";
    Quotes[11] = "Be the change that you wish to see in the world"                        + "<br>" +  "- Mahatma Gandhi";
    Quotes[12] = "Don’t regret the past, just learn from it"                              + "<br>" +  "- Ben Ipock";
    Quotes[13] = "The power of imagination makes us infinite"                             + "<br>" +  "- John Muir";
    Quotes[14] = "Shoot for the moon, if you miss, you'll land among stars"               + "<br>" +  "- Les Brown";
    Quotes[15] = "One who haven't made a mistake haven't tried anything new"              + "<br>" +  "- Albert Einstein";
    Quotes[16] = "Imagination is more important than knowledge."                          + "<br>" +  "- Albert Einstein";
    Quotes[17] = "Life is trying things to see if they work."                             + "<br>" +  "- Ray Bradbury";
    Quotes[18] = "The fears we don’t face becomes our limits."                            + "<br>" +  "- Robin Sharma";
    Quotes[19] = "If you hit the target every time, it’s too near or too big."            + "<br>" +  "- Tom Hirshfield";
    Quotes[20] = "Love the life you live, and live the life you love."                    + "<br>" +  "- Bob Marley";
    Quotes[21] = "A day without a Laugh is a wasted day"                                  + "<br>" +  "- Charles Chaplin";
    Quotes[22] = "Life is short, smile while you still have teeth"                        + "<br>" +  "- A Clown";
    Quotes[23] = "Try and fail, but never fail to try."                                   + "<br>" +  "- Jared Leto";
    Quotes[24] = "Life is a bicycle. To keep your balance you must keep moving."          + "<br>" +  "- Albert Einstein";
    Quotes[25] = "To succeed in life, show ignorance and confidence."                     + "<br>" +  "- Mark Twain";
    Quotes[26] = "If you dream it, you can do it."                                        + "<br>" +  "- Walt Disney";
    Quotes[27] = "Don’t wait. The time will never be just right."                         + "<br>" +  "- Napoleon Hill";
    Quotes[28] = "If not you, who? If not now, when?"                                     + "<br>" +  "- John F. Kennedy";
    Quotes[29] = "Turn your wounds into wisdom."                                          + "<br>" +  "- Oprah Winfrey";
    Quotes[30] = "Action is the foundational key to all success."                         + "<br>" +  "- Pablo Picasso";
    Quotes[31] = "Do one thing every day that scares you."                                + "<br>" +  "- Eleanor Roosevelt";



    // This simply takes the date of the day and chooses a quote according to that date.
    // If it's 13th then the 13th quote from the array will be chosen.
    var d = new Date();
    var todaysDate = d.getDate();


    // This simply displays the quote that's been chosen.
    document.getElementById('quote').innerHTML = Quotes[todaysDate];



    // This is the animation function that I need to run when the page loads just like i have to run choosing quote function.
    // I m running this function here because i can only run on function in html body tag in function "onload".
    // drawBackground();
    // animate();
}

//////////////////////////////////// Changing Themes With Buttons //////////////////////////////////////

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

//////////////////////////////////// Parallax Scroll and Landing Elements //////////////////////////////////////

window.addEventListener("scroll", function() {

    var welcomeText = document.querySelector(".BV1_welcome");
    // var Games = document.querySelector(".games");

    var scrolledHeight= window.pageYOffset;

    console.log(scrolledHeight);

    if(scrolledHeight > 1 && scrolledHeight < 800){
        welcomeText.style.transform = "translate(0px, " + scrolledHeight/30 + "vw)";
    }

    // if(scrolledHeight > 0 && scrolledHeight < 1200){
    //     Games.style.transform = "translate(0px, " + scrolledHeight/20 + "%)";
    // }
});