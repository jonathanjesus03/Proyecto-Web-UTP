//Rellenar campos
document.addEventListener("DOMContentLoaded", () => {
    fetch("../assets/data/datos.json") 
      .then(response => response.json())
      .then(data => fill_nombre(data))
      .catch(error => console.error("Error al cargar el JSON:", error));
  });

function fill_nombre(data){
    document.getElementById("span_nombre").innerText = data.name || "";
}

//Calcular Mes

let MesActual = new Date().getMonth() + 1;
let ciclo;
let año = new Date().getFullYear();

if(MesActual > 12){ MesActual = 1}

if(MesActual > 2 || MesActual <= 7){
    ciclo = `Ciclo I - Marzo ${año}`;
}else if(MesActual >= 8 || MesActual <13){
    ciclo = `Ciclo II - Agosto ${año}`;
}

document.getElementById("foot_table_rellenar").innerText = ciclo || "";


//Dark Mode
function DarkMode(){
    document.getElementsByClassName("main_content")[0].style.background = "#1d1d1d";
    document.getElementsByClassName("header-wrapper")[0].style.background = "#1d1d1d";
    document.getElementsByClassName("course_container")[0].style.background = "#1d1d1d";
    document.getElementsByClassName("tabular_wrapper")[0].style.background = "#1d1d1d";
    let letters = document.querySelectorAll("h3, h1, label.switch, .header_tittle span");
    letters.forEach(input => input.style.color = "white");
}   
function WhiteMode(){
    document.getElementsByClassName("main_content")[0].style.background = "#ebe9e9";
    document.getElementsByClassName("header-wrapper")[0].style.background = "#fff";
    document.getElementsByClassName("course_container")[0].style.background = "#fff";
    document.getElementsByClassName("tabular_wrapper")[0].style.background = "#fff";
    let letters = document.querySelectorAll("h3, h1, label.switch, .header_tittle span");
    letters[0].style.color = "rgb(255, 48, 48)";
    letters[1].style.color = "rgb(255, 48, 48)";
    letters[2].style.color = "rgb(247, 98, 98)";
    letters[3].style.color = "#1d1d1d";
    letters[4].style.color = "rgb(247, 98, 98)";
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



