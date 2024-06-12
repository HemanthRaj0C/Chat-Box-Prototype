
// Home Page Script

// For Loading Spinner

const spinner=document.querySelector('.spinner-wrap');
window.addEventListener('load', () => {
    spinner.style.opacity='0';
    setTimeout(() => {
        spinner.style.display='none'
    }, 500);
});

// For Dark-Light theme switch

const toggle = document.getElementById('toggleLight');
const body = document.querySelector('body');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'rgb(20, 22, 24)';
        body.style.color = 'white';
        body.style.transition = '2s';
    }else{
        body.style.background = 'rgb(186, 186, 186)';
        body.style.color = 'black';
        body.style.transition = '2s';
        
    }
});

// Year Getter

    const date=new Date();
    let year= date.getFullYear();
    document.getElementById('getYear').innerHTML=year;

// For the Validation Buttons

let popUp=document.getElementById('openpopup');
function openPopup(){
    popUp.classList.add("open-pop");
};
function closePop(){
    popUp.classList.remove("open-pop");
};

// For the Contact Us Validation

function message(){
var Name = document.getElementById('name');
var email = document.getElementById('email');
var msg = document.getElementById('zip');
const success = document.getElementById('success');
const danger = document.getElementById('danger');
if(Name.value === '' || email.value === '' || msg.value === ''){
    danger.style.display = 'block';
}
else{
    setTimeout(() => {
        Name.value = '';
        email.value = '';
        msg.value = '';
    }, 2000);
    openPopup();
}
setTimeout(() => {
    danger.style.display = 'none';
}, 3000);
}

// For the Newsletter Validation

function messageNewsletter(){
var email = document.getElementById('email-newsletter');
if(email.value===''){
    dangerNewsletter.style.display='block';
}
else{
    setTimeout(() => {
        email.value = '';
    }, 2000);
    openPopup();
}
setTimeout(() => {
    dangerNewsletter.style.display = 'none';
}, 2000);
};

// Log In Page Validation

function messageLogin(){
var email = document.getElementById('emailLogin');
var password = document.getElementById('passLogin');
if(email.value === '' || password.value === ''){
    dangerLogin.style.display = 'block';
}
else{
    setTimeout(() => {
        email.value = '';
        password.value = '';
    }, 2000);
    openPopup();
}
setTimeout(() => {
    dangerLogin.style.display = 'none';
}, 3000);
};
function LoginclosePop(){
    popUp.classList.remove("open-pop");
    window.location.href ="ChatBox.html";
    
};

// Sign Up Page Validation

function messageSignup(){
var name = document.getElementById('nameSignup');
var email = document.getElementById('emailSignup');
var password = document.getElementById('passSignup');
var repassword = document.getElementById('repassSignup');
if(name.value === '' || email.value === '' || password.value === '' || repassword.value === ''){
    dangerSignup.style.display = 'block';

}
else{
    setTimeout(() => {
        name.value='';
        email.value = '';
        password.value = '';
        repassword.value='';
    }, 2000);
    openPopup();
}
setTimeout(() => {
    dangerSignup.style.display = 'none';
}, 3000);
};

// Dynamic Text

$(function () { 
    count = 0; 
    wordsArray = ["Chat", "Connect", "Enjoy", "and Have Fun"]; 
    setInterval(function () { 
      count++; 
      $("#word").fadeOut(500, function () { 
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500); 
      }); 
    }, 2000); 
}); 