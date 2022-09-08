import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('input'),
  passwordEl: document.querySelector('textarea'),
  buttonEl: document.querySelector('button'),
};

refs.formEl.addEventListener('input', throttle(saveLocalStorageData, 500));
refs.formEl.addEventListener('submit', submit);
const LOCAL_STORAGE = 'feedback-form-state';

checkDataOnRestart();
// Функція виклику локального сховища
function saveLocalStorageData(event) {
  const email = this.email.value;
  const message = this.message.value;
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify({ email, message }));
}
// Функція відправлення та очистки форми
function submit(el) {
  el.preventDefault();
  console.log(localStorage.getItem(LOCAL_STORAGE));
  localStorage.removeItem(LOCAL_STORAGE);
  el.currentTarget.reset();
}

const emptyInput = {};
refs.formEl.addEventListener('input', e => {
  emptyInput[e.target.name] = e.target.value;
});

function checkDataOnRestart() {
  if (!localStorage.getItem(LOCAL_STORAGE)) {
    return;
  }
  const onRestartData = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
  refs.passwordEl.value = onRestartData.message;
  refs.emailEl.value = onRestartData.email;
}
