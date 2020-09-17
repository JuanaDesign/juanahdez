var openMenu = false;

$('document').ready(function () {

  $(".mobile-menu-icon").click(function () {
    if (openMenu === false) {
      $(".popup-menu").css("display","block");
      $(".mobile-menu-icon.close").css("display","block");
      $(".mobile-menu-icon.open").css("display","none");
      openMenu = true;
    } else {
      $(".popup-menu").css("display","none");
      $(".mobile-menu-icon.close").css("display","none");
      $(".mobile-menu-icon.open").css("display","block");
      openMenu = false;
    }
  });
});