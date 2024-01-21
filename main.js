/* window.addEventListener("load", () => {
    alert("Alô");
}); */


function menuHandler() {
    // Abertura do menu
    document.querySelector("#dropdown").addEventListener("click", function () {
        document.querySelector("header nav .dropdown-menu").classList.add("dropdown-open");
    });
    // Fechamento do menu
    document.querySelector("#close-nav-menu").addEventListener("click", function () {
        document.querySelector("header nav .dropdown-menu").classList.remove("dropdown-open");
    });

    
}


function scrollNavBar() {

    let prevScrollPos = window.scrollY;

    window.addEventListener('scroll', () => {
        // current scroll position
        const currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
            // user has scrolled up
            document.querySelector('header').classList.add('show');
            document.querySelector('header').classList.remove('hide');
            
            /* document.querySelector('.hero-section>img').classList.remove('image-up');
            document.querySelector('.hero-section>img').classList.add('image-banner'); */
        } else if (prevScrollPos > 50) {
            // user has scrolled down
            document.querySelector('header').classList.add('hide');
            
            /* document.querySelector('.hero-section>img').classList.add('image-up');
            document.querySelector('.hero-section>img').classList.remove('image-banner'); */
        } 
        
        if (prevScrollPos < 100){
            document.querySelector('header').style.backgroundColor = "transparent";
        } else if (prevScrollPos > 100){
            document.querySelector('header').style.backgroundColor = "var(--soft-pink)";
        }

        // update previous scroll position
        
        prevScrollPos = currentScrollPos;
    });

}




scrollNavBar();
menuHandler();
