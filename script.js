const mobile = () => window.innerWidth < 769

$(document).ready(Main)

function Main() {
  $(window).on('resize', Resize_Handler)

  if (mobile())
    $('body').on('click', Body_Click_Handler)

  Resize_Handler()

  Set_Menu_Links()
}

function Resize_Handler() {
  $(window).off('scroll')
  if (mobile())
    $(window).on('scroll', Scroll_Handler)
}

function Scroll_Handler() {
  Scroll_Header()
  Scroll_Mail()
}

function Scroll_Header() {
  const SPEED = 0.50
  const initial_y = -0.2 * window.innerHeight
  const new_y = SPEED * window.scrollY + initial_y
  $('.header_fon img').css('top', new_y)
}

function Scroll_Mail() {
  const SPEED = 0.6
  const initial_y = 0
  const top_boundary = $('.mail').offset().top
  const new_y = SPEED * (window.scrollY - top_boundary) + initial_y
  $('.mail_fon img').css('top', new_y)
}

function Body_Click_Handler(e) {
  if ($('.menu').is(':visible')) 
    Close_Menu()
  else {
    const daddy = document.querySelector('.banner_burger')
    if ($.contains(daddy, e.target))
      Open_Menu()
  }
}

function Open_Menu() {
  $('.menu').show()
  $('.open_burger_menu').hide()
}

function Close_Menu() {
  $('.menu').hide()
  $('.open_burger_menu').show()
}