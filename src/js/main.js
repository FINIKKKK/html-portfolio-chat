$('.search').click(function () {
  $('.search__message').toggleClass('active');
});

$('.users__item-avatar').click(function () {
  $('.sidebar__personal').toggleClass('active');
});
$('.add').click(function () {
  $('.search-users').toggleClass('active');
});
$('.settings__btn').click(function () {
  $('.settings--left').toggleClass('active');
  $('.settings--right').toggleClass('active');
});

$('.back').click(function () {
  $(this).parent().removeClass('active');
  $('.settings--right').removeClass('active');
});