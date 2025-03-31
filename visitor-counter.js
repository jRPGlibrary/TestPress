/**
 * Compteur de visiteurs simple pour GameCritique
 * Utilise le localStorage pour stocker les données de visite
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser ou mettre à jour le compteur global
    initializeGlobalCounter();
    
    // Afficher le compteur sur la page
    displayVisitorCounter();
});

/**
 * Initialise ou met à jour le compteur global de visites
 */
function initializeGlobalCounter() {
    // Récupérer le compteur global actuel
    let globalCount = localStorage.getItem('gameCritique_globalVisits');
    
    // Si le compteur n'existe pas, l'initialiser
    if (!globalCount) {
        globalCount = 0;
    } else {
        globalCount = parseInt(globalCount);
    }
    
    // Vérifier si c'est une nouvelle visite (basé sur la session)
    const hasVisitedThisSession = sessionStorage.getItem('gameCritique_hasVisited');
    
    if (!hasVisitedThisSession) {
        // Incrémenter le compteur global
        globalCount++;
        
        // Marquer cette session comme ayant visité
        sessionStorage.setItem('gameCritique_hasVisited', 'true');
        
        // Sauvegarder le nouveau compteur global
        localStorage.setItem('gameCritique_globalVisits', globalCount.toString());
    }
}

/**
 * Affiche le compteur de visiteurs sur la page
 */
function displayVisitorCounter() {
    // Récupérer le compteur global
    const globalCount = localStorage.getItem('gameCritique_globalVisits') || '0';
    
    // Trouver l'élément du compteur
    const counterElement = document.getElementById('visitor-counter');
    
    if (counterElement) {
        // Mettre à jour le texte du compteur
        counterElement.textContent = globalCount;
    }
}

/**
 * Réinitialise le compteur (fonction administrative)
 */
function resetVisitorCounter() {
    localStorage.removeItem('gameCritique_globalVisits');
    sessionStorage.removeItem('gameCritique_hasVisited');
    displayVisitorCounter();
}