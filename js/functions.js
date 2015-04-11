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

  var figures = document.querySelectorAll('.clothes-pics figure');

  function showPic(i) {
    setTimeout(function(){
      figures[i].classList.add('is-showing');
    }, 150 * (i+1));
  }

  if(wScroll > document.querySelector('.clothes-pics').getBoundingClientRect().top + document.body.scrollTop - (window.innerHeight / 1.2)) {
    for(var i = 0; i < figures.length; i++) {
      showPic(i);
    }
  }

});
