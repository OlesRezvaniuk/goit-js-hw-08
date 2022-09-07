import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.getElementsByName('email'),
  textarea: document.getElementsByName('message'),
};
const STORAGE_KEY = 'feedback-form-state';

let fieldData = {};
if (localStorage.getItem(STORAGE_KEY)) {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  fieldData = { ...parsedData };
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  fieldData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(fieldData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(parsedData);
  localStorage.removeItem(STORAGE_KEY);
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  if (parsedData[refs.input.name]) {
    refs.input.value = parsedData[refs.input.name];
  }
  if (parsedData[refs.textarea.name]) {
    refs.textarea.value = parsedData[refs.textarea.name];
  }
}

if (localStorage.getItem(STORAGE_KEY)) {
  populateForm();
}
