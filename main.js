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