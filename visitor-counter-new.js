/**
 * Compteur de visiteurs unifié pour GameCritique
 * Version entièrement reconstruite pour résoudre les problèmes de comptage
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
            // Récupérer la valeur stockée ou utiliser 1 comme valeur par défaut
            const fallbackCount = localStorage.getItem('gameCritique_visitorCount') || '1';
            updateVisitorCountDisplay(fallbackCount);
        }
    }, 5000); // 5 secondes pour donner plus de temps à GTM de répondre
    
    // Programmer la réinitialisation du compteur à minuit
    scheduleResetAtMidnight();
});

/**
 * Initialise le compteur de visiteurs et enregistre une nouvelle visite si nécessaire
 */
function initVisitorCounter() {
    console.log('[Compteur] Initialisation du compteur de visiteurs');
    
    // Vérifier si le compteur est initialisé dans le localStorage
    const storedCount = localStorage.getItem('gameCritique_visitorCount');
    console.log('[Compteur] Valeur actuelle dans localStorage:', storedCount);
    
    // Si le compteur n'est pas initialisé ou est à 0, le définir à 0
    if (!storedCount) {
        console.log('[Compteur] Aucune valeur trouvée dans localStorage, initialisation à 0');
        localStorage.setItem('gameCritique_visitorCount', '0');
    }
    
    // S'assurer que dataLayer existe
    window.dataLayer = window.dataLayer || [];
    console.log('[Compteur] dataLayer initialisé');
    
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
    } else {
        console.log('[Compteur] Google Tag Manager déjà chargé');
    }
    
    // Configurer l'écouteur d'événements pour recevoir les données
    setupEventListener();
    
    // Enregistrer une nouvelle visite si nécessaire
    recordVisit();
    
    // Demander le nombre de visiteurs
    fetchVisitorCount();
    
    // Afficher la valeur actuelle
    const currentCount = localStorage.getItem('gameCritique_visitorCount') || '0';
    updateVisitorCountDisplay(currentCount);
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
        
        // Récupérer le compteur actuel et l'incrémenter
        const currentCount = parseInt(localStorage.getItem('gameCritique_visitorCount') || '0');
        const newCount = currentCount + 1;
        console.log('[Compteur] Incrémentation du compteur: ' + currentCount + ' -> ' + newCount);
        localStorage.setItem('gameCritique_visitorCount', newCount.toString());
        
        // Envoyer un événement à GTM pour enregistrer une nouvelle visite quotidienne
        if (window.dataLayer) {
            const currentDate = getCurrentDate();
            dataLayer.push({
                'event': 'new_visitor',
                'pageTitle': document.title,
                'pageUrl': window.location.href,
                'visitDate': currentDate,
                'uniqueVisitor': true,
                'visitorCount': newCount.toString()
            });
            console.log('[Compteur] Événement new_visitor envoyé avec compteur: ' + newCount);
            
            // Mettre à jour l'affichage immédiatement
            updateVisitorCountDisplay(newCount.toString());
        }
    } else {
        console.log('[Compteur] Session existante détectée, pas d\'incrémentation');
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
    
    // Supprimer les écouteurs existants pour éviter les doublons
    if (window._visitorCounterListener) {
        console.log('[Compteur] Suppression de l\'ancien écouteur d\'événements');
        window.removeEventListener('message', window._visitorCounterListener);
    }
    
    // Créer et stocker le nouvel écouteur
    window._visitorCounterListener = function(event) {
        // Log pour déboguer les événements reçus
        console.log('[Compteur] Événement reçu:', event.data);
        
        // Vérifier si l'événement contient des données de visiteurs
        if (event.data && 
            (event.data.event === 'visitor_count_data' || 
             event.data.event === 'visitor_count_response')) {
            
            // Vérifier si la valeur reçue est valide
            if (event.data.visitorCount !== undefined && event.data.visitorCount !== null) {
                // Comparer avec la valeur locale
                const localCount = localStorage.getItem('gameCritique_visitorCount') || '0';
                console.log('[Compteur] Comparaison - Valeur locale:', localCount, 'Valeur reçue:', event.data.visitorCount);
                
                // Utiliser la valeur la plus élevée
                const localCountNum = parseInt(localCount);
                const receivedCountNum = parseInt(event.data.visitorCount);
                
                if (!isNaN(receivedCountNum) && !isNaN(localCountNum)) {
                    if (receivedCountNum > localCountNum) {
                        console.log('[Compteur] Utilisation de la valeur reçue (plus élevée)');
                        updateVisitorCountDisplay(event.data.visitorCount);
                    } else {
                        console.log('[Compteur] Conservation de la valeur locale (plus élevée ou égale)');
                        updateVisitorCountDisplay(localCount);
                    }
                } else {
                    console.log('[Compteur] Valeur non numérique détectée, utilisation de la valeur reçue');
                    updateVisitorCountDisplay(event.data.visitorCount);
                }
            } else {
                console.log('[Compteur] Valeur reçue invalide');
            }
        }
    };
    
    // Ajouter l'écouteur
    window.addEventListener('message', window._visitorCounterListener);
    console.log('[Compteur] Nouvel écouteur d\'événements ajouté');
}

/**
 * Met à jour l'affichage du compteur de visiteurs
 */
function updateVisitorCountDisplay(count) {
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        // Vérifier si la valeur est numérique
        let visitorCount;
        if (count !== undefined && count !== null) {
            // Utiliser la valeur fournie
            visitorCount = count;
            console.log('[Compteur] Utilisation de la valeur fournie:', count);
        } else {
            // Récupérer depuis le localStorage
            visitorCount = localStorage.getItem('gameCritique_visitorCount');
            console.log('[Compteur] Valeur récupérée du localStorage:', visitorCount);
            
            // Si toujours pas de valeur, utiliser 1 comme valeur par défaut
            if (!visitorCount) {
                visitorCount = '1';
                console.log('[Compteur] Aucune valeur trouvée, utilisation de la valeur par défaut: 1');
            }
        }
        
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
    
    // Réinitialiser le compteur local
    localStorage.setItem('gameCritique_visitorCount', '0');
    
    // Réinitialiser la session pour permettre un nouveau comptage
    sessionStorage.removeItem('gameCritique_hasVisited');
    
    // Envoyer un événement à Google Tag Manager pour réinitialiser le compteur
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'reset_visitor_count',
            'resetDate': getCurrentDate()
        });
    }
    
    // Mettre à jour l'affichage du compteur à 0
    updateVisitorCountDisplay('0');
}

/**
 * Fonction de débogage pour simuler une réponse GTM
 * Utile pour tester le compteur sans GTM configuré
 */
function simulateGTMResponse() {
    const storedCount = localStorage.getItem('gameCritique_visitorCount') || '0';
    window.postMessage({
        'event': 'visitor_count_response',
        'visitorCount': storedCount
    }, '*');
    console.log('[Compteur] Simulation de réponse GTM avec compteur:', storedCount);
}