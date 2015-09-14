$(function(){
  //VARIABLES
  var $btn = $( '.fab__label' );

  $btn.click( function (e) {
    var $parent = $(this).parent();
    var $input = $(this).prev();
    var target;

    $(document).click(function(e) {
      target = e.target;

      if (!$(target).is($btn) && $( $input ).prop('checked') === true  && !$(target).parents().is($parent)) {
        $input.prop('checked', '');
      }

    });
  });

}());
