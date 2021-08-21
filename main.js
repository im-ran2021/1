//start jquery
$(document).ready(function(){
    //scroll nav bar
    $(window).scroll(function(){
       if (this.scrollY > 20) {
          $('#navBar').addClass('sticky');
       } else {
          $('#navBar').removeClass('sticky');
       };
 
       //scrollup btn
       if (this.scrollY > 100) {
          $('.scrollUpBtn').fadeIn();
       } else {
          $('.scrollUpBtn').fadeOut();
       }
    });
    
    //click event scrollup btn
    $('.scrollUpBtn').click(function(){
       $('html,body').animate({
          scrollTop:0
       },1000);
       return false;
    });
 
    //mobile menu icon click
    $('.mobileMenuIcon').click(function(){
       $('.menu').toggleClass('showMenu');
       $('.mobileMenuIcon i').toggleClass('fa-times');
    })
 
 });//end jquery
 
 history if innerHeight blur confirm requestAnimationFrame Infinity export InputDeviceInfo  importScripts is 
 
 