


const mobile = () => window.innerWidth < 996
const not_animation = () => window.innerWidth < 1200

$(document).ready(Main)

function Main() {
  $(window).on('resize', Resize_Handler)

  if (mobile())
    Set_Mobile_Menu()

  Set_Menu_Links()
  Resize_Handler()

  $('#btn_send').on('click', Send_Handler)
}



function Resize_Handler() {
  $(window).off('scroll')
    $(window).on('scroll', Scroll_Handler)
}

function Scroll_Handler() {
  Scroll_Header()
  Scroll_Header_Sub_fon()
  Scroll_Mail()
}

function Scroll_Header() {
  const SPEED = 0.50
  const initial_y = -0.2 * window.innerHeight
  const new_y = SPEED * window.scrollY + initial_y
  $('.header_fon img').css('top', new_y)
}


function Scroll_Header_Sub_fon() {
  const SPEED = 0.6
  const initial_y = 0
  const top_boundary = $('.sub_fon').offset().top
  const new_y = SPEED * (window.scrollY - top_boundary) + initial_y
  $('.sub_fon img').css('top', new_y)
}

function Scroll_Mail() {
  const SPEED = 0.6
  const initial_y = 0
  const top_boundary = $('.mail_fon').offset().top
  const new_y = SPEED * (window.scrollY - top_boundary) + initial_y
  $('.mail_fon img').css('top', new_y)
}


function Send_Handler() {
  $('.svg_send').css('display', 'inline-block')
  setTimeout(() => $('.svg_send').hide(), 3000)
}


function Set_Menu_Links() {
  $('.btn_home').on('click', () =>
    $('body').animate({
      scrollTop: '0'
    }))
  $('.btn_about').on('click', () =>
    $('body').animate({
      scrollTop: $('.about').offset().top 
    }))
  $('.btn_portfolio').on('click', () =>
    $('body').animate({
      scrollTop: $('.portfolio').offset().top 
    }))
  $('.btn_stores').on('click', () =>
    $('body').animate({
      scrollTop: $('.stores').offset().top 
    }))
  $('.btn_products').on('click', () =>
    $('body').animate({
      scrollTop: $('.products').offset().top 
    }))
}


function Set_Mobile_Menu() {
  $('.open_burger_menu').on('click', OpenMenu)
  $('.close_menu').on('click', CloseMenu)
  $('.menu_row__link').on('click', CloseMenuFast)
}

 function OpenMenu() {
  $('.menu').animate({'top': "0"}, 500);
}

 function CloseMenu() {
  $('.menu').animate({'top': "-100vh"}, 500);
}

 function CloseMenuFast() {
  $('.menu').animate({'top': "-100vh"}, 0);
}