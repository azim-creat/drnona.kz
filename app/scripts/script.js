
$(document).ready(function () {
   
//     autoSlider();
//    // var left = 0;
//     var timer;


    // function autoSlider() {
    //     timer = setTimeout(function () {
    //         var polosa = document.getElementById('polosa');
    //         left = left - 399;
    //         if (left < -500) {
    //             left = 0;
    //             clearTimeout(timer);
    //         }
    //         polosa.style.left = left + 'px';
    //         autoSlider();
    //     }, 20500);
    // };

    
    var left = 0;
        $('#fors').click(function(){
            
            var polosa = document.getElementById('polosa');
            
            left = left - 399;
            if (left < -500) {
                left = 0;
               
            }
            polosa.style.left = left + 'px';
        });

        $('#back').click(function(){
           
            var polosa = document.getElementById('polosa');
            
            left = left + 399;
            if (left > -1) {
                left = 0;
            }
            polosa.style.left = left + 'px';
        });



   $('.newsItem').hover(
        function(){
            $(".newsImg", this).css({"bottom":"20px", "right": "20px"})
            $(".imgFrame", this).css({"bottom":"0px", "right": "0px"})
          },
          function(){
            $(".newsImg", this).css({"bottom":"0px", "right": "0px"})
            $(".imgFrame", this).css({"bottom":"20px", "right": "20px"})
          }
    );

    $('.footerNewItem').hover(
        function(){
            $(".footerNewItem_Img_frame", this).css({"width":"98%"})
           
          },
          function(){
            $(".footerNewItem_Img_frame", this).css({"width":"145px"})
          }
    );
    
    $('.quetionForm').hover(
        function(){
            $(".quetionForm_Img_frame", this).css({"width":"1100px"})
           
          },
          function(){
            $(".quetionForm_Img_frame", this).css({"width":"1100px"})
          }
    );

    $('.bussinesItem').hover(
        function(){
            $(".bussinesItem_Img_frame", this).css({"width":"1100px"})
           
          },
          function(){
            $(".bussinesItem_Img_frame", this).css({"width":"1100px"})
          }
    );





    $('.nav_item').hover(function(){   
    
      $(this).children('.nav_supItem').stop(false, true).fadeIn(300)
     },function(){
      $(this).children('.nav_supItem').stop(false, true).fadeOut(300)
    });  

     

    $(".whatsappButton").on("click",function(){
      window.open('https://wa.me/+77074218438','_blank');
  });
    $(".connectMeBt").on("click",function(){
      window.open('#quetionForm');
  });
    
    // $('.formInput').on('input', function () {
    //     $('.formInput').css({"background-color":"white", "font-size":"20px"});
    //     alert('www')
    // })
})

// var input = document.body;
// input.oninput = function () {
//     document.getElementsByClassName("formInput").style.backgroundColor ="#fff";
// };

