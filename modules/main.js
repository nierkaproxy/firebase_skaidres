import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

import {
    getDatabase,
    set, update
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

import { firebaseConfig } from './firebase.js';
import { updateForm } from './update_form.js'

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);