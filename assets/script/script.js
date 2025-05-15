//LOGIN
document.addEventListener("DOMContentLoaded", function () {
  //Asegurarse de que el DOM esté listo antes de ejecutar el código
  document
    .getElementById("login-form")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      let usuarios = [];
      try {
        const response = await fetch("/assets/data/datos.json");
        const data = await response.json();
        data.users.forEach((us) => {
          usuarios.push(us);
        });
      } catch (error) {
        console.error("Error al cargar el JSON:", error);
      }

      // Obtener los valores del correo y la contraseña
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Definir las credenciales válidas
      let validarEmail;
      let validarPassword;
      console.log("String fuera del fetch: " + usuarios.length);
      for (const user of usuarios) {
        validarEmail = user.email;
        validarPassword = user.password;
        // Validación de las credenciales
        if (email === validarEmail && password === validarPassword) {
          localStorage.setItem("email", email);
          console.log(`${validarEmail}::::${validarPassword}`);
          window.location.href = "/pages/page2.html";
          return;
        }
      }
      alert("Credenciales inválidas, intente de nuevo");
    });

  //MOVIMIENTO DE LAS CAJAS
  document.getElementById("a-login").addEventListener("click", login);
  document.getElementById("a-register").addEventListener("click", register);

  //Declare variables
  var container_login_register = document.querySelector(".right-side");

  var form_login = document.querySelector(".login-form");
  var form_register = document.querySelector(".register-form");
  var rear_box = document.querySelector(".left-side");

  weightPage();
  window.addEventListener("resize", weightPage);

  function weightPage() {
    if (window.innerWidth > 850) {
      rear_box.style.display = "block";
    } else {
      form_register.style.display = "none";
      form_login.style.display = "block";
      rear_box.style.display = "block";
      rear_box.style.opacity = "1";
      container_login_register.style.left = "0px";
    }
  }

  function register() {
    if (window.innerWidth > 850) {
      form_register.style.display = "block";
      container_login_register.style.left = "410px";
      form_login.style.display = "none";
      rear_box.style.opacity = "1";
    } else {
      form_register.style.display = "block";
      container_login_register.style.left = "0px";
      form_login.style.display = "none";
      rear_box.style.display = "block";
      rear_box.style.opacity = "1";
    }
  }

  function login() {
    if (window.innerWidth > 850) {
      form_register.style.display = "none";
      container_login_register.style.left = "10px";
      form_login.style.display = "block";
      rear_box.style.opacity = "1";
    } else {
      form_register.style.display = "none";
      container_login_register.style.left = "0px";
      form_login.style.display = "block";
      rear_box.style.display = "block";
    }
  }
});
