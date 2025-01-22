 window.addEventListener('resize', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (window.innerWidth >= 992) {
    //   navbarCollapse.classList.add('collapse');
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  });

    document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbarSupportedContent');
    const overlay = document.getElementById('dark-overlay');

    navbar.addEventListener('show.bs.collapse', function () {
        overlay.classList.remove('d-none');
    });

    navbar.addEventListener('hide.bs.collapse', function () {
        setTimeout(() => {
            overlay.style.opacity = "0";
            setTimeout(() => {
                overlay.classList.add('d-none');
            }, 300);
        }, 200);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    const services = {
      "Mobile Legends: Joki": "mlbbjoki.html",
      "Mobile Legends": "mlbbtupup.html", 
      "PUBG Mobile": "pubg.html",
      "Call of Duty Mobile": "codm.html",
      "Free Fire": "ff.html",
      "Honor of Kings: Joki": "hokjoki.html",
      "Honor of Kings": "hoktopup.html",
      "League of Legends Wild Rift": "lolwr.html",
      "Google Play": "googleplay.html",
      "Steam": "steam.html",
      "Garena": "garena.html",
      "Vidio": "vidio.html"
    };

    searchInput.addEventListener("input", (event) => {
      const query = event.target.value.toLowerCase();
      const filteredServices = Object.keys(services).filter((service) =>
        service.toLowerCase().includes(query)
      );

      searchResults.innerHTML = "";
      if (filteredServices.length > 0) {
        searchResults.classList.remove("d-none");
        filteredServices.forEach((service) => {
          const div = document.createElement("div");
          div.textContent = service;
          div.addEventListener("click", () => {
            window.location.href = services[service];
            searchInput.value = "";
            searchResults.classList.add("d-none");
          });
          searchResults.appendChild(div);
        });
      } else {
        searchResults.classList.add("d-none");
      }
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".search-bar")) {
        searchResults.classList.add("d-none");
      }
    });
  });

const allGamesPage = document.querySelectorAll('.all-games-page');
const topUpPage = document.querySelectorAll('.top-up-page');
const jokiPage = document.querySelectorAll('.joki-page');
const voucherPage = document.querySelectorAll('.voucher-page');

function allGames(){
    allGamesPage.forEach(element => {
        element.style.display = "block";
    });
    topUpPage.forEach(element => {
        element.style.display = "none";
    });
    jokiPage.forEach(element => {
        element.style.display = "none";
    });
    voucherPage.forEach(element => {
        element.style.display = "none";
    });
}
function topUp(){
    allGamesPage.forEach(element => {
        element.style.display = "none";
    });
    topUpPage.forEach(element => {
        element.style.display = "block";
    });
    jokiPage.forEach(element => {
        element.style.display = "none";
    });
    voucherPage.forEach(element => {
        element.style.display = "none";
    });
}
function joki(){
    allGamesPage.forEach(element => {
        element.style.display = "none";
    });
    topUpPage.forEach(element => {
        element.style.display = "none";
    });
    jokiPage.forEach(element => {
        element.style.display = "block";
    });
    voucherPage.forEach(element => {
        element.style.display = "none";
    });
}
function voucher(){
    allGamesPage.forEach(element => {
        element.style.display = "none";
    });
    topUpPage.forEach(element => {
        element.style.display = "none";
    });
    jokiPage.forEach(element => {
        element.style.display = "none";
    });
    voucherPage.forEach(element => {
        element.style.display = "block";
    });
}

