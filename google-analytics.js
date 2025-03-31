/**
 * Google Analytics pour GameCritique
 * Ce script initialise Google Analytics et suit les visites sur le site
 */

// Initialisation de Google Analytics
document.addEventListener('DOMContentLoaded', function() {
    // Initialiser Google Analytics
    initializeGoogleAnalytics();
    
    // Mettre à jour le compteur de visiteurs
    updateVisitorCounter();
});

/**
 * Initialise Google Analytics avec le tag de mesure
 */
function initializeGoogleAnalytics() {
    // Vérifier si Google Analytics est déjà chargé
    if (typeof gtag === 'undefined') {
        // Créer le script Google Analytics
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'; // Remplacer G-XXXXXXXXXX par votre ID de mesure
        document.head.appendChild(gaScript);
        
        // Initialiser le dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX'); // Remplacer G-XXXXXXXXXX par votre ID de mesure
    }
}

/**
 * Met à jour le compteur de visiteurs en utilisant les données de Google Analytics
 * Note: Cette fonction utilise toujours localStorage comme solution de secours
 * car l'accès aux données de Google Analytics nécessite l'API Google Analytics
 */
function updateVisitorCounter() {
    // Utiliser localStorage comme solution de secours
    let visitorCount = localStorage.getItem('gameCritique_globalVisits');
    
    // Si le compteur n'existe pas, l'initialiser
    if (!visitorCount) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount);
    }
    
    // Vérifier si c'est une nouvelle visite (basé sur la session)
    const hasVisitedThisSession = sessionStorage.getItem('gameCritique_hasVisited');
    
    if (!hasVisitedThisSession) {
        // Incrémenter le compteur
        visitorCount++;
        
        // Marquer cette session comme ayant visité
        sessionStorage.setItem('gameCritique_hasVisited', 'true');
        
        // Sauvegarder le nouveau compteur
        localStorage.setItem('gameCritique_globalVisits', visitorCount.toString());
        
        // Envoyer un événement à Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': document.title,
                'page_location': window.location.href
            });
        }
    }
    
    // Afficher le compteur sur la page
    const counterElement = document.getElementById('visitor-counter');
    if (counterElement) {
        counterElement.textContent = visitorCount;
    }
}

/**
 * Réinitialise le compteur (fonction administrative)
 */
function resetVisitorCounter() {
    localStorage.removeItem('gameCritique_globalVisits');
    sessionStorage.removeItem('gameCritique_hasVisited');
    updateVisitorCounter();
}