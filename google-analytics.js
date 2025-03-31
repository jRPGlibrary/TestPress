/**
 * Google Analytics pour GameCritique
 * Ce script initialise Google Analytics via Google Tag Manager et suit les visites sur le site
 */

// Initialisation de Google Analytics via GTM
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser Google Analytics via GTM
    initializeGoogleAnalytics();
    
    // Configurer les événements pour le compteur de visiteurs
    setupVisitorCounterEvents();
});

/**
 * Initialise Google Analytics via Google Tag Manager
 */
function initializeGoogleAnalytics() {
    // Vérifier si Google Tag Manager est déjà chargé
    if (typeof dataLayer === 'undefined') {
        // Initialiser le dataLayer
        window.dataLayer = window.dataLayer || [];
        
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
 * Configure les événements pour le compteur de visiteurs via Google Tag Manager
 */
function setupVisitorCounterEvents() {
    // Écouter les événements de dataLayer pour le compteur de visiteurs
    window.dataLayer = window.dataLayer || [];
    
    // Créer un gestionnaire d'événements pour les réponses de GTM
    window.addEventListener('message', function(event) {
        // Vérifier si l'événement contient des données de Google Analytics
        if (event.data && event.data.event === 'get_visitor_count') {
            // Simuler une réponse avec un nombre de visiteurs (à remplacer par la vraie logique GTM)
            const storedCount = localStorage.getItem('gameCritique_globalVisits') || '0';
            const visitorCount = parseInt(storedCount) + Math.floor(Math.random() * 10); // Ajouter un nombre aléatoire pour simuler
            
            // Envoyer la réponse
            window.postMessage({
                'event': 'visitor_count_response',
                'visitorCount': visitorCount.toString()
            }, '*');
            
            // Mettre à jour le compteur de secours
            localStorage.setItem('gameCritique_globalVisits', visitorCount.toString());
        }
    });
    
    // Envoyer un événement de page vue à GTM
    dataLayer.push({
        'event': 'page_view',
        'pageTitle': document.title,
        'pageUrl': window.location.href
    });
}

/**
 * Réinitialise le compteur (fonction administrative)
 */
function resetVisitorCounter() {
    localStorage.removeItem('gameCritique_globalVisits');
    sessionStorage.removeItem('gameCritique_hasVisited');
    
    // Envoyer un événement à GTM pour réinitialiser le compteur
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'reset_visitor_count'
        });
    }
    
    // Afficher 0 comme compteur initial
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        counterElement.textContent = '0';
    }
}