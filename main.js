// DOM - Document Object Model

const nav = document.querySelector('#header nav') //seleção de elementos
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
  //para cada elemento de (of)toggle, aplique o código a seguir:
  element.addEventListener('click', function () {
    //ao registrar o evento de click, executar a função abaixo:
    nav.classList.toggle('show')
    //realiza o desligamento ou acionamento da classe show na tag nav
    /*quando for acionado evento de click a função toggle adciona a classe show ao nav
    caso não haja, e se já houver, então a função toggle remove a classe show */
  })
}
//Fechar o menu
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
    /*quando for acionado evento de click a função remove remove a classe show do nav
    para fechar o menu */
  })
}
//adcionar sombra de rolamento
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}
/*Testimonials Slider-carrossel */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      // A partir de determinado tamanho(767) utiliza o breakpoint
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/*ScrollReveal mostrar elementos ao realizar o scroll da página */
const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollreveal.reveal(
  `#home, .text, #home .image,
#about .image, #about .text,
#services header, #services .cards,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links
footer .brand, footer .social`,

  { interval: 100 }
)

/*back-to-the-top */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Menu Ativo conforme Sessão visível na página*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  //pega o deslocamento no eixo vertical(|) da pagina

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
/* When scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
