document.addEventListener("DOMContentLoaded", function () {
    // 1. Capture the exact ID elements we embedded in your HTML skeleton
    const menuToggleButton = document.getElementById("menu-toggle-trigger");
    const navigationMenuOverlay = document.getElementById("mobile-nav-overlay");
    const overlayLinksList = document.querySelectorAll(".nav-links a");

    // 2. Interactivity Verification Layer
    if (menuToggleButton && navigationMenuOverlay) {
        
        // Toggle full-screen menu overlay visibility on click
        menuToggleButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents click bleeding event loops
            navigationMenuOverlay.classList.toggle("mobile-menu-active");
            
            // Sync up active attributes for assistive screen readers
            const isOpen = navigationMenuOverlay.classList.contains("mobile-menu-active");
            menuToggleButton.setAttribute("aria-expanded", isOpen);
        });

        // Auto-closes the full screen mask overlay instantly once any menu link option is chosen
        overlayLinksList.forEach(function (individualLink) {
            individualLink.addEventListener("click", function () {
                navigationMenuOverlay.classList.remove("mobile-menu-active");
            });
        });

        // Optional: Close overlay if user clicks anywhere outside on the dark canvas mask backdrop
        document.addEventListener("click", function (event) {
            if (!navigationMenuOverlay.contains(event.target) && !menuToggleButton.contains(event.target)) {
                navigationMenuOverlay.classList.remove("mobile-menu-active");
            }
        });
    }
});
