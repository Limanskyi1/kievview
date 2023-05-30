const maxImg = document.querySelector('.right-panel img');
const select = document.querySelector('select');
const allLang = ['ua', 'en'];

document.querySelectorAll('.left-panel img').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    let lang = select.value;
    localStorage.setItem('lang', lang); // сохраняем выбранный язык в localStorage
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}


function changeLanguage() {
    let lang = localStorage.getItem('lang') || 'ua'; // читаем выбранный язык из localStorage или устанавливаем значение по умолчанию
    select.value = lang;
    document.querySelector('title').innerHTML = langArr['unit'][lang];
    for (let key in langArr) {
        let elems = document.querySelectorAll('.lng-' + key);
        if (elems) {
            elems.forEach(elem => {
                elem.innerHTML = langArr[key][lang];
            });
        }
    }
}



changeLanguage();