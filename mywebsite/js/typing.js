var i = 0;
var txt = 'I am a  web developer and a Programmer'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing-effect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}