document.addEventListener('DOMContentLoaded', function() {
    // Créer le bouton de changement de thème s'il n'existe pas déjà
    if (!document.querySelector('.theme-toggle')) {
        const navbar = document.querySelector('.nav-links');
        if (navbar) {
            // Créer un nouvel élément li pour le bouton de thème
            const themeToggleLi = document.createElement('li');
            
            // Créer le bouton de changement de thème
            const themeToggle = document.createElement('button');
            themeToggle.className = 'theme-toggle';
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.setAttribute('aria-label', 'Changer de thème');
            themeToggle.setAttribute('title', 'Changer de thème');
            
            // Ajouter des styles au bouton
            themeToggle.style.background = 'none';
            themeToggle.style.border = 'none';
            themeToggle.style.color = 'var(--text-color)';
            themeToggle.style.fontSize = '1.2rem';
            themeToggle.style.cursor = 'pointer';
            themeToggle.style.padding = '0.5rem';
            themeToggle.style.display = 'flex';
            themeToggle.style.alignItems = 'center';
            themeToggle.style.justifyContent = 'center';
            
            // Ajouter le bouton au li, puis le li à la navbar
            themeToggleLi.appendChild(themeToggle);
            navbar.appendChild(themeToggleLi);
            
            // Vérifier si un thème est déjà enregistré dans localStorage
            const currentTheme = localStorage.getItem('theme');
            if (currentTheme === 'light') {
                document.documentElement.setAttribute('data-theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                applyLightTheme();
            }
            
            // Ajouter l'écouteur d'événement pour le changement de thème
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                
                if (currentTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                    applyDarkTheme();
                } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                    applyLightTheme();
                }
            });
        }
    }
    
    // Appliquer le thème enregistré au chargement de la page
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        applyLightTheme();
        // Mettre à jour l'icône si le bouton existe déjà
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    } else {
        applyDarkTheme();
    }
});

// Fonction pour appliquer le thème clair
function applyLightTheme() {
    document.documentElement.style.setProperty('--primary-color', '#6b46c1');
    document.documentElement.style.setProperty('--secondary-color', '#4a5568');
    document.documentElement.style.setProperty('--accent-color', '#f6ad55');
    document.documentElement.style.setProperty('--bg-color', '#f7fafc');
    document.documentElement.style.setProperty('--text-color', '#2d3748');
    document.documentElement.style.setProperty('--card-bg', '#ffffff');
}

// Fonction pour appliquer le thème sombre
function applyDarkTheme() {
    document.documentElement.style.setProperty('--primary-color', '#6b46c1');
    document.documentElement.style.setProperty('--secondary-color', '#4a5568');
    document.documentElement.style.setProperty('--accent-color', '#f6ad55');
    document.documentElement.style.setProperty('--bg-color', '#1a202c');
    document.documentElement.style.setProperty('--text-color', '#e2e8f0');
    document.documentElement.style.setProperty('--card-bg', '#2d3748');
}