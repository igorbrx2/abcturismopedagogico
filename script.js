
// Owl Carousel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center: true,
    nav: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
        }
    }
})
});


// EVIDENCIAR AO CLICAR (DEPOIMENTOS, PACOTES ETC)

$('[data-group]').each(function(){
    var $allTarget = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';
  
        $allTarget.first().addClass(activeClass);
        $allClick.first().addClass(activeClass);
  
        $allClick.click(function(e){
          e.preventDefault();
  
          var id = $(this).data('click'),
              $target = $('[data-target="' + id + '"]');
  
        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);
  
        $target.addClass(activeClass);
        $(this).addClass(activeClass);

            
        });
  });

// BARRA DE PESQUISA

function search() {
  var input = document.getElementById("searchInput").value;
  input = input.toLowerCase();

  var x = document.getElementsByClassName("post-card");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

// MENU MOBILE

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('navegacao');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
