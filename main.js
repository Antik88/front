const wrappers = document.querySelectorAll('.wrapper');

wrappers.forEach(function(wrapper) {
  wrapper.addEventListener('click', function() {
    console.log('Pressed');
    wrapper.classList.toggle('active');
	getTranslate('ru')
  });
});

// Объект с переводами
const i18Obj = {
 'en': {
 'skill-text': 'High-quality photos in the studio and on the nature'
 },
 'ru' : {
 'skill-text': 'Высококачественные фото в студии и на природе'
 }
}

function getTranslate(language) {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(element => {
    const translationKey = element.dataset.i18n;
    const translation = i18Obj[language][translationKey];
    element.textContent = translation;
  });
}

const lang_btn = document.querySelector('.lang_btn');

lang_btn.addEventListener('click', getTranslate('ru'))
