


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

class MobileNavbar {

  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link) => {
      link.style.animation
      ? (link.style.animation = "")
      : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.animateLinks();
  }


addClickEvent() {
  this.mobileMenu.addEventListener("click", this.handleClick);

}


init() {
  if(this.mobileMenu) {
    this.addClickEvent();
  }
  return this;
}
}

const mobileNavbar = new MobileNavbar(
  ".btn-mobile",
  "#menu",
  "#menu li",
);
mobileNavbar.init();
