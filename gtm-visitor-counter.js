/**
 * Configuration Google Tag Manager pour le compteur de visiteurs quotidien
 * Ce fichier permet d'intégrer le compteur de visiteurs quotidien avec Google Tag Manager
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
    
    // Configurer un délai pour utiliser les données de secours si GTM ne répond pas
    setTimeout(function() {
        const counterElement = document.getElementById('visitor-counter');
        if (counterElement && counterElement.textContent === '0') {
            // Utiliser les données de secours (localStorage) pour le jour actuel
            const currentDate = getCurrentDate();
            const fallbackCount = localStorage.getItem(`gameCritique_dailyVisits_${currentDate}`) || '1';
            updateVisitorCounterWithGTMData(fallbackCount);
            
            // Incrémenter le compteur de secours pour la prochaine visite
            const newCount = parseInt(fallbackCount) + 1;
            localStorage.setItem(`gameCritique_dailyVisits_${currentDate}`, newCount.toString());
        }
    }, 2000);
}

/**
 * Met à jour le compteur de visiteurs quotidien avec les données reçues de GTM
 */
function updateVisitorCounterWithGTMData(visitorCount) {
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        // Mettre à jour l'affichage du compteur
        counterElement.textContent = visitorCount;
        
        // Sauvegarder la valeur comme secours pour le jour actuel
        const currentDate = getCurrentDate();
        localStorage.setItem(`gameCritique_dailyVisits_${currentDate}`, visitorCount);
        
        // Mettre à jour le texte du label pour indiquer qu'il s'agit de visites quotidiennes
        updateVisitorCountLabel();
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
                'visitDate': currentDate
            });
        }
        
        // Incrémenter également le compteur local quotidien
        incrementDailyCounter();
    }
}

/**
 * Obtient la date actuelle au format YYYY-MM-DD
 */
function getCurrentDate() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/**
 * Incrémente le compteur quotidien local
 */
function incrementDailyCounter() {
    const currentDate = getCurrentDate();
    const currentCount = parseInt(localStorage.getItem(`gameCritique_dailyVisits_${currentDate}`) || '0');
    localStorage.setItem(`gameCritique_dailyVisits_${currentDate}`, (currentCount + 1).toString());
}

/**
 * Met à jour le texte du label du compteur pour indiquer qu'il s'agit de visites quotidiennes
 */
function updateVisitorCountLabel() {
    const labels = document.querySelectorAll('[data-i18n="visitor_count"]');
    
    labels.forEach(function(label) {
        // Vérifier si le texte contient déjà "aujourd'hui"
        if (label.textContent.indexOf('aujourd\'hui') === -1 && 
            label.textContent.indexOf('today') === -1) {
            
            // Adapter le texte en fonction de la langue
            if (label.textContent.indexOf('Nombre de visiteurs') !== -1) {
                label.textContent = label.textContent.replace('Nombre de visiteurs:', 'Visiteurs aujourd\'hui:');
            } else if (label.textContent.indexOf('Visitor count') !== -1) {
                label.textContent = label.textContent.replace('Visitor count:', 'Visitors today:');
            }
        }
    });
}

// Exécuter l'enregistrement de visite
recordVisitWithGTM();