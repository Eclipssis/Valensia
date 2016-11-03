jQuery(function($){

  $('input[placeholder], textarea[placeholder]').placeholder();

  // PRICE SLIDER

  $('#price').change(function () {
    var val = $(this).val();
    $('#sliderPrice').slider("values",0,val);
  });
    
  $('#price2').change( function() {
    var val2 = $(this).val();
    $('#sliderPrice').slider("values",1,val2);
  });

  $( "#sliderPrice" ).slider({
    range: true,
    min: 0,
    step: 100,
    max: 10000,
    values: [ 1800, 8000 ],
    slide: function( event, ui ) {
      $('#price').val(ui.values[0]);
      $('#price2').val(ui.values[1]);
    }
  });

  $('#price').val($('#sliderPrice').slider("values",0));
  $('#price2').val($('#sliderPrice').slider("values",1));

  // OWL CAROUSEL

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      768:{
          items:3
      },
      1000:{
          items:4
      }
    }
  });

  // PLUS MINUS

  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $('.plus').click(function () {
     var $input = $(this).parent().find('input');
     $input.val(parseInt($input.val()) + 1);
     $input.change();
     return false;
   });

  // Grey theme - 
  $('.minus').click(function () {
    var $input = $('.grey-theme').find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $('.plus').click(function () {
     var $input = $('.grey-theme').find('input');
     $input.val(parseInt($input.val()) + 1);
     $input.change();
     return false;
   });

  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 165,
    itemMargin: 30,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });

});//end ready


//Plugin placeholder
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);