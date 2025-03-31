/**
 * Compteur de visiteurs quotidien pour GameCritique
 * Utilise Google Tag Manager pour suivre et afficher le nombre de visiteurs par jour
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser le compteur avec Google Tag Manager
    initializeGTMCounter();
    
    // Afficher le compteur sur la page
    displayVisitorCounter();
    
    // Vérifier si nous devons réinitialiser le compteur (nouveau jour)
    checkDayChange();
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
                'visitDate': getCurrentDate() // Ajouter la date actuelle
            });
        }
        
        // Incrémenter également le compteur local quotidien
        incrementDailyCounter();
    }
    
    // Récupérer les données de Google Analytics via GTM
    fetchVisitorCount();
}

/**
 * Récupère le nombre de visiteurs quotidien depuis Google Analytics via GTM
 */
function fetchVisitorCount() {
    // Utiliser un compteur de secours en cas d'échec de récupération des données
    const currentDate = getCurrentDate();
    let fallbackCount = localStorage.getItem(`gameCritique_dailyVisits_${currentDate}`);
    
    if (!fallbackCount) {
        fallbackCount = '0';
        localStorage.setItem(`gameCritique_dailyVisits_${currentDate}`, fallbackCount);
    }
    
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
        
        // Après 3 secondes, si aucune réponse n'est reçue, utiliser le compteur de secours
        setTimeout(function() {
            const counterElement = document.getElementById('visitor-counter');
            if (counterElement && counterElement.textContent === '0') {
                updateVisitorCountDisplay(fallbackCount);
            }
        }, 3000);
    } else {
        // Si GTM n'est pas disponible, utiliser le compteur de secours
        updateVisitorCountDisplay(fallbackCount);
    }
}

/**
 * Affiche le compteur de visiteurs sur la page
 */
function displayVisitorCounter() {
    // Initialiser le compteur à 0
    const counterElement = document.getElementById('visitor-counter');
    
    if (counterElement) {
        // Mettre à jour le texte du compteur (sera mis à jour par fetchVisitorCount)
        counterElement.textContent = '0';
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
        
        // Mettre à jour le texte du label si nécessaire
        updateVisitorCountLabel();
    }
}

/**
 * Réinitialise le compteur quotidien (fonction administrative)
 */
function resetVisitorCounter() {
    const currentDate = getCurrentDate();
    localStorage.removeItem(`gameCritique_dailyVisits_${currentDate}`);
    sessionStorage.removeItem('gameCritique_hasVisited');
    localStorage.setItem('gameCritique_lastResetDate', currentDate);
    
    // Envoyer un événement à Google Tag Manager pour réinitialiser le compteur
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'reset_visitor_count',
            'resetDate': currentDate
        });
    }
    
    displayVisitorCounter();
}

/**
 * Obtient la date actuelle au format YYYY-MM-DD
 */
function getCurrentDate() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

/**
 * Vérifie si le jour a changé et réinitialise le compteur si nécessaire
 */
function checkDayChange() {
    const currentDate = getCurrentDate();
    const lastResetDate = localStorage.getItem('gameCritique_lastResetDate');
    
    // Si c'est un nouveau jour ou si la date de dernière réinitialisation n'existe pas
    if (!lastResetDate || lastResetDate !== currentDate) {
        // Réinitialiser le compteur pour le nouveau jour
        localStorage.setItem(`gameCritique_dailyVisits_${currentDate}`, '0');
        localStorage.setItem('gameCritique_lastResetDate', currentDate);
    }
    
    // Programmer la prochaine vérification à minuit
    scheduleNextDayCheck();
}

/**
 * Programme la prochaine vérification de changement de jour à minuit
 */
function scheduleNextDayCheck() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow - now;
    
    // Programmer la réinitialisation à minuit
    setTimeout(function() {
        checkDayChange();
    }, timeUntilMidnight);
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