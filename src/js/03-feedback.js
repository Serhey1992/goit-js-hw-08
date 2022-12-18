import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const localkey = 'feedback-form-state';
const dataForm = {};

formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", throttle(onInput, 500));

formStorage();

function onFormSubmit(evt) {
    evt.preventDefault();
    dataForm.email = formEl.elements.email.value;
    dataForm.message = formEl.elements.message.value;
    console.log(dataForm);
    formEl.reset();
    localStorage.removeItem(localkey, JSON.stringify(dataForm));
};

function onInput(evt) {
    dataForm[evt.target.name] = evt.target.value;

    localStorage.setItem(localkey, JSON.stringify(dataForm));
}

function formStorage() {
    const saveForm = localStorage.getItem(localkey);
    if (saveForm) {
        const formParse = JSON.parse(saveForm);
        for (const parse in formParse) {
            if (formParse.hasOwnProperty(parse)) {
                formEl.elements[parse].value = formParse[parse];
                dataForm[parse] = formParse[parse];
            }
        }
    }

}