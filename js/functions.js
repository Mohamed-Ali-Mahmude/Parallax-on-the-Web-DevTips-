var pContainerHeight = document.querySelector('.bird-box').scrollHeight;

window.addEventListener('scroll', function(){

  var wScroll = this.pageYOffset;

  if (wScroll <= pContainerHeight) {

    document.querySelector('.logo').style.
      transform = 'translate(0px, '+ wScroll /2 +'%)';

    document.querySelector('.back-bird').style.
      transform = 'translate(0px, '+ wScroll /4 +'%)';

    document.querySelector('.fore-bird').style.
      transform = 'translate(0px, -'+ wScroll /40 +'%)';

  }


  // Landing Elements

  var figures = document.querySelectorAll('.clothes-pics figure');

  function showPic(i) {
    setTimeout(function(){
      figures[i].classList.add('is-showing');
    }, (700 * (Math.exp(i * 0.14)) - 700));
  }

  if(wScroll > document.querySelector('.clothes-pics').getBoundingClientRect().top + document.body.scrollTop - (window.innerHeight / 1.2)) {

    for(var i = 0; i < figures.length; i++) {
      showPic(i);
    }

  }


  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
});
