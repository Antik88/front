const wrappers = document.querySelectorAll('.wrapper');

wrappers.forEach(function (wrapper) {
  wrapper.addEventListener('click', function () {
    wrapper.classList.toggle('active');
  });
});


let i18Obj = {};

document.addEventListener('DOMContentLoaded', function() {
  fetch('./data/i18n.json')
    .then(response => response.json())
    .then(data => {
      i18Obj = data;
      getLocalStorage();
    })
    .catch(error => {
      console.error('Error fetching translation data:', error);
    });
});

function getTranslate(language) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const translationKey = element.dataset.i18n;
    const translation = i18Obj && i18Obj[language] && i18Obj[language][translationKey];
    if (translation) {
      element.textContent = translation;
    }
  });
}

let currentLang = 'en';

function toggleLanguage() {
  if (currentLang === 'en') {
    getTranslate('ru');
    lang_btn.textContent = 'ru';
    currentLang = 'ru';
    localStorage.setItem('language', 'ru');
  } else {
    getTranslate('en');
    lang_btn.textContent = 'en';
    currentLang = 'en';
    localStorage.setItem('language', 'en');
  }
}

const lang_btn = document.querySelector('.lang_btn');
lang_btn.addEventListener('click', toggleLanguage);


const root = document.documentElement;
const button = document.querySelector('.color_change');

button.addEventListener('click', function () {
  const root = document.documentElement;
  if (button.textContent === 'light') {
    setDarkTheme(root);
    button.textContent = 'dark';
    localStorage.setItem('theme', 'dark');
  } else {
    setLightTheme(root);
    button.textContent = 'light';
    localStorage.setItem('theme', 'light');
  }
});

function setDarkTheme(root) {
  root.style.setProperty('--text-color', 'white');
  root.style.setProperty('--main-color', '#282828');
  root.style.setProperty('--hover-color', '#642121');
  root.style.setProperty('--bg-color', 'wheat');
  root.style.setProperty('--sub-color', '#b63939');
}

function setLightTheme(root) {
  root.style.setProperty('--text-color', 'black');
  root.style.setProperty('--bg-color', '#FCF5E8');
  root.style.setProperty('--hover-color', '#e2cece');
  root.style.setProperty('--sub-color', '#e99a94');
}

function getLocalStorage() {
  if (localStorage.getItem('theme') === 'dark') {
    const root = document.documentElement;
    setDarkTheme(root);
    button.textContent = 'dark';
  } else {
    const root = document.documentElement;
    setLightTheme(root);
    button.textContent = 'light';
  }

  if (localStorage.getItem('language') === 'ru') {
    getTranslate('ru');
    currentLang = 'ru';
  } else {
    getTranslate('en');
    currentLang = 'en';
  }
}

window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
  localStorage.setItem('theme', button.textContent === 'dark' ? 'dark' : 'light');
  localStorage.setItem('language', currentLang);
}

window.addEventListener('beforeunload', setLocalStorage);

const img_btn = document.querySelector('.img_change_btn');
const img = document.querySelectorAll('.post__img');

let isImg2 = false;

img_btn.addEventListener('click', function() {
  if (isImg2) {
    img.forEach(function(imgElement) {
      imgElement.style.backgroundImage = `url('images/main_img_1.png')`;
    });
    isImg2 = false;
  } else {
    img.forEach(function(imgElement) {
      imgElement.style.backgroundImage = `url('images/main_img_2.png')`;
    });
    isImg2 = true;
  }
});

const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = 'Pause';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play';
  }
});