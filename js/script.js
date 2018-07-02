
//var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

/*window.setInterval(function() {
    jaime.classList.toggle('blue')
  }, 1000
);*/

$(document).ready(function(){

  var jaime = document.querySelector('.jaime');
  var bool = true;

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
  
  $('#scroller2').click(defiler);
  $('body').keypress(defilerArreter);
  // permet d'arrêter l'animation après qu'elle ait été lancée
  $('#scroller4').click(stop) ;

  function defiler() {
    
    const image1 = $('#img1').position().top;
    const image2 = $('#img2').position().top;
    const image3 = $('#img3').position().top;
    const image4 = $('#img4').position().top;
    const image5 = $('#img5').position().top;
    
    $('html, body').animate(
      {
        scrollTop: image1
      },
      3000
    )    

    .delay(2000)
    .animate(
      {
        scrollTop: image2
      },
      3000
    )

    .delay(2000)
    .animate(
      {
        scrollTop: image3
      },
      3000
    )
    
    .delay(2000)
    .animate(
      {
        scrollTop: image4
      },
      3000
    )

    .delay(2000)
    .animate(
      {
        scrollTop: image5
      },
      3000
    ); 
    return bool = false;
  };
          
  function defilerArreter(){
    if(bool==true)
    {
      defiler();
      return bool = false;
    }
    else
    {
      stop();
      return bool = true;
    }
  }  

  function stop(){
    $('html, body').stop(true);
  }  

});