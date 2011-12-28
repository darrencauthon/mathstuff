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
})( jQuery );
