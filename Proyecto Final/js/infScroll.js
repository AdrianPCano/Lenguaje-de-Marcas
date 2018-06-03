var NOTICIA1;
var NOTICIA2;
var noticiasCarg=0;
var totalNoticias=0;
window.onload = function() {
  actualizeHour();
  $.getJSON( "./json/news1.json", function( jsonObject ) {
    totalNoticias++;
    //jsonObject equivale al fichero que lo contiene
    NOTICIA1 = jsonObject;
    console.log(NOTICIA1);
  });

  $.getJSON( "./json/news2.json", function( jsonObject ) {
    totalNoticias++;
  //jsonObject equivale al fichero que lo contiene
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

/*$(document).ready(function(){ 
  $('#loadJS').on('click',function(){
    //Cargamos el json 
    $('#loadJS').hide();
    if (noticiasCarg < totalNoticias) { 
      visualize(NOTICIA1);
      visualize(NOTICIA2);
    }
  });
});*/

// Visualizamos los ficheros json en la pagina
function visualize(jsonObject){
  $.each( jsonObject, function( i, news ) {
    $("#see").append( "<article class='col-xs-6 clearfix' style='margin-left: 19%; padding-bottom: 20px; margin-bottom: 20px; border-bottom: 1px solid red;' >"
                      + "<img src=" + news.imgmid + " class='img-rounded img-thumbnail pull-left' style='width: 40%; margin-right: 10px; ' alt='Tiger' />"                       
                      + "<h1>"
                      + news.titular  
                      + "</h1>"
                      + news.fecha 
                      + "<div class='text-justify'>" 
                      + "<p>"
                      + news.descripcion  
                      + "</p>"
                      + "</div>"
                      + "<a class='btn btn-primary'>"
                      + news.button    
                      + "</a>"
                      + "</article>");
    noticiasCarg++;
  }); 
}
  
function actualizeHour() {
  var date = new Date();

  var hours = date.getHours();

  var minutes = date.getMinutes();

  var seconds = date.getSeconds();

  var day = date.getDate();

  var month = date.getMonth();

  var year = date.getFullYear();


  var month = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


  document.getElementById("day").innerHTML = date.getDate();
  document.getElementById("month").innerHTML = [month[date.getMonth()]];
  document.getElementById("year").innerHTML = date.getFullYear();
  document.getElementById("hours").innerHTML = hours;

  if (hours >= 12){
    var ampm = 'PM';
  } else {
    var ampm = 'AM';
  }

  if (hours == 0){
    hours = 12;
  }


  document.getElementById("ampm").innerHTML = ampm;

  if (minutes < 10){
      minutes = "0" + minutes;
    }
    if (seconds < 10){
      seconds = "0" + seconds;
    }
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  setTimeout(actualizeHour, 1000);
}
 
  /* MEDIA QUERY TRY
  function mediaquery() {
    const win = matchMedia('(max-width: 768px)');
    const changeSize = mql => {
      mql.matches
        ? document.getElementsByTagName('article')[0].style = 'background-color: red'
        : document.getElementsByTagName('article')[0].style = 'background-color: yellow'
    }

    win.addListener(changeSize);
    changeSize(win);
  };*/


