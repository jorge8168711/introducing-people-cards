$(function(){
  var $btn = $('.card__btn.ico');

  //activa los elementos que activa en hover pero con clic
  $btn.click( function (e) {
    e.preventDefault();

    $(this).attr('data-icon', 'true');

    var $parent = $(this).parent();
    var $social = $(this).siblings('.social');

    if ( $parent.attr( 'class' ) === 'card' && $social.attr( 'class' ) === 'social') {
      $parent.addClass('card--active').attr('data-active', 'active');
      $social.addClass('social--active').attr('data-active', 'active');
      $social.children('.social__link').addClass('social__link--active').attr('data-active', 'active');

    } else {
      $parent.removeClass('card--active').attr('data-active', 'inactive');
      $social.removeClass('social--active').attr('data-active', 'inactive');
      $social.children('.social__link').removeClass('social__link--active').attr('data-active', 'inactive');
      $(this).attr('data-icon', 'false');
    }
  });

  $(document).click(function(e) {
    var target = e.target.className;
    var $parent = $(this).parent();
    var $card = $('.card.card--active').data('active', 'active');
    var $social = $('.social.social--active').data('active', 'active');
    var $link = $('.social__link.social__link--active').data('active', 'active');

      if (target !== 'card__btn ico' && $parent.prop('class') !== '.card.card--active') {
        $card.removeClass('card--active').attr('data-active', 'inactive');
        $social.removeClass('social--active').attr('data-active', 'inactive');
        $link.removeClass('social__link--active').attr('data-active', 'inactive');
        $btn.attr('data-icon', 'false');
      } else {
        return(false);
      }
  });

});
