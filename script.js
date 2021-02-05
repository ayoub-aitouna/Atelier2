var _name = document.querySelector('.name');
var res = document.querySelector('.residence');
var email = document.querySelector('.email');
var age = document.querySelector('.age');
var send = document.querySelector('.send');
var cpa = document.querySelectorAll('.lang input');
var cpc = document.querySelectorAll('input[type="checkbox"]:checked');
var error = document.querySelector('.error');
var get = document.querySelector('.get');
if (document.querySelectorAll('input[type="checkbox"]:checked').length > 1) {
    send.disabled = false;
} else {
    send.disabled = true;
}

cpa.forEach(element => {
    element.onclick = (e) => {
        console.log(document.querySelectorAll('input[type="checkbox"]:checked'))

        if (document.querySelectorAll('input[type="checkbox"]:checked').length > 1) {
            console.log(document.querySelectorAll('input[type="checkbox"]:checked').length > 2);
            send.disabled = false;
        } else {
            send.disabled = true;
        }

    }

});
//_name.setAttribute('onkeyup', 'checkName()');
send.onclick = (e) => {
    console.log('send');
}
_name.onkeyup = (e) => {
    const reg = /[^a-z]+/;
    if (reg.test(_name.value) && _name.value.lenght > 0) {
        console.log('tested');
        _name.classList.remove('active');
        show(false);
    } else {
        _name.classList.add('active')
        send.disabled = true;
        show(true);

    }
}
res.onkeyup = (e) => {
    const reg = /[A-Z]+/;
    if (reg.test(res.value)) {
        console.log('tested');
        res.classList.remove('active');
        show(false);
        console.log(res.classList[0])
    } else {
        res.classList.add('active');
        send.disabled = true;
        show(true);
    }
}
email.onkeyup = (e) => {
    const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/
    if (reg.test(email.value)) {
        console.log('tested');
        email.classList.remove('active');
        show(false);
    } else {
        email.classList.add('active');
        send.disabled = true;
        show(true);
    }
}

age.onkeyup = (e) => {
    if (age.value >= 18) {
        age.classList.remove('active');
        show(false);
    } else {
        age.classList.add('active');
        send.disabled = true;
        show(true);
    }
}

function show(b) {
    if (b) {
        error.classList.add('active')
    } else {
        error.classList.remove('active');
    }
}
send.onclick = (e) => {
    var list = document.querySelectorAll('input[type="checkbox"]:checked');
    var checked = list.forEach(element => {
        return element.value;
    });

    var JSon = {
        'name': _name.value,
        'resedence': res.value,
        'email': email.value,
        'age': age.value,
        'lange': checked
    }
    show(true);
    console.log(JSon);
    error.innerText = "name is " + JSon["name"] + 'resedence is' + JSon['resedence'] + 'email is' + JSon.email + 'age is ' + JSon.age + "lang is " + JSon.lange;

    localStorage.setItem('monInfo', JSON.stringify(JSon));

}