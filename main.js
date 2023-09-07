const wrappers = document.querySelectorAll('.wrapper');

wrappers.forEach(function(wrapper) {
  wrapper.addEventListener('click', function() {
    console.log('Pressed');
    wrapper.classList.toggle('active');
	getTranslate('ru')
  });
});

const i18Obj = {
 'en': {
    'skill-text': 'High-quality photos in the studio and on the nature',
    'main_title': 'Post',
    'menu_item_main': 'Main',
    'menu_item_store': 'Store',
    'menu_item_contacts': 'Contacts',
    'menu_item_about': 'About',
    'post_title': 'Title',
    'post_desc': 'Lorem ipsum dolor sito amet consectetur adipisicing elit. Ullam temporibus quo, porro obcaecati id nam!',
    'sidebal__title': 'News',
    'subscribe_btn': 'Subscribe',
 },
 'ru' : {
    'skill-text': 'Фотографии высокого качества в студии и на природе',
    'main_title': 'Посты',
    'menu_item_main': 'Главная',
    'menu_item_store': 'Магазин',
    'menu_item_contacts': 'Контакты',
    'menu_item_about': 'О нас',
    'post_title': 'Заголовок',
    'post_desc': 'Сама компания очень успешная. В любой момент вы будете ослеплены этим!',
    'sidebar_title': 'Новости',
    'subscribe_btn': 'Подписаться', 
 }
}

function getTranslate(language) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const translationKey = element.dataset.i18n;
    const translation = i18Obj[language][translationKey];
    if (translation) {
      element.textContent = translation;
    }
  });
}

let currentLang = 'en';

function toggleLanguage() {
  if (currentLang === 'en') {
    getTranslate('ru');
    currentLang = 'ru';
  } else {
    getTranslate('en');
    currentLang = 'en';
  }
}

const lang_btn = document.querySelector('.lang_btn');
lang_btn.addEventListener('click', toggleLanguage);


const root = document.documentElement;


const button = document.querySelector('.color_change');

button.addEventListener('click', function() {
  const root = document.documentElement;
  if (button.textContent === 'light') {
    root.style.setProperty('--text-color', 'white');
    root.style.setProperty('--main-color', '#282828');
    root.style.setProperty('--hover-color', '#642121');
    root.style.setProperty('--bg-color', 'wheat');
    root.style.setProperty('--sub-color', '#b63939');
    button.textContent = 'dark';
  } else {
    root.style.setProperty('--text-color', 'black');
    root.style.setProperty('--bg-color', '#FCF5E8');
    root.style.setProperty('--hover-color', '#e2cece');
    root.style.setProperty('--sub-color', '#e99a94');
    button.textContent = 'light';
  }
});