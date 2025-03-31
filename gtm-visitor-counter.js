/**
 * Configuration Google Tag Manager pour le compteur de visiteurs quotidien
 * Ce fichier permet d'intégrer le compteur de visiteurs uniques quotidien avec Google Tag Manager
 */

// Configuration pour le compteur de visiteurs via GTM
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser la communication avec GTM
    initGTMVisitorCounter();
});

/**
 * Initialise la communication avec Google Tag Manager pour le compteur de visiteurs
 */
function initGTMVisitorCounter() {
    // S'assurer que dataLayer existe
    window.dataLayer = window.dataLayer || [];
    
    // Envoyer un événement pour demander le nombre de visiteurs quotidien
    const currentDate = getCurrentDate();
    dataLayer.push({
        'event': 'get_visitor_stats',
        'gtmId': 'GTM-NTG73P3V',
        'visitDate': currentDate
    });
    
    // Configurer un écouteur d'événements pour recevoir les données de GTM
    setupGTMEventListener();
}

/**
 * Configure un écouteur d'événements pour recevoir les données de GTM
 */
function setupGTMEventListener() {
    window.addEventListener('message', function(event) {
        // Vérifier si l'événement contient des données de visiteurs quotidien
        if (event.data && event.data.event === 'visitor_count_data') {
            // Mettre à jour le compteur avec les données reçues
            updateVisitorCounterWithGTMData(event.data.visitorCount);
        }
    });
}

/**
 * Met à jour le compteur de visiteurs quotidien avec les données reçues de GTM
 */
function updateVisitorCounterWithGTMData(visitorCount) {
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        // Mettre à jour l'affichage du compteur
        counterElement.textContent = visitorCount;
    }
}

/**
 * Enregistre une nouvelle visite via GTM
 */
function recordVisitWithGTM() {
    // Vérifier si c'est une nouvelle session
    const hasVisitedThisSession = sessionStorage.getItem('gameCritique_hasVisited');
    
    if (!hasVisitedThisSession) {
        // Marquer cette session comme ayant visité
        sessionStorage.setItem('gameCritique_hasVisited', 'true');
        
        // Envoyer un événement à GTM pour enregistrer une nouvelle visite quotidienne
        if (window.dataLayer) {
            const currentDate = getCurrentDate();
            dataLayer.push({
                'event': 'new_visitor',
                'pageTitle': document.title,
                'pageUrl': window.location.href,
                'visitDate': currentDate,
                'uniqueVisitor': true // Indiquer qu'il s'agit d'un visiteur unique
            });
        }
    }
}

/**
 * Obtient la date actuelle au format YYYY-MM-DD
 */
function getCurrentDate() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// Exécuter l'enregistrement de visite
recordVisitWithGTM();