/* =====================================================
   ENGEFULL
   JAVASCRIPT
===================================================== */


/* ================= HEADER ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ================= MENU MOBILE ================= */

const menuButton = document.getElementById("menuButton");
const menu = document.querySelector(".menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("active");

    });

}


const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* ================= REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= CONTADORES ================= */

const counters =
    document.querySelectorAll(".number-item strong");

const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    parseInt(counter.innerText);

                let current = 0;

                const duration = 800;

                const startTime =
                    performance.now();


                function updateCounter(currentTime) {

                    const progress =
                        Math.min(
                            (currentTime - startTime) / duration,
                            1
                        );

                    current =
                        Math.floor(progress * target);

                    counter.innerText =
                        String(current).padStart(2, "0");


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.innerText =
                            String(target).padStart(2, "0");

                    }

                }

                requestAnimationFrame(
                    updateCounter
                );

                counterObserver.unobserve(counter);

            });

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ================= ANO DO FOOTER ================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================= SCROLL SUAVE ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


/* ================= WHATSAPP ================= */

const whatsappButton =
    document.getElementById("whatsappButton");

const whatsappContainer =
    document.querySelector(
        ".whatsapp-container"
    );


if (whatsappButton && whatsappContainer) {

    whatsappButton.addEventListener(
        "click",
        () => {

            whatsappContainer.classList.toggle(
                "active"
            );

        }
    );


    document.addEventListener(
        "click",
        event => {

            if (
                !whatsappContainer.contains(
                    event.target
                )
            ) {

                whatsappContainer.classList.remove(
                    "active"
                );

            }

        }
    );

}