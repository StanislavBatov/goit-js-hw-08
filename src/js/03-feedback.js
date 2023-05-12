import throttle from 'lodash.throttle';
import storeService from './json.js';

const formRef = document.querySelector('.feedback-form');

if (localStorage.getItem("feedback-form-state")) {
    const savedInputs = storeService.load("feedback-form-state")
    for (const input in savedInputs) {
        if (savedInputs[input]) {
            formRef[input].value = savedInputs[input];
        }
    }
}


formRef.addEventListener('input', throttle(onInputForm, 500))
formRef.addEventListener('submit', onSubmitForm)


function onInputForm(e) {
  const inputHolder = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
  inputHolder[e.target.name] = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(inputHolder));
}

function onSubmitForm(e) {
  e.preventDefault();
  if (JSON.parse(localStorage.getItem("feedback-form-state")) === null) {
    return alert("All fields must be filled!!!")
  } else {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
  formRef.reset();
  }
  
  };
