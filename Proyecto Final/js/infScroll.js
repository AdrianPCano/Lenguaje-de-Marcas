var NOTICIA1;
var NOTICIA2;

window.onload = function() {

   $.getJSON( "./json/news1.json", function( jsonObject ) {
      //En este punto el objeto jsonObject corresponde al fichero
     
      NOTICIA1 = jsonObject;
      console.log(NOTICIA1);
    });

   $.getJSON( "./json/news2.json", function( jsonObject ) {
    //En este punto el objeto jsonObject corresponde al fichero
      NOTICIA2 = jsonObject;
      console.log(NOTICIA2);
    });


};

$(window).on("scroll", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    visualize(NOTICIA1);
    visualize(NOTICIA2);
  }
});

// Visualizamos los ficheros json en la pagina
function visualize(jsonObject){
  $.each( jsonObject, function( i, news ) {
    $("#see").append( "<h1 id='" + i + "'>" + news.titular+ "</h1>" + "<p>" + news.descripcion + "</p>" + "<p>" + news.descripcion + "</p>"  );
  }); 
}