/**
 * Configuration Google Tag Manager pour le compteur de visiteurs quotidien
 * Ce fichier permet d'intégrer le compteur de visiteurs uniques quotidien avec Google Tag Manager
 */

// Configuration pour le compteur de visiteurs via GTM
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser la communication avec GTM
    initGTMVisitorCounter();
    
    // Définir un délai de secours pour mettre à jour le compteur si aucune réponse n'est reçue
    setTimeout(function() {
        const counterElement = document.getElementById('visitor-counter');
        if (counterElement && counterElement.textContent === '0') {
            console.log('Aucune réponse reçue de GTM, utilisation de la valeur de secours');
            // Récupérer la valeur stockée ou utiliser 1 comme valeur par défaut
            const fallbackCount = localStorage.getItem('gameCritique_visitorCount') || '1';
            updateVisitorCounterWithGTMData(fallbackCount);
        }
    }, 3000); // Attendre 3 secondes avant d'utiliser la valeur de secours
});

/**
 * Initialise la communication avec Google Tag Manager pour le compteur de visiteurs
 */
function initGTMVisitorCounter() {
    // S'assurer que dataLayer existe
    window.dataLayer = window.dataLayer || [];
    
    // Envoyer un événement pour demander le nombre de visiteurs quotidien (format GTM)
    const currentDate = getCurrentDate();
    dataLayer.push({
        'event': 'get_visitor_stats',
        'gtmId': 'GTM-NTG73P3V',
        'visitDate': currentDate
    });
    
    // Envoyer également l'événement attendu par google-analytics.js
    dataLayer.push({
        'event': 'get_visitor_count',
        'gtm.uniqueEventId': new Date().getTime()
    });
    
    console.log('Événements de demande de compteur envoyés');
    
    // Configurer un écouteur d'événements pour recevoir les données de GTM
    setupGTMEventListener();
}

/**
 * Configure un écouteur d'événements pour recevoir les données de GTM
 */
function setupGTMEventListener() {
    window.addEventListener('message', function(event) {
        // Vérifier si l'événement contient des données de visiteurs quotidien
        // Log pour déboguer les événements reçus
        console.log('GTM Event reçu:', event.data);
        
        // Écouter à la fois 'visitor_count_data' (format GTM) et 'visitor_count_response' (format GA)
        if (event.data && (event.data.event === 'visitor_count_data' || event.data.event === 'visitor_count_response')) {
            // Mettre à jour le compteur avec les données reçues
            updateVisitorCounterWithGTMData(event.data.visitorCount);
            console.log('Compteur mis à jour avec la valeur:', event.data.visitorCount);
        }
    });
}

/**
 * Met à jour le compteur de visiteurs quotidien avec les données reçues de GTM
 */
function updateVisitorCounterWithGTMData(visitorCount) {
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        // Utiliser une valeur par défaut si visitorCount est undefined ou null
        const count = visitorCount || localStorage.getItem('gameCritique_visitorCount') || '1';
        
        // Mettre à jour l'affichage du compteur
        counterElement.textContent = count;
        
        // Sauvegarder la valeur dans le localStorage pour la persistance
        localStorage.setItem('gameCritique_visitorCount', count);
        
        console.log('Compteur mis à jour avec la valeur:', count);
    } else {
        console.error('Élément compteur non trouvé dans le DOM');
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