(function( $ ) {
  $.fn.sum  = function() {  
    if (this.length == 0) return 0;
    var value = 0;
    this.each(function() {
      if (isNaN($(this).val()) == false)
        value = value + parseFloat($(this).val());
    });
    return value;
  };

  $.fn.multiply = function(){
    if (this.length == 0) return 0;
    var value = 1;
    value_hit = false;
    this.each(function(){
      if (isNaN($(this).val()) == false)
      {
        value = value * $(this).val();
        value_hit = true;
      }
    });
    return value_hit ? value : 0;
  };
})( jQuery );
