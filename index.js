  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
import {} from "";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCdOA2ewzah1ulHGjMkuBmVtbgjJHopiPE",
    authDomain: "unistory-47b82.firebaseapp.com",
    projectId: "unistory-47b82",
    storageBucket: "unistory-47b82.appspot.com",
    messagingSenderId: "548179930144",
    appId: "1:548179930144:web:4a41a6dd347c61a4102045"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


const corpo = document.getElementById("saida");

function envioDados(){
    let div = document.createElement("div");
    let texto = document.getElementById("campoTextoId").value;
    div.classList.add("texto");

    div.innerHTML=
    `<p>${texto}</p>`;

    corpo.appendChild(div);

}