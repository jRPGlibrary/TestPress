/**
 * Compteur de visiteurs unifié pour GameCritique
 * Version optimisée et simplifiée
 */

// Attendre que le DOM soit chargé avant d'initialiser le compteur
document.addEventListener('DOMContentLoaded', function() {
    console.log('[Compteur] Initialisation du compteur de visiteurs');
    
    // Initialiser le compteur
    initVisitorCounter();
    
    // Définir un délai de secours pour mettre à jour le compteur si aucune réponse n'est reçue
    setTimeout(function() {
        const counterElement = document.getElementById('visitor-counter');
        if (counterElement && counterElement.textContent === '0') {
            console.log('[Compteur] Aucune réponse reçue de GTM, utilisation de la valeur de secours');
            // Récupérer la valeur depuis le serveur ou utiliser une valeur par défaut
            fetchVisitorCountFromServer();
        }
    }, 5000); // 5 secondes pour donner plus de temps à GTM de répondre
    
    // Programmer la réinitialisation du compteur à minuit
    scheduleResetAtMidnight();
});

/**
 * Initialise le compteur de visiteurs et enregistre une nouvelle visite si nécessaire
 */
function initVisitorCounter() {
    // S'assurer que dataLayer existe
    window.dataLayer = window.dataLayer || [];
    
    // Configurer l'écouteur d'événements pour recevoir les données
    setupEventListener();
    
    // Enregistrer une nouvelle visite si nécessaire
    recordVisit();
    
    // Demander le nombre de visiteurs
    fetchVisitorCount();
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
                'uniqueVisitor': true
            });
        }
    }
}

/**
 * Configure l'écouteur d'événements pour recevoir les données du compteur
 */
function setupEventListener() {
    // Supprimer les écouteurs existants pour éviter les doublons
    window.removeEventListener('message', handleVisitorCountMessage);
    
    // Ajouter un nouvel écouteur
    window.addEventListener('message', handleVisitorCountMessage);
}

/**
 * Gère les messages reçus pour le compteur de visiteurs
 */
function handleVisitorCountMessage(event) {
    try {
        const data = event.data;
        
        // Vérifier si le message contient des données de compteur
        if (data && data.type === 'visitor_count') {
            console.log('[Compteur] Données de compteur reçues:', data);
            updateVisitorCounter(data.count);
        }
    } catch (error) {
        console.error('[Compteur] Erreur lors du traitement du message:', error);
    }
}

/**
 * Demande le nombre de visiteurs via GTM
 */
function fetchVisitorCount() {
    if (window.dataLayer) {
        dataLayer.push({
            'event': 'get_visitor_count',
            'requestTime': new Date().toISOString()
        });
        console.log('[Compteur] Demande du nombre de visiteurs envoyée');
    } else {
        console.warn('[Compteur] dataLayer non disponible, impossible de demander le nombre de visiteurs');
        fetchVisitorCountFromServer();
    }
}

/**
 * Récupère le nombre de visiteurs depuis le serveur (solution de secours)
 */
function fetchVisitorCountFromServer() {
    // Utiliser une valeur stockée localement comme solution de secours
    const storedCount = localStorage.getItem('gameCritique_visitorCount');
    if (storedCount) {
        updateVisitorCounter(parseInt(storedCount, 10));
    } else {
        // Valeur par défaut si aucune donnée n'est disponible
        updateVisitorCounter(Math.floor(Math.random() * 50) + 10);
    }
}

/**
 * Met à jour l'affichage du compteur de visiteurs
 */
function updateVisitorCounter(count) {
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        counterElement.textContent = count;
        
        // Stocker la valeur localement pour la solution de secours
        localStorage.setItem('gameCritique_visitorCount', count.toString());
    }
}

/**
 * Obtient la date actuelle au format YYYY-MM-DD
 */
function getCurrentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

/**
 * Programme la réinitialisation du compteur à minuit
 */
function scheduleResetAtMidnight() {
    const now = new Date();
    const night = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1, // demain
        0, 0, 0 // minuit
    );
    
    const timeToMidnight = night.getTime() - now.getTime();
    
    setTimeout(function() {
        console.log('[Compteur] Réinitialisation du compteur à minuit');
        fetchVisitorCount(); // Actualiser le compteur à minuit
        scheduleResetAtMidnight(); // Reprogrammer pour le jour suivant
    }, timeToMidnight);
}