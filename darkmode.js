const body = document.querySelector('body');
const darkModeButton = document.querySelector('.dark-mode2');

// Check if dark mode preference is stored in local storage
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode if the preference is true
function enableDarkMode() {
  body.classList.add('dark-mode');
  darkModeButton.innerHTML = '<i class="fa-regular fa-moon"></i>';
  darkModeButton.style.padding = '10px 12px';
  darkModeButton.style.backgroundColor = '#1F1F1F';
  darkModeButton.style.border = '2px solid #FFFFFF';
  document.documentElement.style.setProperty('--main-bg-color-1', '#1F1F1F');
  document.documentElement.style.setProperty('--main-bg-color-2', '#FFFFFF');
  document.documentElement.style.setProperty('--main-color-1', '#FFFFFF');
  document.documentElement.style.setProperty('--main-color-2', '#1F1F1F');
}

// Apply light mode
function enableLightMode() {
  body.classList.remove('dark-mode');
  darkModeButton.innerHTML = '<i class="fa-regular fa-sun"></i>';
  darkModeButton.style.padding = '10px 10px';
  darkModeButton.style.backgroundColor = '#FFFFFF';
  darkModeButton.style.border = '2px solid black';
  document.documentElement.style.setProperty('--main-bg-color-1', '#5A5A5A');
  document.documentElement.style.setProperty('--main-bg-color-2', '#FFFFFF');
  document.documentElement.style.setProperty('--main-color-1', '#FFFFFF');
  document.documentElement.style.setProperty('--main-color-2', '#5A5A5A');
}

// Toggle dark mode on click
function toggleDarkMode() {
  const isDarkModeEnabled = body.classList.contains('dark-mode');
  body.classList.toggle('dark-mode');

  // Store dark mode preference in local storage
  localStorage.setItem('darkMode', !isDarkModeEnabled);
  
  if (!isDarkModeEnabled) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// Initialize dark mode based on the preference
if (isDarkMode) {
  enableDarkMode();
} else {
  enableLightMode();
}

// Add click event listener to the dark mode button
darkModeButton.addEventListener('click', toggleDarkMode);
