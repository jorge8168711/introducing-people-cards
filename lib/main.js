$(function(){
  var $btn = $('.card__btn.ico');

  $btn.click( function (e) {
    var $parent = $(this).parent();

    if ( $parent.attr( 'class' ) === 'card'  && $parent.attr( 'data-active' ) === 'inactive') {
      $parent.attr('data-active', 'active');

    } else if ($parent.attr( 'class' ) === 'card card--small'  && $parent.attr( 'data-active' ) === 'inactive') {
      $parent.attr('data-active', 'active');

    } else {
        $parent.attr('data-active', 'inactive');
    }
  });

  $(document).click(function(e) {
    var $card = $('.card[data-active="active"]');
    var $target = e.target.className;

    if ($target !== 'card__btn ico' && $card.attr('data-active') === 'active') {
      $card.attr('data-active', 'inactive');
    }
  });

});
