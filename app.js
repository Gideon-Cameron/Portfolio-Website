var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbx2iK5QZx_ghMZ-GVnXs15kfsFykDITIhZwizUSHK1X3AGdrVwnpmI2ezcSLLyeKqnK/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
      
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
    msg.innerHTML = "Message sent successfully"
    setTimeout(function(){
        msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


function seeMore() {
    let more = document.getElementById("more");
    more.style.display = "grid";
    let less = document.getElementById("less");
    less.style.display = "none";
    let hide = document.getElementById("hide");
    hide.style.display = "block"
}

function seeLess() {
    let more = document.getElementById("more");
    more.style.display = "none";
    let less = document.getElementById("less");
    less.style.display = "block";
    let hide = document.getElementById("hide");
    hide.style.display = "none"
}