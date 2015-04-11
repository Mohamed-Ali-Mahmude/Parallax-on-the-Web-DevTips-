window.addEventListener('scroll', function(){

  var wScroll = this.pageYOffset;

  document.querySelector('.logo').style.
    transform = 'translate(0px, '+ wScroll /2 +'%)'
  ;

  document.querySelector('.back-bird').style.
    transform = 'translate(0px, '+ wScroll /4 +'%)'
  ;

  document.querySelector('.fore-bird').style.
    transform = 'translate(0px, -'+ wScroll /40 +'%)'
  ;

  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });

  }

});
