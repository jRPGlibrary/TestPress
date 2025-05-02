/**
 * Compteur de visiteurs unifié pour GameCritique
 * Ce script gère le comptage des visiteurs uniques par jour via Google Tag Manager
 */

// Attendre que le DOM soit chargé avant d'initialiser le compteur
document.addEventListener('DOMContentLoaded', function() {
    console.log('[Compteur] Initialisation du compteur de visiteurs');
    
    // Initialiser le compteur
    initVisitorCounter();
    
    // Programmer la réinitialisation du compteur à minuit
    scheduleResetAtMidnight();
});

/**
 * Initialise le compteur de visiteurs et enregistre une nouvelle visite si nécessaire
 */
function initVisitorCounter() {
    console.log('[Compteur] Initialisation du compteur de visiteurs');
    
    // S'assurer que dataLayer existe
    window.dataLayer = window.dataLayer || [];
    
    // Vérifier si c'est une nouvelle visite pour aujourd'hui
    if (isNewDailyVisit()) {
        // Enregistrer la visite
        recordVisit();
    }
    
    // Récupérer le nombre de visiteurs
    fetchVisitorCount();
}

/**
 * Vérifie si c'est une nouvelle visite pour la journée en cours
 * @returns {boolean} Vrai si c'est une nouvelle visite pour aujourd'hui
 */
function isNewDailyVisit() {
    const currentDate = getCurrentDate();
    const lastVisitDate = getCookie('gameCritique_lastVisit');
    
    // Si pas de cookie ou date différente, c'est une nouvelle visite
    return !lastVisitDate || lastVisitDate !== currentDate;
}

/**
 * Enregistre une nouvelle visite
 */
function recordVisit() {
    const currentDate = getCurrentDate();
    
    // Enregistrer la date de visite dans un cookie (expire à minuit)
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);
    setCookie('gameCritique_lastVisit', currentDate, midnight);
    
    console.log('[Compteur] Nouvelle visite enregistrée pour', currentDate);
    
    // Envoyer un événement à GTM pour incrémenter le compteur
    if (window.dataLayer) {
        dataLayer.push({
            'event': 'increment_visitor_count',
            'visitDate': currentDate,
            'uniqueVisitor': true
        });
        
        // Incrémenter le compteur local en attendant la réponse de GTM
        incrementLocalCounter();
    }
}

/**
 * Incrémente le compteur local stocké dans localStorage
 */
function incrementLocalCounter() {
    const currentDate = getCurrentDate();
    const counterKey = 'gameCritique_visitorCount_' + currentDate;
    
    // Récupérer le compteur actuel
    let count = parseInt(localStorage.getItem(counterKey) || '0');
    
    // Incrémenter et sauvegarder
    count++;
    localStorage.setItem(counterKey, count.toString());
    
    // Mettre à jour l'affichage
    updateVisitorCountDisplay(count);
}

/**
 * Récupère le nombre de visiteurs pour aujourd'hui
 */
function fetchVisitorCount() {
    const currentDate = getCurrentDate();
    const counterKey = 'gameCritique_visitorCount_' + currentDate;
    
    // Essayer d'abord de récupérer depuis le localStorage
    const localCount = localStorage.getItem(counterKey);
    if (localCount) {
        updateVisitorCountDisplay(localCount);
    }
    
    // Demander à GTM le nombre réel de visiteurs
    if (window.dataLayer) {
        dataLayer.push({
            'event': 'request_visitor_count',
            'visitDate': currentDate
        });
        
        // Configurer l'écouteur pour recevoir la réponse
        setupEventListener();
    }
}

/**
 * Configure un écouteur d'événements pour recevoir les données de GTM
 */
function setupEventListener() {
    // Supprimer les écouteurs existants pour éviter les doublons
    if (window._visitorCounterListener) {
        window.removeEventListener('message', window._visitorCounterListener);
    }
    
    // Créer et stocker le nouvel écouteur
    window._visitorCounterListener = function(event) {
        // Vérifier si l'événement contient des données de visiteurs
        if (event.data && event.data.event === 'visitor_count_response') {
            if (event.data.visitorCount !== undefined) {
                // Mettre à jour le compteur local et l'affichage
                const currentDate = getCurrentDate();
                const counterKey = 'gameCritique_visitorCount_' + currentDate;
                localStorage.setItem(counterKey, event.data.visitorCount);
                updateVisitorCountDisplay(event.data.visitorCount);
            }
        }
    };
    
    // Ajouter l'écouteur
    window.addEventListener('message', window._visitorCounterListener);
}

/**
 * Met à jour l'affichage du compteur de visiteurs
 */
function updateVisitorCountDisplay(count) {
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        counterElement.textContent = count;
    }
}

/**
 * Programme la réinitialisation du compteur à minuit
 */
function scheduleResetAtMidnight() {
    // Calculer le temps jusqu'à minuit
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const timeUntilMidnight = midnight - now;
    
    // Programmer la réinitialisation
    setTimeout(function() {
        // Réinitialiser les cookies pour permettre un nouveau comptage
        deleteCookie('gameCritique_lastVisit');
        
        // Réinitialiser le compteur local
        const currentDate = getCurrentDate();
        const counterKey = 'gameCritique_visitorCount_' + currentDate;
        localStorage.setItem(counterKey, '0');
        
        // Mettre à jour l'affichage
        updateVisitorCountDisplay('0');
        
        // Reprogrammer pour le jour suivant
        scheduleResetAtMidnight();
    }, timeUntilMidnight);
}

/**
 * Retourne la date actuelle au format YYYY-MM-DD
 */
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Définit un cookie avec une date d'expiration
 */
function setCookie(name, value, expires) {
    let cookie = `${name}=${value}; path=/`;
    
    if (expires) {
        cookie += `; expires=${expires.toUTCString()}`;
    }
    
    document.cookie = cookie;
}

/**
 * Récupère la valeur d'un cookie
 */
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

/**
 * Supprime un cookie
 */
function deleteCookie(name) {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}