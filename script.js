Prepare_Popup()

const mobile = () => window.innerWidth < 769

$(document).ready(Main)

function Main() {
  $(window).on('resize', Resize_Handler)

  Set_Menu_Links()

  if (mobile())
    $('body').on('click', Body_Click_Handler)

  Resize_Handler()

  $('.button_sale').on('click', Display_Popup)

  $('.popup').on('click', Close_Popup)
}

function Prepare_Popup() {
  $('.popup_content').slideUp(0)
}

function Display_Popup() {
  $('.popup').show()
  $('.popup_content').slideDown(400)
}

function Close_Popup() {
  $('.popup_content').slideUp(300, () => $('.popup').hide())
}

function Resize_Handler() {
  $(window).off('scroll')
  if (!mobile())
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

const banner_h = () => $('#banner').get(0).offsetHeight

function Set_Menu_Links() {
  $('#btn_home').on('click', () =>
    $('body').animate({
      scrollTop: '0'
    }))
  $('#btn_about').on('click', () =>
    $('body').animate({
      scrollTop: $('.about').offset().top - banner_h()
    }))
  $('#btn_products').on('click', () =>
    $('body').animate({
      scrollTop: $('.products').offset().top - banner_h()
    }))
  $('#btn_stores').on('click', () =>
    $('body').animate({
      scrollTop: $('.stores').offset().top - banner_h()
    }))
  $('#btn_sales').on('click', () =>
    $('body').animate({
      scrollTop: $('.sales').offset().top - banner_h()
    }))
}