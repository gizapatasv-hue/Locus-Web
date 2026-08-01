/* =====================================================
   LOCUS
   main.js
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("header");
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll("#navbar a");

    /* ======================================
       HEADER SCROLL
    ====================================== */

    function updateHeader(){

        if(window.scrollY > 40){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /* ======================================
       SCROLL SUAVE
    ====================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function(e){

            const target = this.getAttribute("href");

            if(target.startsWith("#")){

                e.preventDefault();

                const section = document.querySelector(target);

                if(section){

                    section.scrollIntoView({

                        behavior:"smooth",
                        block:"start"

                    });

                }

            }

        });

    });

    /* ======================================
       CERRAR MENÚ AL PASAR A DESKTOP
    ====================================== */

    window.addEventListener("resize", () => {

        if(window.innerWidth > 992){

            navbar.classList.remove("active");
            menuToggle.classList.remove("active");

        }

    });

    /* ======================================
       MENÚ ACTIVO SEGÚN SECCIÓN
    ====================================== */

    const sections = document.querySelectorAll("section");

    function updateActiveMenu(){

        let current = "";

        sections.forEach(section => {

           const top = section.offsetTop - 120;
const bottom = top + section.offsetHeight;

if (window.scrollY >= top && window.scrollY < bottom) {
    current = section.id;
}

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    }

    updateActiveMenu();

    window.addEventListener("scroll", updateActiveMenu);

});