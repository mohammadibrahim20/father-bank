document.getElementById('btn-submit').addEventListener('click', function(){
    const inputEmail = document.getElementById('email-input');
    const emailValue = inputEmail.value

    const inputPassword = document.getElementById('password-input');
    const  passwordValue = inputPassword.value
    if(emailValue === 'bd@bd.com' && passwordValue === 'passme'){
        window.location.href = 'bank-inner.html'
    }
    else{
        alert('toi halr put password vule gecus, mone kor valo kore password, passme kina')
    }
})