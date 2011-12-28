(function( $ ) {
  $.fn.sum  = function() {  
    var return_value = 0;
    this.each(function() {
      if (this_is_a_valid_number($(this).val()))
        return_value += convert_to_a_float($(this).val());
    });
    return return_value;
  };

  $.fn.multiply = function(){
    var value = 1;
    the_set_includes_a_valid_number = false;
    this.each(function(){
      if (this_is_a_valid_number($(this).val()))
      {
        value *= convert_to_a_float($(this).val());
        the_set_includes_a_valid_number = true;
      }
    });
    return the_set_includes_a_valid_number ? value : 0;
  };

  $.formatAsDollars = function(value){
    if (isNaN(value)) return "0.00";
    if (value == 0) return "0.00";
    var valueAsFloat = parseFloat(value);
    valueAsFloat = Math.round(valueAsFloat * 100) / 100;
    return valueAsFloat.toFixed(2);
  };

  function this_is_a_valid_number(value){
    return isNaN(value) == false;
  }

  function convert_to_a_float(value){
    return parseFloat(value);
  }
  
})( jQuery );
