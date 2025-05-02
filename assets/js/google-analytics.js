/**
 * Google Analytics pour GameCritique
 * Ce script initialise Google Analytics via Google Tag Manager
 */

// Initialisation de Google Analytics via GTM
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser Google Analytics via GTM
    initializeGoogleAnalytics();
    
    // Envoyer un événement de page vue
    sendPageViewEvent();
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
 * Envoie un événement de page vue à GTM
 */
function sendPageViewEvent() {
    // S'assurer que dataLayer existe
    window.dataLayer = window.dataLayer || [];
    
    // Envoyer un événement de page vue à GTM
    dataLayer.push({
        'event': 'page_view',
        'pageTitle': document.title,
        'pageUrl': window.location.href
    });
}

/**
 * Configure les événements pour le compteur de visiteurs via Google Tag Manager
 * Cette version utilise Google Analytics pour stocker le compteur de manière centralisée
 */
function setupVisitorCounterEvents() {
    // Écouter les événements de dataLayer pour le compteur de visiteurs
    window.dataLayer = window.dataLayer || [];
    
    // Créer un gestionnaire d'événements pour les réponses de GTM
    window.addEventListener('message', function(event) {
        // Vérifier si l'événement contient des données de Google Analytics
        if (event.data && (event.data.event === 'get_visitor_count' || event.data.event === 'request_visitor_count_from_ga')) {
            // Envoyer une requête à Google Analytics pour récupérer le compteur global
            // via un événement personnalisé dans GTM
            dataLayer.push({
                'event': 'request_visitor_count_from_ga',
                'requestId': new Date().getTime()
            });
            
            console.log('[Analytics] Demande du compteur global envoyée à GA');
            
            // Simuler une réponse pour les tests (à remplacer par la vraie implémentation GTM)
            // Dans la vraie implémentation, GTM récupérera la valeur depuis GA et la renverra
            setTimeout(function() {
                // Envoyer la réponse (cette partie sera gérée par GTM dans la version finale)
                window.postMessage({
                    'event': 'visitor_count_response',
                    'visitorCount': '25' // Valeur de test, sera remplacée par la vraie valeur de GA
                }, '*');
            }, 500);
        }
        
        // Vérifier si l'événement est une nouvelle visite
        if (event.data && event.data.event === 'new_visitor') {
            // Envoyer un événement à Google Analytics pour incrémenter le compteur global
            dataLayer.push({
                'event': 'increment_visitor_count_in_ga',
                'pageTitle': document.title,
                'pageUrl': window.location.href
            });
            
            console.log('[Analytics] Événement d\'incrémentation envoyé à GA');
            
            // Demander la mise à jour du compteur après incrémentation
            setTimeout(function() {
                dataLayer.push({
                    'event': 'request_visitor_count_from_ga',
                    'requestId': new Date().getTime()
                });
            }, 1000);
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
 * Cette version utilise Google Analytics pour réinitialiser le compteur de manière centralisée
 */
function resetVisitorCounter() {
    // Supprimer le marqueur de session pour permettre un nouveau comptage
    sessionStorage.removeItem('gameCritique_hasVisited');
    
    // Envoyer l'événement de réinitialisation à GA via GTM
    if (window.dataLayer) {
        dataLayer.push({
            'event': 'reset_visitor_count_in_ga',
            'resetTime': new Date().toISOString()
        });
        console.log('[Analytics] Événement de réinitialisation envoyé à GA');
    }
    
    // Envoyer un événement à GTM pour réinitialiser le compteur dans Google Analytics
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'reset_visitor_count_in_ga',
            'resetTime': new Date().toISOString()
        });
    }
    
    // Afficher 0 comme compteur initial
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        counterElement.textContent = '0';
    }
    
    console.log('[Analytics] Demande de réinitialisation du compteur global envoyée à GA');
}