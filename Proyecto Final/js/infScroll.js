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
    $("#see").append( "<h1 id='" + i + "'>" + news.titular+ "</h1> " 
                      + "<p class='text-danger text-justify col-xs-6'>" + news.descripcion + "</p>" 
                      + "<p>" + news.fecha + "</p>" 
                      + "<img src=" + news.imgmid + " style='width: 120px;'</img>" );
    noticiasCarg++;
  }); 
}
