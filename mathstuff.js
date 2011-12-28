(function( $ ) {
  $.fn.sum  = function() {  
    if (this.length == 0) return 0;
    var value = this.val();
    return isNaN(value) ? 0 : value;
  };
})( jQuery );
