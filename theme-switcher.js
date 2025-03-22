document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le bouton de changement de thème
    const themeToggle = document.getElementById('theme-toggle');
    
    // Vérifier si un thème est déjà enregistré dans le localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Ajouter un écouteur d'événement pour le changement de thème
    themeToggle.addEventListener('click', function() {
        // Basculer la classe light-theme sur l'élément racine
        document.documentElement.classList.toggle('light-theme');
        
        // Mettre à jour l'icône du bouton
        if (document.documentElement.classList.contains('light-theme')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });
});