document.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/data/datos.json")
    .then((response) => response.json())
    .then((data) => fillForm(data))
    .catch((error) => console.error("Error al cargar el JSON:", error));
});

document.getElementById("button_save").addEventListener("click", saveChanges);
document.getElementById("button_edit").addEventListener("click", enableEditing);

function fillForm(data) {
  let user_final;
  let correo_user = localStorage.getItem("email");
  data.users.forEach((user) => {
    if (user.email == correo_user) {
      user_final = user;
    }
  });

  document.getElementById("name").value = user_final.name || "";
  document.getElementById("surname").value = user_final.surname || "";
  document.getElementById("dob").value = user_final.dob || "";
  document.getElementById("gender").value = user_final.gender || "";
  document.getElementById("nationality").value = user_final.nationality || "";
  document.getElementById("phone_number").value = user_final.phone_number || "";
  document.getElementById("major").value = user_final.major || "";
  document.getElementById("enrollment_date").value =
    user_final.enrollment_date || "";
  document.getElementById("modalidad").value = user_final.modalidad || "";
  document.getElementById("email").value = user_final.email || "";
  document.getElementById("span_cycle").innerText =
    "Cycle - " + user_final.cycle;
  document.getElementById("tittle_name_student").innerText = user_final.name;
}

function enableEditing() {
  const inputs = document.querySelectorAll(".form-field input");
  inputs.forEach((input) => input.removeAttribute("readonly"));
  inputs.forEach(
    (input) => (input.style.background = "rgba(255, 207, 207, 0.507)")
  );
  document.querySelector('button[id="button_edit"]').style.display = "none";
  document.querySelector('button[id="button_save"]').style.display = "inline";
}

function saveChanges() {
  const form = document.getElementById("form_student");
  const formData = new FormData(form);

  console.log("Datos guardados:", Object.fromEntries(formData.entries()));

  const inputs = document.querySelectorAll("#form_student input");
  inputs.forEach((input) => input.setAttribute("readonly", true));
  inputs.forEach(
    (input) => (input.style.background = "rgba(218, 168, 168, 0.507)")
  );
  document.querySelector('button[id="button_edit"]').style.display = "inline";
  document.querySelector('button[id="button_save"]').style.display = "none";

  alert("Información actualizada con éxito.");
}

// document.getElementById("form_photo").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const formData = new FormData();
//     const fileInput = document.getElementById("input_photo");
//     const file = fileInput.files[0];

//     if (!file) {
//       alert("Please select a file");
//       return;
//     }

//     formData.append("photo", file);

//     fetch("/upload", {
//       method: "POST",
//       body: formData,
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.filePath) {
//         alert("Photo uploaded successfully!");
//         console.log("File path:", data.filePath);
//         document.getElementById("img_photo").src = data.filePath;
//       } else {
//         alert("Error uploading the photo");
//       }
//     })
//     .catch(error => {
//       console.error("Error:", error);
//       alert("Error uploading the photo");
//     });
//   });

document.getElementById("form_photo").addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = document.getElementById("input_photo").files[0];
  if (!file) return alert("Please select a file");

  const formData = new FormData();
  formData.append("photo", file);

  try {
    const res = await fetch("/upload", { method: "POST", body: formData });
    const data = await res.json();
    data.filePath
      ? (alert("Photo uploaded successfully!"),
        (document.getElementById("img_photo").src = data.filePath))
      : alert("Error uploading the photo");
  } catch {
    alert("Error uploading the photo");
  }
});

//Dark Mode
function DarkMode() {
  document.getElementsByClassName("main_content")[0].style.background =
    "#1d1d1d";
  document.getElementsByClassName("header_titles")[0].style.background =
    "#1d1d1d";
  document.getElementsByClassName("container_student")[0].style.background =
    "#1d1d1d";
  document.getElementById("logo_utp").src = "/assets/img/utp.svg";
  document.getElementById("logo_utp").style.width = "175px";

  // Cambiar texto a blanco
  const textos = document.querySelectorAll(
    "h3, label.switch, .header_titles span, label"
  );
  textos.forEach((el) => (el.style.color = "white"));

  // Cambiar inputs
  const inputs = document.querySelectorAll(".form-field input");
  inputs.forEach((input) => {
    input.style.backgroundColor = "#3b3b3b";
    input.style.color = "white";
  });
}
function WhiteMode() {
  document.getElementsByClassName("main_content")[0].style.background =
    "#ebe9e9";
  document.getElementsByClassName("header_titles")[0].style.background = "#fff";
  document.getElementsByClassName("container_student")[0].style.background =
    "#fff";
  document.getElementById("logo_utp").src = "/assets/img/UTP_logo2.jpg";

  // Restaurar colores de texto
  const textos = document.querySelectorAll(
    "h1, h3, label.switch, .header_titles span, label"
  );
  textos.forEach((el) => (el.style.color = "rgb(255, 48, 48)"));

  // Restaurar inputs
  const inputs = document.querySelectorAll(".form-field input");
  inputs.forEach((input) => {
    input.style.backgroundColor = "rgba(218, 168, 168, 0.507)";
    input.style.color = "#000";
  });
}

const button = document.getElementById("switch");
const label = document.getElementById("span_mode");

button.addEventListener("click", () => {
  if (label.innerHTML == "Modo claro") {
    label.textContent = "Modo oscuro";
    label.style.color = "black";
    WhiteMode();
  } else {
    label.textContent = "Modo claro";
    label.style.color = "white";
    DarkMode();
  }
});
