const btnSignIn = document.getElementById('btn-sign-in');
const email = document.getElementById('email');
const password = document.getElementById('password');

btnSignIn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

checkbox.addEventListener('click', function(){
  if(btnSubmit.disabled === true){
    btnSubmit.disabled = false;
  }else {
    btnSubmit.disabled = true;
  }
})