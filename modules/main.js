import { setForm } from './update_form.js'
import { updateForm } from './update_form.js'

let button = document.getElementById('button');
let update_button = document.getElementById('buttonUpdate');

button.addEventListener('click', setForm);
update_button.addEventListener('click', updateForm);