
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menbtn');

menuBtn.addEventListener("click", ()=>{
    menu.classList.remove("Hidden");

});

menu.addEventListener("click", ()=>{
    menu.classList.add("Hidden");
});

// 


const text = baffle(".data");
text.set({
    characters : '░░▒ ▓██▓▓ ░/▒░█ ▓▒▓ <▓▓/< >█░▓ ▓░█ █▓█░ <░█░',
    speed: 120
});
text.start();
text.reveal(4000);


// function([string1, string2],target id,[color1,color2])    
consoleText(['Hello foodies,', 'We are always here to serve you.', 'Khane kaa swaad, jo hameshaa yaad', 'Made with Love.'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

    // alert()
    // menu.classList.remove("Hidden");

    const bar = document.querySelector(".bars");
    const closeBar = document.querySelector(".closebar");
    const navbar= document.querySelector(".navbar");

    bar.addEventListener("click", ()=>{
      navbar.classList.remove("hidde");
      bar.style.display="none";
      closeBar.style.display="block";
    })

    closeBar.addEventListener("click", ()=>{
      navbar.classList.add("hidde");
      bar.style.display="block";
    });

    function displayBar(x){
      if(x.matches){
      buttons.style.display="none"
      }
    }
    var buttons = document.querySelectorAll(".fa-solid");
    var x= window.matchMedia("(max-width: 901px)")