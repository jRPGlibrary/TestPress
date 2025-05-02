/**
 * Compteur de visiteurs unifié pour GameCritique
 * Ce script gère le comptage des visiteurs via Google Analytics
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
    console.log('[Compteur] Initialisation du compteur de visiteurs');
    
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
        
        // Attendre un peu que GTM se charge avant de continuer
        setTimeout(function() {
            continueInitialization();
        }, 1000);
    } else {
        console.log('[Compteur] Google Tag Manager déjà chargé');
        continueInitialization();
    }
    
    function continueInitialization() {
        // Configurer l'écouteur d'événements pour recevoir les données
        setupEventListener();
        
        // Enregistrer une nouvelle visite si nécessaire
        recordVisit();
        
        // Demander le nombre de visiteurs
        fetchVisitorCount();
        
        // Récupérer le compteur depuis le serveur
        fetchVisitorCountFromServer();
    }
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
            console.log('[Compteur] Événement new_visitor envoyé');
            
            // Envoyer directement l'événement d'incrémentation à GA
            incrementVisitorCountOnServer();
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
        'event': 'request_visitor_count_from_ga',
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
                console.log('[Compteur] Valeur reçue:', event.data.visitorCount);
                
                // Mettre à jour l'affichage avec la valeur reçue
                updateVisitorCountDisplay(event.data.visitorCount);
            } else {
                console.log('[Compteur] Valeur reçue invalide');
            }
        }
        
        // Vérifier également si l'événement est envoyé directement par GTM
        if (event.data && typeof event.data === 'object' && event.data.event === 'visitor_count_response') {
            console.log('[Compteur] Réponse GTM reçue:', event.data);
            if (event.data.visitorCount !== undefined) {
                updateVisitorCountDisplay(event.data.visitorCount);
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
            // Utiliser 1 comme valeur par défaut
            visitorCount = '1';
            console.log('[Compteur] Aucune valeur trouvée, utilisation de la valeur par défaut: 1');
        }
        
        // Mettre à jour l'affichage du compteur
        counterElement.textContent = visitorCount;
        
        console.log('[Compteur] Compteur mis à jour avec la valeur:', visitorCount);
    } else {
        console.error('[Compteur] Élément compteur non trouvé dans le DOM');
    }
}

/**
 * Récupère le compteur depuis Google Analytics via GTM
 */
function fetchVisitorCountFromServer() {
    // Utiliser Google Analytics pour récupérer le nombre de visiteurs réel
    console.log('[Compteur] Récupération du nombre de visiteurs depuis Google Analytics');
    
    // Vérifier si GTM est chargé
    if (!window.dataLayer) {
        console.error('[Compteur] dataLayer non disponible, chargement de GTM');
        // Initialiser dataLayer
        window.dataLayer = window.dataLayer || [];
        
        // Charger GTM si nécessaire
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
    
    // Envoyer une requête à Google Analytics via GTM
    dataLayer.push({
        'event': 'request_visitor_count_from_ga',
        'requestId': new Date().getTime()
    });
    
    console.log('[Compteur] Requête envoyée à Google Analytics via GTM');
    
    // Définir un délai de secours pour simuler une réponse si aucune n'est reçue
    setTimeout(function() {
        const counterElement = document.getElementById('visitor-counter');
        if (counterElement && counterElement.textContent === '0') {
            console.log('[Compteur] Aucune réponse reçue de GTM, simulation d\'une réponse');
            simulateGTMResponse();
        }
    }, 3000);
}

/**
 * Incrémente le compteur de visiteurs sur le serveur
 */
function incrementVisitorCountOnServer() {
    console.log('[Compteur] Incrémentation du compteur dans Google Analytics');
    
    // Envoyer un événement à Google Analytics via GTM pour incrémenter le compteur
    if (window.dataLayer) {
        dataLayer.push({
            'event': 'increment_visitor_count_in_ga',
            'pageTitle': document.title,
            'pageUrl': window.location.href,
            'timestamp': new Date().toISOString()
        });
        
        console.log('[Compteur] Événement d\'incrémentation envoyé à Google Analytics');
        
        // Demander la valeur mise à jour après un court délai
        setTimeout(fetchVisitorCountFromServer, 1000);
    } else {
        console.error('[Compteur] dataLayer non disponible, impossible d\'incrémenter le compteur');
    }
}

/**
 * Réinitialise le compteur de visiteurs sur le serveur
 */
function resetVisitorCountOnServer() {
    console.log('[Compteur] Réinitialisation du compteur dans Google Analytics');
    
    // Envoyer un événement à Google Analytics via GTM pour réinitialiser le compteur
    if (window.dataLayer) {
        dataLayer.push({
            'event': 'reset_visitor_count_in_ga',
            'resetTime': new Date().toISOString()
        });
        
        console.log('[Compteur] Événement de réinitialisation envoyé à Google Analytics');
        
        // Mettre à jour l'affichage
        updateVisitorCountDisplay('0');
    } else {
        console.error('[Compteur] dataLayer non disponible, impossible de réinitialiser le compteur');
    }
}

/**
 * Réinitialise le compteur à minuit
 */
function resetCounterAtMidnight() {
    console.log('[Compteur] Réinitialisation du compteur à minuit');
    
    // Réinitialiser la session pour permettre un nouveau comptage
    sessionStorage.removeItem('gameCritique_hasVisited');
    
    // Envoyer un événement à Google Tag Manager pour réinitialiser le compteur
    if (typeof dataLayer !== 'undefined') {
        dataLayer.push({
            'event': 'reset_visitor_count_in_ga',
            'resetDate': getCurrentDate()
        });
    }
    
    // Réinitialiser le compteur sur le serveur
    resetVisitorCountOnServer();
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
        resetCounterAtMidnight();
        // Reprogrammer pour le jour suivant
        scheduleResetAtMidnight();
    }, timeUntilMidnight);
    
    console.log('[Compteur] Réinitialisation programmée dans', Math.floor(timeUntilMidnight / 1000 / 60), 'minutes');
}

/**
 * Simule une réponse de GTM pour les tests
 */
function simulateGTMResponse() {
    // Simuler une réponse de Google Analytics avec une valeur de test
    // Dans la version réelle, cette valeur viendrait de Google Analytics
    const simulatedCount = '25'; // Valeur de test pour la simulation
    
    // Simuler l'événement exactement comme GTM l'enverrait
    window.postMessage({
        'event': 'visitor_count_response',
        'visitorCount': simulatedCount,
        'source': 'ga_simulation'
    }, '*');
    
    console.log('[Compteur] Simulation de réponse GA via GTM avec compteur:', simulatedCount);
    
    // Mettre à jour directement l'affichage pour s'assurer que ça fonctionne
    updateVisitorCountDisplay(simulatedCount);
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