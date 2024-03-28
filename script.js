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
