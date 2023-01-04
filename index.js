
// Clock

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() =>{
    const date =new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * 6;
    const ss = date.getSeconds() * 6;
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});


// Theme

function initThemeSelector() {
    const themeSelect = document.getElementById("themeSelect");
    const themeStylesheetLink = document.getElementById("themeStylesheetLink");
    const currentTheme = localStorage.getItem("theme") || "grayTheme";

    function activateTheme(themeName) {
        themeStylesheetLink.setAttribute("href", `./${themeName}.css`);
    }

    themeSelect.addEventListener("change", () => {
        activateTheme(themeSelect.value);
        localStorage.setItem("theme", themeSelect.value);
    });


    themeSelect.value = currentTheme;
    activateTheme(currentTheme);
}

initThemeSelector();
















