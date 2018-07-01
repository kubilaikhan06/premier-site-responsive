
//var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

/*window.setInterval(function() {
    jaime.classList.toggle('blue')
  }, 1000
);*/

$(document).ready(function(){

  var jaime = document.querySelector('.jaime');

  window.setInterval(function(){

    randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    $('#haut').css({
      'background-color' : randomColor,
    });
    $('.caption').css({
      'background-color' : randomColor,
    });
  }, 2000);

  $('#scroller1').click(function() {
    
      const images = $('#contact').position().top;
    
      $('html, body').animate(
        {
          scrollTop: images
        },
        1500
      );
  });
  
  $('#scroller2').click(function() {
    
    const image1 = $('#img1').position().top;
    const image2 = $('#img2').position().top;
    const image3 = $('#img3').position().top;
    const image4 = $('#img4').position().top;
    
    $('html, body').animate(
      {
        scrollTop: image1
      },
      5000
    )    
  
    .animate(
      {
        scrollTop: image2
      },
      5000
    )
    
    .animate(
      {
        scrollTop: image3
      },
      5000
    )
    
    .animate(
      {
        scrollTop: image4
      },
      5000
    ); 
  });
          
  // permet d'arrêter l'animation après qu'elle ait été lancée
  $('#scroller4').click(function(){
    $('html, body').stop(true);
  }) ;

});