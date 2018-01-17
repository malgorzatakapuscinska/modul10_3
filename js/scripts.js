$(function() {
  var gallery = $('.gallery');
  gallery.on('mouseover', 'img', function() {
    $(this).css('filter', 'grayscale(0%)');
    $(this).css('-webkit-filter', 'grayscale(0%)');
  });
  gallery.on('mouseout', 'img', function() {
    $(this).css('filter', 'grayscale(100%)');
    $(this).css('-webkit-filter', 'grayscale(100%)');
  });
});

$(function(){
	  $('p').hide();
	  $('button').click(function(){
	    $('p').slideToggle();
	  });
	});

$(function(){
	$('body').fadeIn();
	$("p").hide();
	$('button').click(function(){
	var paragraph = $('p'),
		isVisible = paragraph.is(':visible'); //zmienna bedzie zawierała wartość true jeśli element jest widoczny na stronie
		if(isVisible){
			paragraph.fadeOut("slow");
		}else{
			paragraph.fadeIn("slow");
		}
	});
});