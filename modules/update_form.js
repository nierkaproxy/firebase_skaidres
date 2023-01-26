import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import {
    getDatabase,
    ref, get,
    set, update
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

import { firebaseConfig } from './firebase.js';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const setForm = () => {

    let enterID = document.getElementById('enterID');
    let enterName = document.getElementById('enterName');

    console.log(enterID.value, enterName.value);

    set(ref(database, "Products/" + enterID.value), {
        ID: enterID.value,
        Name: enterName.value
    })
    .then(() => {
        alert('Data added successfully')
    })
    .catch((error) => {
        alert(error);
    });
}

const updateForm = () => {

    let enterID = document.getElementById('enterID');
    let enterName = document.getElementById('enterName');

    console.log(`update function ${enterID.value} ${enterName.value}`);

    update(ref(database, "Products/" + enterID.value), {
        Name: enterName.value
    })
        .then(() => {
            alert('Data updated successfully');
        })
        .catch((error) => {
            alert(error);
        });
}

export { setForm, updateForm }
