if (window.matchMedia("(min-width: 768px)").matches) {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById("mouse-circle");

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    };

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + "px";
        mouseCircle.style.left = revisedMousePosX + "px";
    }
    delayMouseFollow();
}

// Verifica se l'utente ha già effettuato una scelta e nasconde il div se necessario
function checkUserChoice() {
    const userChoice = localStorage.getItem('pwaChoice');
    if (userChoice === 'dismissed') {
        // L'utente ha scelto di ignorare la notifica, nascondi il div
        document.getElementById('notification-div').style.display = 'none';
    } else {
        document.getElementById('notification-div').style.display = 'visible';
    }
}
// Funzione per mostrare il div dopo 3 secondi
function showNotificationDiv() {
    setTimeout(() => {
        const userChoice = localStorage.getItem('pwaChoice');
        const isPWAInstalled = window.matchMedia('(display-mode: standalone)').matches;

        if (!userChoice && !isPWAInstalled) {
            const notificationDiv = document.getElementById('notification-div');
            notificationDiv.style.display = 'block';
            notificationDiv.style.bottom = '2rem'; // Imposta 'bottom' a 2rem
        }
    }, 20000);
}

// Funzione chiamata quando l'utente fa clic su "Chiudi"
function dismissNotification() {
    localStorage.setItem('pwaChoice', 'dismissed');
    document.getElementById('notification-div').style.display = 'none';
}

// Imposta un gestore di eventi per il bottone "Chiudi"
document.getElementById('close-button').addEventListener('click', dismissNotification);

// Chiama le funzioni all'avvio della pagina per gestire la notifica
checkUserChoice();
showNotificationDiv();


function slider1() {

    let splides = $('.slider1');
    for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
        new Splide(splides[i], {
            // Desktop on down
            perPage: 4,
            perMove: 1,
            focus: 'left', // 0 = left and 'center' = center
            type: 'slide', // 'loop' or 'slide'
            gap: '0rem', // space between slides
            arrows: 'slider', // 'slider' or false
            pagination: 'slider', // 'slider' or false
            speed: 800, // transition speed in miliseconds
            dragAngleThreshold: 80, // default is 30
            autoWidth: false, // for cards with differing widths
            rewind: false, // go back to beginning when reach end
            rewindSpeed: 800,
            waitForTransition: false,
            updateOnMove: true,
            trimSpace: true, // true removes empty space from end of list
            breakpoints: {
                1680: {
                    // Tablet
                    perPage: 4,
                    gap: '0rem',
                },
                991: {
                    // Tablet
                    perPage: 2,
                    gap: '0rem',
                },
                767: {
                    // Mobile Landscape
                    perPage: 2,
                    gap: '0rem',
                },
                479: {
                    // Mobile Portrait
                    perPage: 1.5,
                    gap: '0rem',
                }
            }
        }).mount();
    }

}
slider1();



if (window.matchMedia("(min-width: 768px)").matches) {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById("mouse-circle");

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    };

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = revisedMousePosY + "px";
        mouseCircle.style.left = revisedMousePosX + "px";
    }
    delayMouseFollow();
}


// Funzione per mostrare il popup
function mostraPopup() {
    var popupForms = document.getElementsByClassName("pop-up-form");
    if (popupForms.length > 0) {
        popupForms[0].style.display = "flex";
    }
}

// Funzione per chiudere il popup
function chiudiPopup() {
    var popupForms = document.getElementsByClassName("pop-up-form");
    if (popupForms.length > 0) {
        var popup = popupForms[0];
        popup.setAttribute("style", "/* display: flex; */");
    }
}

// Aggiungi un evento al click del bottone per mostrare il popup
document.getElementById("team-popup").addEventListener("click", mostraPopup);


window.onload = function () {

    var pageTitle = document.title;
    var attentionMessage = 'Torna qui!😭';

    document.addEventListener('visibilitychange', function (e) {
        var isPageActive = !document.hidden;

        if (!isPageActive) {
            document.title = attentionMessage;
        } else {
            document.title = pageTitle;
        }
    });
};


// Funzione per caricare e inserire la navbar
function includeNavbar() {
    // Crea una nuova richiesta HTTP
    var xhr = new XMLHttpRequest();

    // Specifica il metodo HTTP e l'URL del file navbar.html
    xhr.open("GET", "/sections/navbar.html", true);

    // Gestisci l'evento di caricamento della risorsa
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Se la richiesta è stata completata con successo, inserisci il contenuto nel tuo elemento div
            document.getElementById("navbar-container").innerHTML = xhr.responseText;
        }
    };

    // Invia la richiesta
    xhr.send();
}

// Chiama la funzione per includere la navbar quando la pagina è pronta
document.addEventListener("DOMContentLoaded", includeNavbar);


function nascondiPopup() {
    var popup = document.getElementById('cos-e-popup');
    popup.style.opacity = '0';
    setTimeout(function() {
      popup.style.display = 'none';
    }, 2000);
  }

  function mostraPopup() {
    var popup = document.getElementById('cos-e-popup');
    popup.style.display = 'block';
    setTimeout(function() {
      popup.style.opacity = '1';
    }, 0);
  }