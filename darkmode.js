let $ = document;
let darkMode = $.querySelector('.dark-mode2');
const body = $.querySelector('body');

// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if the preference is true
if (isDarkMode) {
  body.classList.add('dark-mode');
  darkMode.innerHTML = '';
  let iMoon = $.createElement('i');
  iMoon.classList.add('fa-regular', 'fa-moon');
  darkMode.append(iMoon);
  darkMode.style.padding = "10px 12px";
  darkMode.style.backgroundColor = "#1F1F1F";
  darkMode.style.border = "2px solid #FFFFFF";
  $.documentElement.style.setProperty('--main-bg-color-1', '#1F1F1F');
  $.documentElement.style.setProperty('--main-bg-color-2', '#ffffff');
  $.documentElement.style.setProperty('--main-color-1', '#ffffff');
  $.documentElement.style.setProperty('--main-color-2', '#1F1F1F');
  iMoon.style.color = "#FFF";
} else {
  // Apply light mode
  darkMode.innerHTML = '';
  let iSun = $.createElement('i');
  iSun.classList.add('fa-regular', 'fa-sun');
  darkMode.append(iSun);
  darkMode.style.padding = "10px 10px";
  darkMode.style.backgroundColor = "#FFFFFF";
  darkMode.style.border = "2px solid black";
  $.documentElement.style.setProperty('--main-bg-color-1', '#5a5a5a');
  $.documentElement.style.setProperty('--main-bg-color-2', '#ffffff');
  $.documentElement.style.setProperty('--main-color-2', '##5a5a5a');
  $.documentElement.style.setProperty('--main-color-1', '#ffffff');
}

// Toggle dark mode on click
darkMode.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  const isDarkModeEnabled = body.classList.contains('dark-mode');
  
  // Store dark mode preference in local storage
  localStorage.setItem('darkMode', isDarkModeEnabled.toString());

  if (isDarkModeEnabled) {
    darkMode.innerHTML = '';
    let iMoon = $.createElement('i');
    iMoon.classList.add('fa-regular', 'fa-moon');
    darkMode.append(iMoon);
    darkMode.style.padding = "10px 12px";
    darkMode.style.backgroundColor = "#1F1F1F";
    darkMode.style.border = "2px solid #FFFFFF";
    $.documentElement.style.setProperty('--main-bg-color-1', '#1F1F1F');
    $.documentElement.style.setProperty('--main-bg-color-2', '#ffffff');
    $.documentElement.style.setProperty('--main-color-1', '#ffffff');
    $.documentElement.style.setProperty('--main-color-2', '#1F1F1F');
    iMoon.style.color = "#FFF";
  } else {
    darkMode.innerHTML = '';
    let iSun = $.createElement('i');
    iSun.classList.add('fa-regular', 'fa-sun');
    darkMode.append(iSun);
    darkMode.style.padding = "10px 10px";
    darkMode.style.backgroundColor = "#FFFFFF";
    darkMode.style.border = "2px solid black";
    $.documentElement.style.setProperty('--main-bg-color-1', '#5a5a5a');
    $.documentElement.style.setProperty('--main-bg-color-2', '#ffffff');
    $.documentElement.style.setProperty('--main-color-2', '##5a5a5a');
    $.documentElement.style.setProperty('--main-color-1', '#ffffff');
  }
});
