document.addEventListener('DOMContentLoaded', function() {
    // Création du bouton hamburger pour le menu mobile
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Créer le bouton hamburger
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.classList.add('hamburger-menu');
    hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
    hamburgerBtn.setAttribute('aria-label', 'Menu');
    
    // Insérer le bouton hamburger avant les liens de navigation
    navbar.insertBefore(hamburgerBtn, navLinks);
    
    // Ajouter la classe mobile-nav-links pour le style mobile
    navLinks.classList.add('mobile-nav-links');
    
    // Gérer le clic sur le bouton hamburger
    hamburgerBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        
        // Changer l'icône du bouton hamburger
        if (navLinks.classList.contains('show')) {
            hamburgerBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Fermer le menu lorsqu'on clique sur un lien
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('show');
                hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Ajuster le menu lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});