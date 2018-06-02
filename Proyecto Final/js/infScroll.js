var NOTICIA1;
var NOTICIA2;
var noticiasCarg=0;
var totalNoticias=0;
window.onload = function() {

  $.getJSON( "./json/news1.json", function( jsonObject ) {
    totalNoticias++;
    //En este punto el objeto jsonObject corresponde al fichero
    NOTICIA1 = jsonObject;
    console.log(NOTICIA1);
  });

  $.getJSON( "./json/news2.json", function( jsonObject ) {
    totalNoticias++;
  //En este punto el objeto jsonObject corresponde al fichero
    NOTICIA2 = jsonObject;
    console.log(NOTICIA2);
  });
};

$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    if (noticiasCarg < totalNoticias) { 
      visualize(NOTICIA1);
      visualize(NOTICIA2);
    }
  } 
});


// Visualizamos los ficheros json en la pagina
function visualize(jsonObject){
  $.each( jsonObject, function( i, news ) {
    $("#see").append( "<article class='col-xs-5 clearfix' style='margin-left: 365px; padding-bottom: 20px; margin-bottom: 20px; border-bottom: 1px solid red;' >"
                      + "<h1>"
                      + news.titular  
                      + "</h1>"
                      + "<div class='fecha'>"  
                      + news.fecha 
                      + "<img src=" + news.imgmid + " class='img-rounded img-thumbnail pull-left' style='width: 45%; margin-right: 10px; ' alt='Tiger' />"                       
                      + "</div>"  
                      + "<div class='text-justify'>" 
                      + "<p>"
                      + news.descripcion  
                      + "</p>"
                      + "</div>"    
                      + "</article>");
    noticiasCarg++;
    function mediaSize() { 
      if (window.matchMedia('(max-width: 768px)').matches) {
      /* Changes when we reach the max-width  */
        $('article').css('background', 'red');

      } else {
      /* Reset for CSS changes – Still need a better way to do this! */
        $('body, strong').removeAttr('style');
      };
      mediaSize();
      /* Attach the function to the resize event listener */
      window.addEventListener('resize', mediaSize, false);  
  

    /*const imgMedQy = matchMedia('(max-width: 768px)');
    const ChangeSize = mql => {
      mql.matches
        ? document.getElementById('article') = 'width: 100%'
        : document.body.style.background = 'yellow'
    }

    imgMedQy.addListener(ChangeSize)*/
  }); 
}
