$(document).ready(function(){
    
//    When user scroll into features section trigger the function
    $('.js--features--section').waypoint(function(direction){
       if (direction == 'down') {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    }, { offset: '60px' });
});