let regExp = /^[a-zA-Z]{1,20}$/
let regMail = /@\S*\.[a-zA-Z]{2,3}$/
let regPass = /^\w{8,15}$/
let f1 = document.forms['f1'];
let first = document.querySelector('#imgFirst')
let first1 = document.querySelector('#imgFirst1')
let last = document.querySelector('#imgLast')
let last1 = document.querySelector('#imgLast1')
let email = document.querySelector('#imgEmail')
let email1 = document.querySelector('#imgEmail1')
let password = document.querySelector('#imgPassword')
let password1 = document.querySelector('#imgPassword1')
let text = document.querySelector('#text')
let text2 = document.querySelector('#text2')
let text3 = document.querySelector('#text3')
let text4 = document.querySelector('#text4')
let great = document.querySelector('.great')
let button2 = document.querySelector('#button2')

f1.First.addEventListener("input", function () {
    if (regExp.test(f1.First.value)) {
        first.style.display = 'block'
        first1.style.display = 'none'
        text.innerHTML = ''
        text.style.display = 'none'
    }
    else {
        first1.style.display = 'block'
        first.style.display = 'none'
        text.style.display = 'block'
        text.innerHTML = 'Please provide a valid First name'
    }
})
f1.Last.addEventListener("input", function () {
    if (regExp.test(f1.Last.value)) {
        last.style.display = 'block'
        last1.style.display = 'none'
        text2.innerHTML = ''
        text2.style.display = 'none'
    }
    else {
        last1.style.display = 'block'
        last.style.display = 'none'
        text2.style.display = 'block'
        text2.innerHTML = 'Please provide a valid Last name'
    }
})
f1.Email.addEventListener("input", function () {
    if (regMail.test(f1.Email.value)) {

        email.style.display = 'block'
        email1.style.display = 'none'
        text3.innerHTML = ''
        text3.style.display = 'none'
    }
    else {
        email1.style.display = 'block'
        email.style.display = 'none'
        text3.style.display = 'block'
        text3.innerHTML = 'Please provide a valid email'
    }
})
f1.Password.addEventListener("input", function () {
    if (regPass.test(f1.Password.value)) {
        password.style.display = 'block'
        password1.style.display = 'none'
        text4.innerHTML = ''
        text4.style.display = 'none'
    }
    else {
        password1.style.display = 'block'
        password.style.display = 'none'
        text4.style.display = 'block'
        text4.innerHTML = 'Please provide a valid password'
    }
})
f1.checkbox.addEventListener('change', function () {
    if(first.style.display == 'block' & last.style.display == 'block' & email.style.display == 'block' & password.style.display == 'block'){
        f1.button.disabled = false;
    }
    if (f1.checkbox.checked == true) {
        f1.button.style.backgroundColor = 'blue';
        f1.First.disabled = true;
        f1.Last.disabled = true;
        f1.Email.disabled = true;
        f1.Password.disabled = true;
    }
    else {
        f1.First.disabled = false;
        f1.Last.disabled = false;
        f1.Email.disabled = false;
        f1.Password.disabled = false;
        f1.button.disabled = true;
        f1.button.style.backgroundColor = '#0FC0FCFF';
    }
})
f1.button.addEventListener('click', function () {
    great.style.display = 'block'
})
button2.addEventListener('click', function () {
    great.style.display = 'none'
    f1.reset()  
    first.style.display = 'none';
    last.style.display = 'none';
    email.style.display = 'none';
    password.style.display = 'none';
    f1.button.disabled = true;
    f1.button.style.backgroundColor = '#0FC0FCFF';
    f1.First.disabled = false;
    f1.Last.disabled = false;
    f1.Email.disabled = false;
    f1.Password.disabled = false;
})