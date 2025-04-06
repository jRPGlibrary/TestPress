/**
 * Compteur de visiteurs unifié pour GameCritique
 * Version corrigée qui résout les problèmes de communication entre les fichiers
 */

// Configuration pour le compteur de visiteurs via GTM
document.addEventListener('DOMContentLoaded', function() {
    console.log('[Compteur] Initialisation du compteur de visiteurs');
    
    // Initialiser la communication avec GTM
    initVisitorCounter();
    
    // Définir un délai de secours pour mettre à jour le compteur si aucune réponse n'est reçue
    setTimeout(function() {
        const counterElement = document.getElementById('visitor-counter');
        if (counterElement && counterElement.textContent === '0') {
            console.log('[Compteur] Aucune réponse reçue de GTM, utilisation de la valeur de secours');
            // Récupérer la valeur stockée ou utiliser 1 comme valeur par défaut
            const fallbackCount = localStorage.getItem('gameCritique_visitorCount') || '1';
            updateVisitorCountDisplay(fallbackCount);
        }
    }, 5000); // Augmenté à 5 secondes pour donner plus de temps à GTM de répondre
    
    // Vérifier si nous devons réinitialiser le compteur (nouveau jour)
    scheduleResetAtMidnight();
});

/**
 * Initialise le compteur de visiteurs et enregistre une nouvelle visite si nécessaire
 */
function initVisitorCounter() {
    // S'assurer que dataLayer existe
    window.dataLayer = window.dataLayer || [];
    
    // Vérifier si GTM est chargé, sinon le charger
    if (!document.querySelector('script[src*="googletagmanager.com/gtm.js"]')) {
        console.log('[Compteur] Chargement de Google Tag Manager');
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
    
    // Enregistrer une nouvelle visite si nécessaire
    recordVisit();
    
    // Demander le nombre de visiteurs
    fetchVisitorCount();
    
    // Configurer l'écouteur d'événements pour recevoir les données
    setupEventListener();
}

/**
 * Enregistre une nouvelle visite si c'est une nouvelle session
 */
function recordVisit() {
    // Vérifier si c'est une nouvelle session
    const hasVisitedThisSession = sessionStorage.getItem('gameCritique_hasVisited');
    
    if (!hasVisitedThisSession) {
        console.log('[Compteur] Nouvelle visite détectée');
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
            console.log('[Compteur] Événement new_visitor envoyé');
        }
    }
}

/**
 * Demande le nombre de visiteurs via GTM
 */
function fetchVisitorCount() {
    console.log('[Compteur] Demande du nombre de visiteurs');
    // Envoyer un événement pour demander le nombre de visiteurs quotidien
    const currentDate = getCurrentDate();
    dataLayer.push({
        'event': 'get_visitor_count',
        'visitDate': currentDate,
        'gtm.uniqueEventId': new Date().getTime()
    });
}

/**
 * Configure un écouteur d'événements pour recevoir les données de GTM
 */
function setupEventListener() {
    console.log('[Compteur] Configuration de l\'écouteur d\'événements');
    window.addEventListener('message', function(event) {
        // Log pour déboguer les événements reçus
        console.log('[Compteur] Événement reçu:', event.data);
        
        // Vérifier si l'événement contient des données de visiteurs
        if (event.data && 
            (event.data.event === 'visitor_count_data' || 
             event.data.event === 'visitor_count_response')) {
            
            // Mettre à jour le compteur avec les données reçues
            updateVisitorCountDisplay(event.data.visitorCount);
            console.log('[Compteur] Compteur mis à jour avec la valeur:', event.data.visitorCount);
        }
    });
}

/**
 * Met à jour l'affichage du compteur de visiteurs
 */
function updateVisitorCountDisplay(count) {
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        // Utiliser une valeur par défaut si count est undefined ou null
        const visitorCount = count || localStorage.getItem('gameCritique_visitorCount') || '1';
        
        // Mettre à jour l'affichage du compteur
        counterElement.textContent = visitorCount;
        
        // Sauvegarder la valeur dans le localStorage pour la persistance
        localStorage.setItem('gameCritique_visitorCount', visitorCount);
        
        console.log('[Compteur] Compteur mis à jour avec la valeur:', visitorCount);
    } else {
        console.error('[Compteur] Élément compteur non trouvé dans le DOM');
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
    console.log(`[Compteur] Réinitialisation programmée dans ${Math.floor(timeUntilMidnight/1000/60)} minutes`);
    
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
    console.log('[Compteur] Réinitialisation du compteur à minuit');
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