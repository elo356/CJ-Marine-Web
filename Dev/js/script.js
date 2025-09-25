var $grid = $('.collection-list').isotope({
  // options
});
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}

//hide and show navbar
var scroll1 = window.pageYOffset;
window.onscroll = function(){
  var scroll2 = window.pageYOffset;
  var nav = document.querySelector('nav');
  if(scroll1 > scroll2){
    nav.style.top = "0";
  }
  else{
    nav.style.top = "-140px"; // más que la altura real para ocultar por completo
  }
  scroll1 = scroll2;
}