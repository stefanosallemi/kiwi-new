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