
// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// ================= Firebase Config =================
const firebaseConfig = {
  apiKey: 
  authDomain: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
  appId: 
  measurementId:
};

// ================= Initialize Firebase =================

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ================= DOM =================

const name = document.getElementById("name");
const email = document.getElementById("email");

const addBtn = document.getElementById("add");
const updateBtn = document.getElementById("update");

let editId = "";

// ================= Create =================

addBtn.addEventListener("click", async () => {

    if (name.value === "" || email.value === "") {
        alert("Please fill all fields");
        return;
    }

    await addDoc(collection(db, "user"), {
        name: name.value,
        email: email.value
    });

    name.value = "";
    email.value = "";

    alert("Data Added Successfully");

    getData();

});

// ================= Read =================

async function getData() {

    const querySnapshot = await getDocs(collection(db, "user"));

    let html = "";

    querySnapshot.forEach((item) => {

        const data = item.data();

        html += `
        <tr>

            <td>${data.name}</td>

            <td>${data.email}</td>

            <td>
                <button
                    class="delete"
                    onclick="deleteData('${item.id}')">
                    Delete
                </button>
            </td>

            <td>
                <button
                    class="update"
                    onclick="editData('${item.id}')">
                    Update
                </button>
            </td>

        </tr>
        `;

    });

    document.getElementById("table").innerHTML = html;

}

getData();

// ================= Delete =================

window.deleteData = async function (id) {

    await deleteDoc(doc(db, "user", id));

    alert("Data Deleted");

    getData();

};

// ================= Edit =================

window.editData = async function (id) {

    editId = id;

    const docRef = doc(db, "user", id);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

        const data = docSnap.data();

        name.value = data.name;
        email.value = data.email;

        addBtn.style.display = "none";
        updateBtn.style.display = "block";

    }

};

// ================= Update =================

updateBtn.addEventListener("click", async () => {

    await updateDoc(doc(db, "user", editId), {

        name: name.value,
        email: email.value

    });

    alert("Data Updated Successfully");

    name.value = "";
    email.value = "";

    addBtn.style.display = "block";
    updateBtn.style.display = "none";

    editId = "";

    getData();

});

