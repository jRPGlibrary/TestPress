/**
 * Script de débogage pour le compteur de visiteurs
 * Ce fichier permet de détecter les erreurs potentielles dans le compteur de visiteurs
 */

// Activer le mode débogage
const DEBUG_MODE = true;

// Stocker les écouteurs d'événements pour vérification
window._messageListeners = [];

// Remplacer la méthode addEventListener pour suivre les écouteurs d'événements 'message'
const originalAddEventListener = window.addEventListener;
window.addEventListener = function(type, listener, options) {
    if (type === 'message') {
        window._messageListeners.push(listener);
        console.log('[DEBUG] Nouvel écouteur d\'événement "message" ajouté');
    }
    return originalAddEventListener.call(this, type, listener, options);
};

// Remplacer dataLayer.push pour déboguer les événements
const originalDataLayerPush = Array.prototype.push;
Object.defineProperty(window, 'dataLayer', {
    get: function() {
        if (!this._dataLayer) {
            this._dataLayer = [];
            
            // Remplacer la méthode push
            this._dataLayer.push = function() {
                console.log('[DEBUG] dataLayer.push appelé avec:', JSON.stringify(arguments[0]));
                return originalDataLayerPush.apply(this, arguments);
            };
        }
        return this._dataLayer;
    },
    set: function(val) {
        this._dataLayer = val;
    }
});

// Intercepter les messages postMessage
const originalPostMessage = window.postMessage;
window.postMessage = function(message, targetOrigin, transfer) {
    console.log('[DEBUG] postMessage appelé avec:', JSON.stringify(message));
    return originalPostMessage.call(this, message, targetOrigin, transfer);
};

// Vérifier l'existence de l'élément compteur
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const counterElement = document.getElementById('visitor-counter');
        if (!counterElement) {
            console.error('[DEBUG] ERREUR: Élément #visitor-counter non trouvé dans le DOM');
        } else {
            console.log('[DEBUG] Élément #visitor-counter trouvé dans le DOM');
        }
        
        // Vérifier les conflits potentiels entre les fichiers
        checkForConflicts();
    }, 500);
});

/**
 * Vérifie les conflits potentiels entre les fichiers de compteur
 */
function checkForConflicts() {
    console.log('[DEBUG] Vérification des conflits potentiels...');
    
    // Vérifier les fonctions dupliquées
    const functions = [
        'initGTMVisitorCounter',
        'setupGTMEventListener',
        'updateVisitorCounterWithGTMData',
        'recordVisitWithGTM',
        'getCurrentDate',
        'initializeGTMCounter',
        'fetchVisitorCount',
        'updateVisitorCountDisplay',
        'scheduleResetAtMidnight',
        'resetCounterAtMidnight'
    ];
    
    functions.forEach(function(funcName) {
        if (typeof window[funcName] === 'function') {
            console.log(`[DEBUG] Fonction ${funcName} trouvée`);
        } else {
            console.warn(`[DEBUG] Fonction ${funcName} non trouvée`);
        }
    });
    
    // Vérifier les écouteurs d'événements
    console.log(`[DEBUG] Nombre d'écouteurs d'événements 'message': ${window._messageListeners.length}`);
    if (window._messageListeners.length > 1) {
        console.warn('[DEBUG] ATTENTION: Plusieurs écouteurs pour l\'événement "message" détectés');
    }
    
    // Vérifier les clés de stockage
    const storageKeys = [
        'gameCritique_visitorCount',
        'gameCritique_hasVisited',
        'gameCritique_globalVisits'
    ];
    
    storageKeys.forEach(function(key) {
        const localValue = localStorage.getItem(key);
        const sessionValue = sessionStorage.getItem(key);
        
        console.log(`[DEBUG] localStorage[${key}] = ${localValue || 'non défini'}`);
        console.log(`[DEBUG] sessionStorage[${key}] = ${sessionValue || 'non défini'}`);
    });
}

/**
 * Vérifie si GTM est correctement chargé
 */
function checkGTMLoading() {
    console.log('[DEBUG] Vérification du chargement de GTM...');
    
    // Vérifier si le script GTM est chargé
    const gtmScript = document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
    if (!gtmScript) {
        console.error('[DEBUG] ERREUR: Script GTM non trouvé dans le DOM');
    } else {
        console.log('[DEBUG] Script GTM trouvé dans le DOM');
    }
    
    // Vérifier si dataLayer existe
    if (typeof dataLayer === 'undefined') {
        console.error('[DEBUG] ERREUR: dataLayer n\'est pas défini');
    } else {
        console.log('[DEBUG] dataLayer est défini avec', dataLayer.length, 'éléments');
    }
}

// Exécuter la vérification GTM après un court délai
setTimeout(checkGTMLoading, 1000);

console.log('[DEBUG] Script de débogage du compteur de visiteurs chargé');