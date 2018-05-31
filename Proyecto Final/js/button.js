//-------------------------------------//
// hack CodePen to load pens as pages

var nextPenSlugs = [
  '3d9a3b8092ebcf9bc4a72672b81df1ac',
  '2cde50c59ea73c47aec5bd26343ce287',
  'd83110c5f71ea23ba5800b6b1a4a95c4',
];

function getPenPath() {
  var slug = nextPenSlugs[ this.loadCount ];
  if ( slug ) {
    return 'https://s.codepen.io/desandro/debug/' + slug;
  }
}

//-------------------------------------//
// init Infinite Scroll

var $container = $('.container').infiniteScroll({
  path: getPenPath,
  append: '.post',
  // disable loading on scroll
  loadOnScroll: false,
  status: '.page-load-status',
});

// load next page & enable loading on scroll on button click

var $viewMoreButton = $('.view-more-button');
$viewMoreButton.on( 'click', function() {
  // load next page
  $container.infiniteScroll('loadNextPage');
  // enable loading on scroll
  $container.infiniteScroll( 'option', {
    loadOnScroll: true,
  });
  // hide button
  $viewMoreButton.hide();
});
