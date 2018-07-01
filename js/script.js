
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
    /*var image= "image";
    var ref = "#img";
    for(var i =1; i<5; i++)
    {
      const image+i = $('ref+i').position().top;

    $('html, body').animate(
      {
        scrollTop: images+i
      },
      5000)
    }
    });*/

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
    
    
  /* var image = document.getElementById('blocImages');
    $('.blocImages').fadeOut(3000)
            .queue(function(){
            $(this).show(image.src = "https://source.unsplash.com/cWzGo1JNvZs/1288x720").dequeue()                          
            })
            .fadeIn(3000);*/
    
  
  // permet d'arrêter l'animation après celle qui a été lancée
  /*$('#scroller4').click(function(){
    $('a').stop(true);
  }) ;*/

});