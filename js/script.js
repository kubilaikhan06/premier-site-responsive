 
//var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);

/*window.setInterval(function() {
    jaime.classList.toggle('blue')
  }, 1000
);*/

$(document).ready(function(){

  var jaime = document.querySelector('.jaime');
  var bool = true;
  //fonction pour alterner de façon aléatoire le couleur de fond du haut de page et des éléments sous les images
  window.setInterval(function(){
    randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
    $('#haut').css({
      'background-color' : randomColor,
    });
    $('.caption').css({
      'background-color' : randomColor,
    });
  }, 2000);
  // fonction pour descendre/scroller en bas de page jusqu'à la partie contact de la page
  $('#scroller1').click(function() {
    
      const images = $('#contact').position().top;
    
      $('html, body').animate(
        {
          scrollTop: images
        },
        1500
      );
  });

  // lancer le défilement avec clic sur bouton défiler
  $('#scroller2').click(defiler);
  $('#img1').click(defiler);
  // lancer ou arrêter le défilement avec appui touche clavier
  $('body').keypress(defilerArreter);
  // permet d'arrêter l'animation après qu'elle ait été lancée
  $('#scroller4').click(stop) ;
  //arrêt défilement et remontée haut de page par double-clic
  $('body').dblclick(stopRemonte);

  function defiler(){
    const image1 = $('#images').position().top;
    var image = document.querySelector('#img1');

    const image2 = "https://source.unsplash.com/9LX2k0pD5nE/1288x720/";
    const image3 = "https://source.unsplash.com/pikyGuAmwpM/1288x720/";
    const image4 = "https://source.unsplash.com/5Xwaj9gaR0g/1288x720/";
    const image5 = "https://source.unsplash.com/mwhklqGVzck/1288x720/";
    const image6 = "https://source.unsplash.com/EDfZ0Sjmp_w/1288x720/";
    var images = [image2, image3, image4, image5, image6];

    images.push("https://source.unsplash.com/Dksk8szLRN0/1288x720/");
    images.push("https://source.unsplash.com/CN6XuY7sz_4/1288x720/");

    /*$('html, body').animate(
      { scrollTop: image1},2000);

    for (i=0; i<images.length; i++)
    {
      image.src= images[i];
      $('#img1')
      .delay(1000)
      .fadeOut(3000)    
      .queue(function(){
        $(this).show(image.src).dequeue()                          
        })
      .fadeIn(2000);
    }*/
    $('html, body').animate(
      { scrollTop: image1},2000);

    for (const el of images)
    {
      $('#img1')
      .delay(1000)
      .fadeOut(3000)    
      .queue(function(){
        $(this).show(image.src = el).dequeue()                          
        })
      .fadeIn(2000);
    }
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
    $('#img1').stop(true);
    return bool = true;
  };

  function stopRemonte(){
    $('html, body').stop(true);
    const images = $('#haut').position().top;    
      $('html, body').animate(
        {
          scrollTop: images
        },
        500
      );
  };

});