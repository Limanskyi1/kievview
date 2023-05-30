var logo = document.querySelector('.header__items__burger');
var menu = document.querySelector('.header__items__menu');
var logoBig = document.querySelector('.logo__animation');
var body = document.querySelector('body')
var bodyHide = document.querySelector('.body-hide')
var main = document.querySelector('main')
var mainHide = document.querySelector('main.hide')
var footer = document.querySelector('footer')
var footerHide = document.querySelector('footer__hide')
var linkVideo = document.querySelector('.header__items__menu__link__video')
var linkRewiews = document.querySelector('.header__items__menu__link__rewiews')
var linkContacts = document.querySelector('.header__items__menu__link__contacts')

logo.addEventListener('click',function(){
    menu.classList.toggle('showmenu');
})
logo.addEventListener('click',function(){
    logoBig.classList.toggle('showlogo');
})
linkVideo.addEventListener('click',function(){
  menu.classList.remove('showmenu');
})
linkRewiews.addEventListener('click',function(){
  menu.classList.remove('showmenu');
})
linkContacts.addEventListener('click',function(){
  menu.classList.remove('showmenu');
})
linkVideo.addEventListener('click',function(){
  logoBig.classList.remove('showlogo');
})
linkRewiews.addEventListener('click',function(){
  logoBig.classList.remove('showlogo');
})
linkContacts.addEventListener('click',function(){
  logoBig.classList.remove('showlogo');
})
logo.addEventListener('click',function(){
  body.classList.toggle('body-hide');
})
linkVideo.addEventListener('click',function(){
  body.classList.remove('body-hide');
})
linkRewiews.addEventListener('click',function(){
  body.classList.remove('body-hide');
})
linkContacts.addEventListener('click',function(){
  body.classList.remove('body-hide');
})
logo.addEventListener('click',function(){
  main.classList.toggle('main-hide');
})
linkVideo.addEventListener('click',function(){
  main.classList.remove('main-hide');
})
linkRewiews.addEventListener('click',function(){
  main.classList.remove('main-hide');
})
linkContacts.addEventListener('click',function(){
  main.classList.remove('main-hide');
})
logo.addEventListener('click',function(){
  footer.classList.toggle('footer__hide');
})
linkVideo.addEventListener('click',function(){
  footer.classList.remove('footer__hide');
})
linkRewiews.addEventListener('click',function(){
  footer.classList.remove('footer__hide');
})
linkContacts.addEventListener('click',function(){
  footer.classList.remove('footer__hide');
})



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const btnUp = {
    el: document.querySelector('.btn-up'),
    
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();


  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});


(function () {
  var toggle = document.querySelector('.header__items__burger');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
    linkVideo.addEventListener('click',function(){
      toggle.classList.remove('opened');
    })
    linkRewiews.addEventListener('click',function(){
      toggle.classList.remove('opened');
    })
    linkContacts.addEventListener('click',function(){
      toggle.classList.remove('opened');
    })
  });
})();


let popupBg1 = document.querySelector('.popup__bg-list');
let popup1 = document.querySelector('.popup-list');
let openPopupButtons1 = document.querySelectorAll('.open-popup-list');
let closePopupButton1 = document.querySelector('.close-popup-list');

openPopupButtons1.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupBg1.classList.add('active');
        popup1.classList.add('active');
    })
});

closePopupButton1.addEventListener('click',() => {
    popupBg1.classList.remove('active');
    popup1.classList.remove('active');

});

document.addEventListener('click', (e) => {
    if(e.target === popupBg1) {
        popupBg1.classList.remove('active');
        popup1.classList.remove('active');
    }
});




window.onload = function() {
  if (window.location.hash) {
    let target = document.querySelector(window.location.hash);
    if (target) {
      target.scrollIntoView();
    }
  }
};




document.addEventListener('DOMContentLoaded', () => {
  // Находим все кнопки для открытия поп-апа
  const popupButtons = document.querySelectorAll('.popup-button');

  // Находим поп-ап и его контент
  const popup = document.querySelector('.popup__video');
  const popupContent = document.querySelector('.popup-content');

  // Находим все видео в поп-апе
  const videos = popupContent.querySelectorAll('.video');

  // Скрываем поп-ап и все видео в нем при загрузке страницы
  popup.style.display = 'none';
  videos.forEach((video) => {
      video.style.display = 'none';
      video.pause();
  });

  // Добавляем обработчик событий для каждой кнопки
  popupButtons.forEach((popupButton) => {
      popupButton.addEventListener('click', () => {
          // Показываем поп-ап
          popup.style.display = 'block';
  
          // Определяем, какое видео нужно показать, и показываем его
          const videoId = popupButton.dataset.videoId;
          const video = document.querySelector(`#${videoId}`);
          video.style.display = 'block';

          // Проверяем, что поп-ап открыт, перед проигрыванием видео
          if (popup.style.display === 'block') {
              video.play();
         }
      });
  });

  // Добавляем обработчик событий для закрытия поп-апа
  popup.addEventListener('click', (event) => {
      // Если клик произошел на кнопке "Закрыть", то останавливаем проигрывание видео и скрываем поп-ап
      if (event.target.classList.contains('popup__close') || event.target.classList.contains('popup__video')) {
          videos.forEach((video) => {
              video.style.display = 'none';
              video.pause();
          });
          popup.style.display = 'none';
      }
  });
});


const btns = document.querySelectorAll('.cocial-btn');
const dropMenus = document.querySelectorAll('.cocial-drop-menu');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) {
            removeActive();
        } else {
            removeActive();
            btn.classList.add('active');
            document.querySelector(btn.dataset.target).classList.add('active');
        }
    })
})

const removeActive = () => {
    btns.forEach(btn => btn.classList.remove('active'));
    dropMenus.forEach(dropmenu => dropmenu.classList.remove('active'));
}

window.onclick = (e) => {
    if (!e.target.matches('.cocial-btn')) {
        removeActive()
    }
}



