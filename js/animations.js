var var1 = false
var var2 = false
var var3 = false
var var4 = false
var var5 = false

$(document).scroll(function() {
  if ($(window).scrollTop() > 450) {
    $('#info-picture').animate({'opacity':'1'}, 400);
  }

  if ($(window).scrollTop() > 1700){
    if (var1 == false) {
      var1 = true;

      $('#roadmap-line-1').animate({'height':'100%'}, 800);
      $('#roadmap-point-1').animate({'opacity':'1'}, 800);
    }
  }
  else {
    if (var1 == true) {
      var1 = false;

      $('#roadmap-line-1').animate({'height':'0%'}, 600);
      $('#roadmap-point-1').animate({'opacity':'0'}, 600);
      $('#roadmap-point-1').parent().css('box-shadow','none');
    }
  }

  if ($(window).scrollTop() > 2050){
    if (var2 == false) {
      var2 = true;

      $('#roadmap-line-2').animate({'height':'100%'}, 800);
      $('#roadmap-point-2').animate({'opacity':'1'}, 800);
    }
  }
  else {
    if (var2 == true) {
      var2 = false;

      $('#roadmap-line-2').animate({'height':'0%'}, 600);
      $('#roadmap-point-2').animate({'opacity':'0'}, 600);
      $('#roadmap-point-2').parent().css('box-shadow','none');
    }
  }

  if ($(window).scrollTop() > 2300){
    if (var3 == false) {
      var3 = true;

      $('#roadmap-line-3').animate({'height':'100%'}, 800);
      $('#roadmap-point-3').animate({'opacity':'1'}, 800);
    }
  }
  else {
    if (var3 == true) {
      var3 = false;

      $('#roadmap-line-3').animate({'height':'0%'}, 600);
      $('#roadmap-point-3').animate({'opacity':'0'}, 600);
      $('#roadmap-point-3').parent().css('box-shadow','none');
    }
  }

  if ($(window).scrollTop() > 2650){
    if (var4 == false) {
      var4 = true;

      $('#roadmap-line-4').animate({'height':'100%'}, 800);
      $('#roadmap-point-4').animate({'opacity':'1'}, 800);
    }
  }
  else {
    if (var4 == true) {
      var4 = false;

      $('#roadmap-line-4').animate({'height':'0%'}, 600);
      $('#roadmap-point-4').animate({'opacity':'0'}, 600);
      $('#roadmap-point-4').parent().css('box-shadow','none');
    }
  }

  if ($(window).scrollTop() > 2850){
    if (var5 == false) {
      var5 = true;

      $('#roadmap-line-5').animate({'height':'100%'}, 800);
      $('#roadmap-point-5').animate({'opacity':'1'}, 800);
      $('#roadmap-line-6').delay(600).animate({'height':'100%'}, 400);
    }
  }
  else {
    if (var5 == true) {
      var5 = false;

      $('#roadmap-line-6').animate({'height':'0%'}, 400);
      $('#roadmap-line-5').delay(400).animate({'height':'0%'}, 600);
      $('#roadmap-point-5').animate({'opacity':'0'}, 600);
      $('#roadmap-point-5').parent().css('box-shadow','none'); 
    }
  }
  
});