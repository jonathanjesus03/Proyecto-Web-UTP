let day ;
let NextDay;
let NumberToDay = new Date().getDay();
let NumberNextDay = new Date().getDay() + 1;

switch(NumberToDay){
    case 0:
        day = "Domingo";
        break;
    case 1:
        day = "Lunes";
        break;
    case 2:
        day = "Martes";
        break;
    case 3:
        day = "Miércoles";
        break;
    case 4:
        day = "Jueves";
        break;
    case 5:
        day = "Viernes";
        break;
    case 6:
        day = "Sábado";
        break;
}

document.getElementById("h3WelcomeDay").innerHTML = "Cursos del día " + day;


switch(NumberNextDay){
    case 0:
        NextDay = "Domingo";
        break;
    case 1:
        NextDay = "Lunes";
        break;
    case 2:
        NextDay = "Martes";
        break;
    case 3:
        NextDay = "Miércoles";
        break;
    case 4:
        NextDay = "Jueves";
        break;
    case 5:
        NextDay = "Viernes";
        break;
    case 6:
        NextDay = "Sábado";
        break;
}

document.getElementById("WelcomeSpan").innerHTML = "!Hola! Espero que estés teniendo un buen hoy y también el "+NextDay;


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
    label.style.color = "#1f1f1f";
    WhiteMode();
} else {
    label.textContent = "Modo claro";
    label.style.color = "white";
    DarkMode();
}
});

WhiteMode();
label.textContent = "Modo oscuro";
label.style.color = "black"