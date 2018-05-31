var NOTICIA1;

window.onload = function() {

   $.getJSON( "./json/news1.json", function( jsonObject ) {
      //En este punto el objeto jsonObject corresponde al fichero
     
      NOTICIA1 = jsonObject;

    });

   $.getJSON( "./json/news2.json", function( jsonObject ) {
    //En este punto el objeto jsonObject corresponde al fichero
      visualize( jsonObject );
    });


};

$(window).on("click", function() {
  var scrollHeight = $(document).height();
  var scrollPosition = $(window).height() + $(window).scrollTop();
  if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
    visualize(NOTICIA1);
  }
});

// Pintamos los ficheros json en html 
function visualize(jsonObject){
  $.each( jsonObject, function( i, news ) {
    $("#see").append( "<h1 id='" + i + "'>" + news.titular+ "</h1>" + "<p>" + news.descripcion + "</p>"  );
  }); 
}