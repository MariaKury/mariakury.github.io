// $(window).on('beforeunload', e => {
//   $('body').scrollTop(0)
//   e.preventDefault()
// })



$(document).ready(Main)

function Main() {
  $(window).on('resize', Resize_Handler)

  Resize_Handler() 

}



function Resize_Handler() {
  $(window).off('scroll')
  if (window.innerWidth >= 1200)
    $(window).on('scroll', Scroll_Handler)
}



function Scroll_Handler() {
  Handle_Scroll()
  Scroll_Mail()
}

function Handle_Scroll() {
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



