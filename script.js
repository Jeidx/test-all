  

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 800);
  }

  $(document).ready(function(){
      $('.slickSlider').slick({

      })
});




$(document).ready(function(){
    $('.view').click(function(event){
        $('.pop-up').toggleClass('active');  
        $('body').toggleClass('lock');   
    });
    $('.view2').click(function(event){
        $('.pop-up2').toggleClass('active');  
        $('body').toggleClass('lock');      
    });
    $('.view3').click(function(event){
        $('.pop-up3').toggleClass('active');  
        $('body').toggleClass('lock');       
    });
    $('.view4').click(function(event){
        $('.pop-up4').toggleClass('active');  
        $('body').toggleClass('lock');       
    });
    $('.view5').click(function(event){
        $('.pop-up5').toggleClass('active');  
        $('body').toggleClass('lock');       
    });
    $('.view6').click(function(event){
        $('.pop-up6').toggleClass('active');   
        $('body').toggleClass('lock');      
    });
    $('.view7').click(function(event){
        $('.pop-up7').toggleClass('active');  
        $('body').toggleClass('lock');       
    });
    $('.view8').click(function(event){
        $('.pop-up8').toggleClass('active');   
        $('body').toggleClass('lock');      
    });
    $('.view9').click(function(event){
        $('.pop-up9').toggleClass('active'); 
        $('body').toggleClass('lock');     
    });


    $('.d2-list__item').click(function(event){
        $('.d2-list__item__hidden').toggleClass('active');    
        $('.d2-list__item__hidden2').removeClass('active');            
        $('.d2-list__item__hidden3').removeClass('active');            
        $('.d2-list__item__hidden4').removeClass('active');            
        $('.d2-list__item__hidden5').removeClass('active');
               
    });

    // $('.d2-list__item').click(function(event){
    //     $('.open-close1').toggleClass('active')              
    //     .siblings().removeClass('.open-close1');
    // });
    // $('.d2-list__item2').click(function(event){
    //     $('.open-close2').toggleClass('active')              
    //     .siblings().removeClass('.open-close2');
    // });
    // $('.d2-list__item3').click(function(event){
    //     $('.open-close3').toggleClass('active')              
    //     .siblings().removeClass('.open-close3');
    // });
    // $('.d2-list__item4').click(function(event){
    //     $('.open-close4').toggleClass('active')              
    //     .siblings().removeClass('.open-close4');
    // });
    // $('.d2-list__item5').click(function(event){
    //     $('.open-close5').toggleClass('active')              
    //     .siblings().removeClass('.open-close5');
    // });
   
    $('.d2-list__item2').click(function(event){
        $('.d2-list__item__hidden2').toggleClass('active') ;
        $('.d2-list__item__hidden').removeClass('active');    
        $('.d2-list__item__hidden3').removeClass('active');                  
        $('.d2-list__item__hidden4').removeClass('active');               
        $('.d2-list__item__hidden5').removeClass('active');
                
    });
    $('.d2-list__item3').click(function(event){
        $('.d2-list__item__hidden3').toggleClass('active');
        $('.d2-list__item__hidden2').removeClass('active');            
        $('.d2-list__item__hidden').removeClass('active');            
        $('.d2-list__item__hidden4').removeClass('active');            
        $('.d2-list__item__hidden5').removeClass('active');              
    });
    $('.d2-list__item4').click(function(event){
        $('.d2-list__item__hidden4').toggleClass('active');
        $('.d2-list__item__hidden2').removeClass('active');            
        $('.d2-list__item__hidden3').removeClass('active');            
        $('.d2-list__item__hidden').removeClass('active');            
        $('.d2-list__item__hidden5').removeClass('active');              
    });
    $('.d2-list__item5').click(function(event){
        $('.d2-list__item__hidden5').toggleClass('active'); 
        $('.d2-list__item__hidden2').removeClass('active');            
        $('.d2-list__item__hidden3').removeClass('active');            
        $('.d2-list__item__hidden4').removeClass('active');            
        $('.d2-list__item__hidden').removeClass('active');             
    });
   

});
 


$(document).ready(function(){
    $('.close-pop-up').click(function(event){
        $('.pop-up.active').removeClass('active');     
        $('body').removeClass('lock');     
    });
    
    $('.close-pop-up2').click(function(event){
        $('.pop-up2.active').removeClass('active'); 
        $('.pop-up.active').removeClass('active'); 
        $('body').removeClass('lock');   
    });

    $('.close-pop-up3').click(function(event){
         $('.pop-up3.active').removeClass('active'); 
        $('.pop-up.active').removeClass('active');
        $('body').removeClass('lock');       
    });
    $('.close-pop-up4').click(function(event){
        $('.pop-up4.active').removeClass('active'); 
        $('.pop-up.active').removeClass('active');
        $('body').removeClass('lock');        
    });
    $('.close-pop-up5').click(function(event){
        $('.pop-up5.active').removeClass('active'); 
        $('.pop-up.active').removeClass('active');
        $('body').removeClass('lock');        
    });
    $('.close-pop-up6').click(function(event){
        $('.pop-up6.active').removeClass('active'); 
        $('.pop-up.active').removeClass('active');
        $('body').removeClass('lock');        
    });
    $('.close-pop-up7').click(function(event){
        $('.pop-up7.active').removeClass('active'); 
        $('.pop-up.active').removeClass('active');
        $('body').removeClass('lock');        
    });
    $('.close-pop-up8').click(function(event){
        $('.pop-up8.active').removeClass('active'); 
        $('.pop-up.active').removeClass('active');
        $('body').removeClass('lock');        
    });
    $('.close-pop-up9').click(function(event){
        $('.pop-up9.active').removeClass('active'); 
        $('.pop-up.active').removeClass('active');
        $('body').removeClass('lock');        
    });
});



$(document).ready(function(){
    $('#car-btn1').click(function(event){
        $('#card-car1').toggleClass('active');  
        $('#card-car2').removeClass('active');
        $('#card-car3').removeClass('active');
        $('#card-car4').removeClass('active');
    });
    $('#car-btn2').click(function(event){
        $('#card-car2').toggleClass('active');  
        $('#card-car1').removeClass('active');
        $('#card-car3').removeClass('active');
        $('#card-car4').removeClass('active');
    });
    $('#car-btn3').click(function(event){
        $('#card-car3').toggleClass('active');  
        $('#card-car1').removeClass('active');
        $('#card-car2').removeClass('active');
        $('#card-car4').removeClass('active');
    });
    $('#car-btn4').click(function(event){
        $('#card-car4').toggleClass('active');  
        $('#card-car1').removeClass('active');
        $('#card-car3').removeClass('active');
        $('#card-car2').removeClass('active');
    });
});
















