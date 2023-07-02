// function darkMode() {
//     let element = document.body;
//     let content = document.getElementById("DarkModetext");
//     element.className = "dark-mode";
//     content.innerText = "Dark Mode is ON";
    
// }
// function lightMode() {
//     let element = document.body;
//     let content = document.getElementById("DarkModetext");
//     element.className = "light-mode";
//     content.innerText = "Dark Mode is OFF";
// }

let $ = document
let darkMode = $.querySelector('.dark-mode')
const body = $.querySelector('body')
darkMode.addEventListener('click',function(){
    body.classList.toggle('dark')
    if(body.classList == 'dark'){
        darkMode.innerHTML = ''
        let iMoon = $.createElement('i')
        iMoon.classList.add('fa-regular','fa-moon')
        darkMode.append(iMoon)
        darkMode.style.padding = "10 12"
        darkMode.style.backgroundColor = "#1F1F1F"
        darkMode.style.border = "2px solid #FFFFFF"
        $.documentElement.style.setProperty('--main-bg-color-1','#1F1F1F')
        $.documentElement.style.setProperty('--main-bg-color-2','#ffffff')
        $.documentElement.style.setProperty('--main-color-1','#ffffff')
        $.documentElement.style.setProperty('--main-color-2','#1F1F1F')
        

        iMoon.style.color = "#FFF"
    }else{
        darkMode.innerHTML = ''
        let iSun = $.createElement('i')
        iSun.classList.add('fa-regular','fa-sun')
        darkMode.append(iSun)
        darkMode.style.padding = "10 10"
        darkMode.style.backgroundColor = "#FFFFFF"
        darkMode.style.border = "2px solid black"
        $.documentElement.style.setProperty('--main-bg-color-1','#5a5a5a')
        $.documentElement.style.setProperty('--main-bg-color-2','#ffffff')
        $.documentElement.style.setProperty('--main-color-2','##5a5a5a')
        $.documentElement.style.setProperty('--main-color-1','#ffffff')
    }
})