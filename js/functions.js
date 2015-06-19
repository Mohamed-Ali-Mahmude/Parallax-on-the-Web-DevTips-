var pContainerHeight = document.querySelector('.bird-box').offsetHeight;

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

  if(wScroll > document.querySelector('.clothes-pics').scrollHeight + document.body.scrollTop - (window.innerHeight / 1.2)) {

    for(var i = 0; i < figures.length; i++) {
      showPic(i);
    }

  }


  // Promoscope
  var largeWindow = document.querySelector('.large-window');
  var windowOffsetTop = largeWindow.getBoundingClientRect().top;

  if(wScroll > windowOffsetTop + wScroll - window.innerHeight) {

    largeWindow.style.backgroundPosition = 'center '+ (-windowOffsetTop) +'px';

    var opacity = (-windowOffsetTop + 400) / (wScroll / 5);

    document.querySelector('.window-tint').style.opacity = opacity;

  }


  // Floating Elements

  var blogPosts = document.querySelector('.blog-posts');
  var blogOffsetTop = blogPosts.getBoundingClientRect().top;

  if(wScroll > blogOffsetTop + wScroll - window.innerHeight) {

    var offset = (Math.min(0, Math.abs(blogOffsetTop - window.innerHeight) - 350)).toFixed();

    document.querySelector('.post-1').style.transform = 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)';

    document.querySelector('.post-3').style.transform = 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)';

  }
});
