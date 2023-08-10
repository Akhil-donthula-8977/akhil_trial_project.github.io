
headingAppender("Connect\xa0AI\xa0models\xa0to\xa0build\xa0AI\xa0apps\xa0in minutes\xa0,with no-code");
function headingAppender(text) {
  const delayIncrement = 100;
  for (var i = 0; i < text.length; i++) {
    dummy(i, text[i])

  }
}




function dummy(i, letter) {
 const delayIncrement = 80;
  setTimeout(() => {
    const para = document.createElement("span");
     para.innerText = letter;
    para.classList.add("appender"); 
    document.getElementById("trial").appendChild(para);
    
  }, i * delayIncrement)

}



$(document).ready(() => {
  $(".preview").addClass("preview-transform")
})


