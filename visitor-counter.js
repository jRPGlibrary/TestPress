/**
 * Compteur de visiteurs quotidien pour GameCritique
 * Utilise Google Tag Manager pour suivre et afficher le nombre de visiteurs uniques par jour
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le compteur avec Google Tag Manager
    initializeGTMCounter();
    
    // Vérifier si nous devons réinitialiser le compteur (nouveau jour)
    scheduleResetAtMidnight();
});

/**
 * Initialise le compteur avec Google Tag Manager
 */
function initializeGTMCounter() {
    // Vérifier si c'est une nouvelle visite (basé sur la session)
    const hasVisitedThisSession = sessionStorage.getItem('gameCritique_hasVisited');
    
    if (!hasVisitedThisSession) {
        // Marquer cette session comme ayant visité
        sessionStorage.setItem('gameCritique_hasVisited', 'true');
        
        // Envoyer un événement à Google Tag Manager pour incrémenter le compteur quotidien
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                'event': 'visitor_count_increment',
                'pageTitle': document.title,
                'pageUrl': window.location.href,
                'visitDate': getCurrentDate(), // Ajouter la date actuelle
                'uniqueVisitor': true // Indiquer qu'il s'agit d'un visiteur unique
            });
        }
    }
    
    // Récupérer les données de Google Analytics via GTM
    fetchVisitorCount();
}

/**
 * Récupère le nombre de visiteurs quotidien depuis Google Analytics via GTM
 */
function fetchVisitorCount() {
    // Essayer de récupérer les données de Google Analytics via GTM
    if (typeof dataLayer !== 'undefined') {
        // Créer un événement pour demander les données de visiteurs
        dataLayer.push({
            'event': 'get_visitor_count',
            'gtm.uniqueEventId': new Date().getTime()
        });
        
        // Écouter les événements de dataLayer pour récupérer le nombre de visiteurs
        window.addEventListener('message', function(event) {
            if (event.data && event.data.event === 'visitor_count_response') {
                updateVisitorCountDisplay(event.data.visitorCount);
            }
        });
    }
}

/**
 * Met à jour l'affichage du compteur de visiteurs quotidien
 */
function updateVisitorCountDisplay(count) {
    const counterElement = document.getElementById('visitor-counter');
    
    if (counterElement) {
        // Mettre à jour le texte du compteur
        counterElement.textContent = count;
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
 * Programme la réinitialisation du compteur à minuit
 */
function scheduleResetAtMidnight() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow - now;
    
    // Programmer la réinitialisation à minuit
    setTimeout(function() {
        resetCounterAtMidnight();
        scheduleResetAtMidnight(); // Reprogrammer pour le jour suivant
    }, timeUntilMidnight);
}

/**
 * Réinitialise le compteur à minuit
 */
function resetCounterAtMidnight() {
    // Envoyer un événement à Google Tag Manager pour réinitialiser le compteur
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'reset_visitor_count',
            'resetDate': getCurrentDate()
        });
    }
    
    // Réinitialiser la session pour permettre un nouveau comptage
    sessionStorage.removeItem('gameCritique_hasVisited');
    
    // Mettre à jour l'affichage du compteur à 0
    updateVisitorCountDisplay('0');
}