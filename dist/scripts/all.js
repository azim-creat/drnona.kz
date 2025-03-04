$(document).ready(function () {
  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  // Скрывается и открывается кнопка меню
  $('.menuBotton').click(() => {
    $('nav').toggleClass('active')
  });
  // Скрывается и открывается кнопка меню
  //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  // Скрытие и поднятие меню
  var lastScrollTop = 0;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $('.allHeaders').removeClass('fixed');
    } else {
      $('.allHeaders').addClass('fixed');
    }
    lastScrollTop = st;
  });

  // Скрытие и поднятие меню 
  //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
  // свайпы и прокрутка товаров
  // Код из бибилиотеки swiper ↓↓↓↓↓↓↓
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });
  // Код из бибилиотеки swiper ↑↑↑↑↑↑↑↑↑↑↑↑
  // свайпы и прокрутка товаров
  //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑


  $('.newsItem').hover(
    function () {
      $(".newsImg", this).css({ "bottom": "20px", "right": "20px" })
      $(".imgFrame", this).css({ "bottom": "0px", "right": "0px" })
    },
    function () {
      $(".newsImg", this).css({ "bottom": "0px", "right": "0px" })
      $(".imgFrame", this).css({ "bottom": "20px", "right": "20px" })
    }
  );

  $('.footerNewItem').hover(
    function () {
      $(".footerNewItem_Img_frame", this).css({ "width": "98%" })

    },
    function () {
      $(".footerNewItem_Img_frame", this).css({ "width": "145px" })
    }
  );

  $('.quetionForm').hover(
    function () {
      $(".quetionForm_Img_frame", this).css({ "width": "900px" })

    },
    function () {
      $(".quetionForm_Img_frame", this).css({ "width": "900px" })
    }
  );


  $('.bussinesItem').hover(
    function () {
      $(".bussinesItem_Img_frame", this).css({ "width": "80vw" })

    },
    function () {
      $(".bussinesItem_Img_frame", this).css({ "width": "80vw" })
    }
  );


  var isMobile = false; //initiate as false
  // device detection
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }


  if (!isMobile) {
    $('.menu-item').hover(function () {
      $(this).children('.sub-menu').stop(false, true).fadeIn(300)
    }, function () {
      $(this).children('.sub-menu').stop(false, true).fadeOut(300)
    });
  }
  else {
    $('.menu-item').on({
      'touchstart': function () {
        $(this).children('.sub-menu').stop(false, true).fadeIn(300)
      }, function() {
        $(this).children('.sub-menu').stop(false, true).fadeOut(300)
      }
    });

    $(function () {
      $(".menu-item").has('ul').click(function () {
        return false;
      });
      $("a").dblclick(function () {
        window.location.href = $(this).attr('href');
      });
    });
    $(".menu-item").focusout(
      function () {

      }
    );
  }

  //Для открытия Вацап чата
  $(".whatsappButton").on("click", function () {
    window.open('https://wa.me/+77074218438', '_blank');
  });

  //Отправка на заполнение формы по нажатию на книпоку связаться со мной
  $(".connectMeBt").on("click", function () {
    window.open('#quetionForm');
  });


  //при изменение размера экрана сбрасывать открытое меню
  $(window).resize(function () {
    if ($(window).width() > 900) {
      $('.nav_container').removeClass('togleSideMenu');
    }
  });

  //Autogrow textarea
  var idNum = 0, data = 'elastic';
  $('body').on('keyup', 'textarea[data^="' + data + '"]', function () {
    if ($(this).attr('data') == '' + data + '') { $(this).attr({ style: 'overflow:hidden;' + $(this).attr('style') + '', data: '' + $(this).attr('data') + '' + idNum + '' }); idNum++; }
    tData = $(this).attr('data');
    if ($('div[data="' + tData.replace('' + data + '', 'clone') + '"]').size() == 0) {
      attr = 'style="display:none;padding:' + $(this).css('padding') + ';width:' + $(this).css('width') + ';min-height:' + $(this).css('height') + ';font-size:' + $(this).css('font-size') + ';line-height:' + $(this).css('line-height') + ';font-family:' + $(this).css('font-family') + ';white-space:' + $(this).css('white-space') + ';word-wrap:' + $(this).css('word-wrap') + ';letter-spacing:1px;" data="' + tData.replace('' + data + '', 'clone') + '"';
      clone = '<div ' + attr + '>' + $(this).val() + '</div>';
      $('body').prepend(clone);
      idNum++;
    } else {
      $('div[data="' + tData.replace('' + data + '', 'clone') + '"]').html($(this).val());
      $(this).css('height', '' + $('div[data="' + tData.replace('' + data + '', 'clone') + '"]').css('height') + '');
    }
  });






}) //End of Window Ready
