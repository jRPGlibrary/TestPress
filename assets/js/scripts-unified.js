/**
 * Scripts unifiés pour GameCritique
 * Ce fichier regroupe les fonctionnalités principales du site en un seul fichier
 * Fusion de: theme-switcher.js, google-analytics.js, google-tag-manager.js
 */

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le changeur de thème
    initThemeSwitcher();
    
    // Initialiser Google Tag Manager
    initGoogleTagManager();
    
    // Initialiser Google Analytics
    initGoogleAnalytics();
});

/**
 * Initialise le changeur de thème
 */
function initThemeSwitcher() {
    // Ajouter une transition CSS pour éviter le clignotement lors du changement de thème
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
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
            themeToggle.style.transition = 'color 0.3s ease';
            
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
}

/**
 * Applique le thème sombre
 */
function applyDarkTheme() {
    document.documentElement.style.setProperty('--bg-color', '#1a202c');
    document.documentElement.style.setProperty('--text-color', '#e2e8f0');
    document.documentElement.style.setProperty('--card-bg', '#2d3748');
}

/**
 * Applique le thème clair
 */
function applyLightTheme() {
    document.documentElement.style.setProperty('--bg-color', '#f7fafc');
    document.documentElement.style.setProperty('--text-color', '#1a202c');
    document.documentElement.style.setProperty('--card-bg', '#fff');
}

/**
 * Initialise Google Tag Manager
 */
function initGoogleTagManager() {
    // Vérifier si Google Tag Manager est déjà chargé
    if (!window.dataLayer) {
        window.dataLayer = [];
        
        // Charger Google Tag Manager si ce n'est pas déjà fait
        if (!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) {
            const gtmScript = document.createElement('script');
            gtmScript.async = true;
            gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-NTG73P3V';
            document.head.appendChild(gtmScript);
            
            // Initialiser GTM
            dataLayer.push({
                'gtm.start': new Date().getTime(),
                'event': 'gtm.js'
            });
        }
    }
}

/**
 * Initialise Google Analytics via Google Tag Manager
 */
function initGoogleAnalytics() {
    
    setupVisitorCounterEvents();
}

/**
 
 */
function setupVisitorCounterEvents() {
    // Vérifier si dataLayer existe
    if (window.dataLayer) {
        // Envoyer un événement de vue de page
        dataLayer.push({
            'event': 'pageview',
            'pageTitle': document.title,
            'pageUrl': window.location.href
        });
        
        // Enregistrer les clics sur les liens
        document.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function(e) {
                const linkUrl = this.href;
                const linkText = this.textContent.trim();
                
                dataLayer.push({
                    'event': 'link_click',
                    'linkUrl': linkUrl,
                    'linkText': linkText
                });
            });
        });
    }
}