let selectElem = document.querySelector('#theme-select');
let logo = document.querySelector('#byui-logo');
let heading2 = document.querySelector('h2');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'light') {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        heading2.style.color = "#3468a8";
        logo.src = "images/byui_logo.png";
        console.log("light theme selected");
    } else if (current === 'dark') {
        document.body.style.backgroundColor = "#343334";
        document.body.style.color = "white";
        heading2.style.color = "#91b3cb";
        logo.src = "images/byui-logo-white.png";
        console.log("dark theme selected");
    } else {
        // default
        document.body.style.backgroundColor = "white";
    }
}