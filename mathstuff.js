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

  $.formatAsDollars = function(value){
    if (isNaN(value)) return "0.00";
    if (value == 0) return "0.00";
    var valueAsFloat = parseFloat(value);
    valueAsFloat = Math.round(valueAsFloat * 100) / 100;
    return valueAsFloat.toFixed(2);
  };

})( jQuery );
