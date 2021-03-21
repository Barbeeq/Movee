new Swiper('.autopark__wrapper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'

      },
      observeParents: true,
      observer: true,
      observeSlideChildren: true,
      autoHeight: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
           
              pagination:
          {
          el: '.swiper-pagination'   
          } 
        },
        480: {
          slidesPerView: 1,
          
              pagination:
          {
          el: '.swiper-pagination'   
          } 
        },
        768: {
          slidesPerView: 1,
              spaceBetween: 20,
          pagination:
          {
          el: '.swiper-pagination'   
          } 
        },
        992: {
          slidesPerView: 1,
              spaceBetween: 20,
              pagination:
          {
          el: '.swiper-pagination'   
          } 
        },
        1150: {
          slidesPerView: 1,
         
              pagination:
              {
              el: '.swiper-pagination'   
              }     
              
              
        }
      }
});

 new Swiper('.swiper-container', {
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoHeight: true,
  observeParents: true,
  observer: true,
  observeSlideChildren: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
       
          pagination:
      {
      el: '.swiper-pagination'   
      } 
    },
    480: {
      slidesPerView: 1,
      
          pagination:
      {
      el: '.swiper-pagination'   
      } 
    },
    768: {
      slidesPerView: 1,
          spaceBetween: 20,
      pagination:
      {
      el: '.swiper-pagination'   
      } 
    },
    992: {
      slidesPerView: 1,
          spaceBetween: 20,
          pagination:
      {
      el: '.swiper-pagination'   
      } 
    },
    1150: {
      slidesPerView: 1,
     
          pagination:
          {
          el: '.swiper-pagination'   
          }     
        }     
          
    }
  
  
});




$('ul.autopark__tabs').on('click', 'li:not(.autopark__tab_active)', function() {
    $(this)
      .addClass('autopark__tab_active').siblings().removeClass('autopark__tab_active')
      .closest('div.container').find('div.autopark__wrapper').removeClass('autopark__wrapper_active').eq($(this).index()).addClass('autopark__wrapper_active');
  });

$('input[name=phone]').mask('+7 (999) 999-99-99');
// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
// вписываем нужный нам текст внутрь элемента
mapTitle.textContent = 'Для активации карты нажмите по ней';
// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
wrapMap.appendChild(mapTitle);
// по клику на карту
wrapMap.onclick = function() {
    // убираем атрибут "style", в котором прописано свойство "pointer-events"
    this.children[0].removeAttribute('style');
    // удаляем элемент с интерактивной подсказкой
    mapTitle.parentElement.removeChild(mapTitle);
}
// по движению мыши в области карты
wrapMap.onmousemove = function(event) {
    // показываем подсказку
    mapTitle.style.display = 'block';
    // двигаем подсказку по области карты вместе с мышкой пользователя
    if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
// при уходе указателя мыши с области карты
wrapMap.onmouseleave = function() {
    // прячем подсказку
    mapTitle.style.display = 'none';
}

$('[data-modal=buy], .button_callback, .button_footer').on('click', function(){
    $('.overlay, #buy').fadeIn('slow');
});
$('[data-modal=slider_price]').on('click', function(e){
  e.preventDefault;
  $('.overlay, #modal_prices').fadeIn('slow');
  
});

$('.reviews__button').on('click', function(){
  $('.overlay,  .modal_reviews').fadeIn('slow');

  
});


$('.modal__close').on('click', function(){
    $('.overlay, #buy, .modal_reviews, #order, #modal_prices').fadeOut('slow');
  });

  $('[data-modal=order]').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__descr').text($('.prices__descr').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
  }); 



  function validateForms(form){
    $(form).validate ({
      rules: {
        name: "required",
        phone: "required",
        a: "required"
      },
      messages: {
        name: "",
        phone: "",
        a: ""
      }

    });

  };

          validateForms('#buy form');
          validateForms('#order form');
          validateForms('.feed-form');

  $('.menu-open').click(function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-open_active')
    $('.nav__item').toggleClass('nav__item_active')
  });       


