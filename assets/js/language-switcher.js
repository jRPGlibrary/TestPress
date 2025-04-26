/**
 * Changeur de langue pour GameCritique
 * Version optimisée et simplifiée
 */

// Définir la langue par défaut et la langue actuelle
let defaultLanguage = 'fr';
let currentLanguage = localStorage.getItem('language') || defaultLanguage;

// Objet contenant toutes les traductions
const translations = {
    // Traductions pour la navigation
    'nav_home': {
        'fr': 'Accueil',
        'en': 'Home'
    },
    'nav_tests': {
        'fr': 'Tests',
        'en': 'Reviews'
    },
    'nav_interviews': {
        'fr': 'Interviews',
        'en': 'Interviews'
    },
    'nav_partnerships': {
        'fr': 'Partenariats',
        'en': 'Partnerships'
    },
    'nav_about': {
        'fr': 'À propos',
        'en': 'About'
    },
    
    // Traductions pour la page d'accueil
    'site_title': {
        'fr': 'GameCritique - Spécialiste RPG et Jeux Indépendants',
        'en': 'GameCritique - RPG and Indie Games Specialist'
    },
    'site_description': {
        'fr': 'Découvrez les meilleurs RPG et Jeux Indépendants avec des tests complets, des analyses détaillées et des avis d\'experts sur GameCritique.',
        'en': 'Discover the best RPGs and Indie Games with comprehensive reviews, detailed analyses, and expert opinions on GameCritique.'
    },
    'hero_title': {
        'fr': 'Découvrez les meilleurs RPG et Jeux Indépendants',
        'en': 'Discover the best RPGs and Indie Games'
    },
    'hero_subtitle': {
        'fr': 'Des tests complets, des analyses détaillées et des avis d\'experts sur les RPG en tout genre et les pépites indépendantes.',
        'en': 'Comprehensive reviews, detailed analyses, and expert opinions on all types of RPGs and indie gems.'
    },
    'see_latest_reviews': {
        'fr': 'Voir les derniers tests',
        'en': 'See latest reviews'
    },
    'featured_rpg': {
        'fr': 'RPG Vedette',
        'en': 'Featured RPG'
    },
    'read_review': {
        'fr': 'Lire le test',
        'en': 'Read review'
    },
    'visitor_count': {
        'fr': 'Nombre de visiteurs: <span id="visitor-counter">0</span>',
        'en': 'Visitor count: <span id="visitor-counter">0</span>'
    }
};

// Initialiser le changeur de langue au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    // Créer le sélecteur de langue s'il n'existe pas déjà
    createLanguageSwitcher();
    
    // Appliquer les traductions dans la langue actuelle
    updatePageLanguage();
});

/**
 * Crée le sélecteur de langue dans la barre de navigation
 */
function createLanguageSwitcher() {
    // Vérifier si le sélecteur existe déjà
    if (document.querySelector('.language-switcher')) {
        return;
    }
    
    // Trouver la barre de navigation
    const navbar = document.querySelector('.nav-links');
    if (!navbar) {
        console.error('Barre de navigation non trouvée');
        return;
    }
    
    // Créer l'élément li pour le sélecteur de langue
    const languageSwitcherLi = document.createElement('li');
    languageSwitcherLi.className = 'language-switcher-container';
    
    // Créer le sélecteur de langue
    const languageSwitcher = document.createElement('div');
    languageSwitcher.className = 'language-switcher';
    
    // Ajouter les options de langue
    const languages = [
        { code: 'fr', name: 'FR' },
        { code: 'en', name: 'EN' }
    ];
    
    languages.forEach(lang => {
        const langOption = document.createElement('button');
        langOption.className = `lang-option ${lang.code === currentLanguage ? 'active' : ''}`;
        langOption.textContent = lang.name;
        langOption.setAttribute('data-lang', lang.code);
        
        // Ajouter l'écouteur d'événement pour changer de langue
        langOption.addEventListener('click', function() {
            changeLanguage(lang.code);
        });
        
        languageSwitcher.appendChild(langOption);
    });
    
    // Ajouter le sélecteur à la barre de navigation
    languageSwitcherLi.appendChild(languageSwitcher);
    navbar.appendChild(languageSwitcherLi);
    
    // Ajouter des styles CSS pour le sélecteur de langue
    addLanguageSwitcherStyles();
}

/**
 * Ajoute les styles CSS pour le sélecteur de langue
 */
function addLanguageSwitcherStyles() {
    // Vérifier si les styles existent déjà
    if (document.querySelector('#language-switcher-styles')) {
        return;
    }
    
    // Créer l'élément style
    const styleElement = document.createElement('style');
    styleElement.id = 'language-switcher-styles';
    
    // Définir les styles
    styleElement.textContent = `
        .language-switcher {
            display: flex;
            gap: 0.5rem;
        }
        
        .lang-option {
            background: none;
            border: 1px solid var(--text-color);
            color: var(--text-color);
            padding: 0.3rem 0.5rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }
        
        .lang-option.active {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
            color: white;
        }
        
        .lang-option:hover:not(.active) {
            border-color: var(--accent-color);
            color: var(--accent-color);
        }
        
        @media (max-width: 768px) {
            .language-switcher-container {
                margin-top: 1rem;
            }
        }
    `;
    
    // Ajouter les styles au document
    document.head.appendChild(styleElement);
}

/**
 * Change la langue du site
 */
function changeLanguage(langCode) {
    // Mettre à jour la langue actuelle
    currentLanguage = langCode;
    
    // Enregistrer la préférence de langue dans localStorage
    localStorage.setItem('language', langCode);
    
    // Mettre à jour les classes actives des boutons de langue
    document.querySelectorAll('.lang-option').forEach(button => {
        if (button.getAttribute('data-lang') === langCode) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Appliquer les traductions
    updatePageLanguage();
}

/**
 * Applique les traductions dans la langue actuelle
 */
function updatePageLanguage() {
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.setAttribute('lang', currentLanguage);
    
    // Mettre à jour tous les éléments avec l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            try {
                const translatedText = getTranslation(key);
                
                // Si le texte traduit contient du HTML, utiliser innerHTML, sinon utiliser textContent
                if (/<[a-z][\s\S]*>/i.test(translatedText)) {
                    element.innerHTML = translatedText;
                } else {
                    element.textContent = translatedText;
                }
            } catch (error) {
                console.error(`Erreur lors de l'application de la traduction pour la clé: ${key}`, error);
                // Utiliser le nom de la clé comme solution de secours
                element.textContent = key;
            }
        }
    });
}

/**
 * Obtient la traduction pour une clé donnée
 */
function getTranslation(key) {
    if (!translations[key]) {
        return key;
    }
    
    if (!translations[key][currentLanguage]) {
        return translations[key][defaultLanguage] || key;
    }
    
    return translations[key][currentLanguage];
}