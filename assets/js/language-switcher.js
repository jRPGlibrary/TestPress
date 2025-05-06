// Language Switcher for GameCritique

// Variables globales
let currentLanguage = localStorage.getItem('language') || 'fr';

// Store translations for all text elements
const translations = {
    // Navigation
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
    
    // Meta tags and page titles
    'site_description': {
        'fr': 'Découvrez les meilleurs RPG et Jeux Indépendants avec des tests complets, des analyses détaillées et des avis d\'experts sur GameCritique.',
        'en': 'Discover the best RPGs and Indie Games with comprehensive reviews, detailed analyses, and expert opinions on GameCritique.'
    },
    'home_page_title': {
        'fr': 'Accueil - GameCritique',
        'en': 'Home - GameCritique'
    },
    'reviews_page_title': {
        'fr': 'Tests de Jeux Vidéo - GameCritique',
        'en': 'Video Game Reviews - GameCritique'
    },
    'reviews_page_description': {
        'fr': 'Découvrez mes analyses détaillées et mes avis sur les dernières sorties et les grands classiques du jeu vidéo, spécialisés dans les RPG et jeux indépendants.',
        'en': 'Discover my detailed analyses and opinions on the latest releases and the great classics of video games, specialized in RPGs and indie games.'
    },
    'interviews_page_title': {
        'fr': 'Interviews - GameCritique',
        'en': 'Interviews - GameCritique'
    },
    'interviews_page_description': {
        'fr': 'Découvrez mes entretiens exclusifs avec les développeurs, artistes et personnalités du monde du jeu vidéo, spécialisés dans les RPG et jeux indépendants.',
        'en': 'Discover my exclusive interviews with developers, artists and personalities from the video game world, specialized in RPGs and indie games.'
    },
    
    // Home page
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
    'indie_games_discover': {
        'fr': 'Jeux Indépendants à découvrir',
        'en': 'Indie Games to discover'
    },
    'read_review': {
        'fr': 'Lire le test',
        'en': 'Read review'
    },
    'stay_informed': {
        'fr': 'Restez Informé',
        'en': 'Stay Informed'
    },
    'newsletter_text': {
        'fr': 'Abonnez-vous à ma newsletter pour recevoir les derniers tests et actualités du monde du jeu vidéo.',
        'en': 'Subscribe to my newsletter to receive the latest reviews and news from the video game world.'
    },
    
    // Footer
    'footer_reference': {
        'fr': 'Votre référence pour les tests de jeux vidéo.',
        'en': 'Your reference for video game reviews.'
    },
    'quick_links': {
        'fr': 'Liens rapides',
        'en': 'Quick links'
    },
    'follow_me': {
        'fr': 'Suivez-moi',
        'en': 'Follow me'
    },
    'copyright': {
        'fr': '© 2025 GameCritique. Tous droits réservés.',
        'en': '© 2025 GameCritique. All rights reserved.'
    },

    // Language switcher
    'language': {
        'fr': 'Langue',
        'en': 'Language'
    },
    'french': {
        'fr': 'Français',
        'en': 'French'
    },
    'english': {
        'fr': 'Anglais',
        'en': 'English'
    },
    
    // Partners page
    'partners_title': {
        'fr': 'Mes Partenaires',
        'en': 'My Partners'
    },
    'partners_subtitle': {
        'fr': 'Découvrez les éditeurs, développeurs et distributeurs qui collaborent avec GameCritique pour vous offrir les meilleures actualités et tests de jeux vidéo.',
        'en': 'Discover the publishers, developers and distributors who collaborate with GameCritique to bring you the best news and video game reviews.'
    },
    'publisher_partners': {
        'fr': 'Éditeurs Partenaires',
        'en': 'Publisher Partners'
    },
    'publisher_partners_text': {
        'fr': 'Je travaille en étroite collaboration avec ces éditeurs pour vous proposer des tests exclusifs et des informations de première main sur leurs jeux.',
        'en': 'I work closely with these publishers to offer you exclusive reviews and first-hand information about their games.'
    },
    'developer_partners': {
        'fr': 'Développeurs Partenaires',
        'en': 'Developer Partners'
    },
    'developer_partners_text': {
        'fr': 'Découvrez les studios de développement avec lesquels je collabore pour vous présenter leurs créations.',
        'en': 'Discover the development studios I collaborate with to present their creations.'
    },
    'distributor_partners': {
        'fr': 'Distributeurs Partenaires',
        'en': 'Distributor Partners'
    },
    'distributor_partners_text': {
        'fr': 'Je collabore avec ces distributeurs pour vous faire découvrir leurs catalogues de jeux et vous proposer des tests exclusifs.',
        'en': 'I collaborate with these distributors to help you discover their game catalogs and offer exclusive reviews.'
    },
    'become_partner': {
        'fr': 'Devenez Partenaire',
        'en': 'Become a Partner'
    },
    'become_partner_text': {
        'fr': 'Vous êtes un éditeur, un développeur ou un distributeur et souhaitez collaborer avec GameCritique ? Contactez-moi pour discuter des opportunités de partenariat.',
        'en': 'Are you a publisher, developer or distributor and would like to collaborate with GameCritique? Contact me to discuss partnership opportunities.'
    },
    'coming_soon': {
        'fr': 'Test à venir prochainement',
        'en': 'Review coming soon'
    },
    
    // Reviews page
    'reviews_title': {
        'fr': 'Mes Tests de Jeux Vidéo',
        'en': 'My Video Game Reviews'
    },
    'reviews_subtitle': {
        'fr': 'Découvrez mes analyses détaillées et mes avis sur les dernières sorties et les grands classiques du jeu vidéo.',
        'en': 'Discover my detailed analyses and opinions on the latest releases and the great classics of video games.'
    },
    'latest_reviews': {
        'fr': 'Derniers Tests',
        'en': 'Latest Reviews'
    },
    'contact_me': {
        'fr': 'Contactez-moi',
        'en': 'Contact me'
    },
    'contact_text': {
        'fr': 'Vous avez des suggestions de jeux à tester ou des commentaires sur mes analyses ? N\'hésitez pas à me contacter pour partager votre avis.',
        'en': 'Do you have suggestions for games to review or comments on my analyses? Feel free to contact me to share your opinion.'
    },
    
    // Game review pages
    'tested_written_by': {
        'fr': 'Testé et écrit par',
        'en': 'Tested and written by'
    },
    'test_based_on': {
        'fr': 'Test basé sur environ 6h de jeu en multijoueur local',
        'en': 'Review based on about 6 hours of local multiplayer gameplay'
    },
    'name': {
        'fr': 'Nom',
        'en': 'Name'
    },
    'publisher': {
        'fr': 'Éditeur',
        'en': 'Publisher'
    },
    'developer': {
        'fr': 'Développeur',
        'en': 'Developer'
    },
    'distributor': {
        'fr': 'Distributeur',
        'en': 'Distributor'
    },
    'platforms': {
        'fr': 'Supports',
        'en': 'Platforms'
    },
    'release_date': {
        'fr': 'Date de sortie',
        'en': 'Release date'
    },
    'official_site': {
        'fr': 'Site officiel',
        'en': 'Official website'
    },
    'introduction': {
        'fr': 'Introduction',
        'en': 'Introduction'
    },
    'conclusion': {
        'fr': 'Conclusion',
        'en': 'Conclusion'
    },
    'pros': {
        'fr': 'Points forts',
        'en': 'Strengths'
    },
    'cons': {
        'fr': 'Points faibles',
        'en': 'Weaknesses'
    },
    'similar_games': {
        'fr': 'Jeux similaires',
        'en': 'Similar games'
    },
    'thanks_reading': {
        'fr': 'Merci d\'avoir lu cette review.',
        'en': 'Thank you for reading this review.'
    }
};

/**
 * Récupère la traduction pour une clé donnée
 * @param {string} key - Clé de traduction
 * @returns {string} - Texte traduit ou clé si non trouvé
 */
function getTranslation(key) {
    if (translations[key] && translations[key][currentLanguage]) {
        return translations[key][currentLanguage];
    }
    return key; // Retourne la clé si traduction non trouvée
}

/**
 * Vérifie si une chaîne contient du HTML valide
 * @param {string} html - Chaîne à vérifier
 * @returns {boolean} - true si HTML valide
 */
function isValidHtml(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.innerHTML === html;
}

/**
 * Convertit les URLs en liens cliquables
 * @param {string} text - Texte à traiter
 * @returns {string} - Texte avec liens cliquables
 */
function convertUrlsToLinks(text) {
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        const href = url.startsWith('www.') ? 'https://' + url : url;
        return `<a href="${href}" class="external-link" target="_blank">${url}</a>`;
    });
}

/**
 * Traite le texte de traduction et gère le contenu HTML correctement
 * @param {string} text - Texte à traiter
 * @returns {string} - Texte traité
 */
function processTranslationText(text) {
    // Vérifie si le texte contient des balises HTML
    const containsHtml = /<[a-z][\s\S]*>/i.test(text);
    
    if (containsHtml) {
        // Si contient du HTML, le valide
        if (!isValidHtml(text)) {
            console.warn('HTML invalide détecté dans la traduction:', text);
            // Tente de corriger les problèmes courants comme les balises non fermées
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = text;
            return tempDiv.innerHTML;
        }
        return text;
    }
    
    // Si pas de HTML, vérifie les URLs et les convertit en liens
    return convertUrlsToLinks(text);
}

/**
 * Met à jour tous les éléments traduisibles sur la page
 */
function updatePageLanguage() {
    console.log('Application des traductions en langue: ' + currentLanguage);
    
    // Met à jour l'attribut lang du HTML
    document.documentElement.setAttribute('lang', currentLanguage);
    
    // Met à jour tous les éléments avec l'attribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            try {
                const translatedText = getTranslation(key);
                const processedText = processTranslationText(translatedText);
                
                // Ajoute un indicateur visuel pour les éléments avec des problèmes HTML en mode développement
                if (processedText !== translatedText && location.hostname === 'localhost') {
                    element.classList.add('translation-fixed');
                    element.title = 'La traduction HTML a été corrigée automatiquement';
                }
                
                // Si le texte traité contient du HTML, utilise innerHTML, sinon utilise textContent
                if (/<[a-z][\s\S]*>/i.test(processedText)) {
                    element.innerHTML = processedText;
                } else {
                    element.textContent = processedText;
                }
            } catch (error) {
                console.error(`Erreur lors de l'application de la traduction pour la clé: ${key}`, error);
                // Repli sur le nom de la clé pour éviter un contenu vide
                element.textContent = key;
            }
        }
    });
    
    // Met à jour les attributs spécifiques
    updateElementsWithAttribute('data-i18n-src', 'src');
    updateElementsWithAttribute('data-i18n-alt', 'alt');
    updateElementsWithAttribute('data-i18n-placeholder', 'placeholder');
    updateElementsWithAttribute('data-i18n-title', 'title');
    
    // Met à jour les balises meta
    updateMetaTags();
}

/**
 * Met à jour les éléments avec un attribut spécifique
 * @param {string} attributeName - Nom de l'attribut à rechercher
 * @param {string} targetAttribute - Attribut à mettre à jour
 */
function updateElementsWithAttribute(attributeName, targetAttribute) {
    document.querySelectorAll(`[${attributeName}]`).forEach(element => {
        const key = element.getAttribute(attributeName);
        if (translations[key]) {
            try {
                const translatedValue = getTranslation(key);
                element.setAttribute(targetAttribute, translatedValue);
            } catch (error) {
                console.error(`Erreur lors de l'application de la traduction pour ${attributeName}: ${key}`, error);
            }
        }
    });
}

/**
 * Met à jour les balises meta en fonction de la langue actuelle
 */
function updateMetaTags() {
    // Met à jour le titre
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.getAttribute('data-i18n')) {
        const key = titleElement.getAttribute('data-i18n');
        titleElement.textContent = getTranslation(key);
    }
    
    // Met à jour la meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metaDescription.getAttribute('data-i18n')) {
        const key = metaDescription.getAttribute('data-i18n');
        metaDescription.setAttribute('content', getTranslation(key));
    }
    
    // Met à jour les balises meta Open Graph et Twitter Card
    document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(meta => {
        if (meta.getAttribute('data-i18n')) {
            const key = meta.getAttribute('data-i18n');
            meta.setAttribute('content', getTranslation(key));
        }
    });
}

/**
 * Change la langue de l'interface
 * @param {string} lang - Code de langue ('fr' ou 'en')
 */
function switchLanguage(lang) {
    if (lang === 'fr' || lang === 'en') {
        // Ajoute une classe temporaire pour indiquer la transition
        document.documentElement.classList.add('language-transition');
        
        // Légère pause avant de changer la langue pour permettre à la transition de commencer
        setTimeout(() => {
            currentLanguage = lang;
            localStorage.setItem('language', lang);
            updatePageLanguage();
            
            // Met à jour le texte du bouton de changement de langue
            const langSwitcher = document.querySelector('.language-toggle');
            if (langSwitcher) {
                langSwitcher.textContent = lang === 'fr' ? 'EN' : 'FR';
                langSwitcher.setAttribute('title', lang === 'fr' ? getTranslation('english') : getTranslation('french'));
            }
            
            // Retire la classe de transition après que les changements sont appliqués
            setTimeout(() => {
                document.documentElement.classList.remove('language-transition');
            }, 300); // Correspond à la durée de la transition CSS
        }, 50);
    }
}

/**
 * Crée et ajoute le bouton de changement de langue s'il n'existe pas déjà
 */
function createLanguageSwitcher() {
    // Crée le sélecteur de langue s'il n'existe pas
    if (!document.querySelector('.language-toggle')) {
        const navbar = document.querySelector('.nav-links');
        if (navbar) {
            // Crée un nouvel élément li pour le bouton de langue
            const langToggleLi = document.createElement('li');
            
            // Crée le bouton de changement de langue
            const langToggle = document.createElement('button');
            langToggle.className = 'language-toggle';
            langToggle.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
            langToggle.setAttribute('aria-label', getTranslation('language'));
            langToggle.setAttribute('title', currentLanguage === 'fr' ? getTranslation('english') : getTranslation('french'));
            
            // Ajoute des styles au bouton
            langToggle.style.background = 'none';
            langToggle.style.border = 'none';
            langToggle.style.color = 'var(--text-color)';
            langToggle.style.fontSize = '1rem';
            langToggle.style.fontWeight = 'bold';
            langToggle.style.cursor = 'pointer';
            langToggle.style.padding = '0.5rem';
            langToggle.style.display = 'flex';
            langToggle.style.alignItems = 'center';
            langToggle.style.justifyContent = 'center';
            langToggle.style.transition = 'color 0.3s ease, background-color 0.3s ease';
            
            // Ajoute le bouton à li, puis li à la barre de navigation
            langToggleLi.appendChild(langToggle);
            navbar.appendChild(langToggleLi);
            
            // Ajoute un écouteur d'événement pour le changement de langue
            langToggle.addEventListener('click', function() {
                const newLang = currentLanguage === 'fr' ? 'en' : 'fr';
                switchLanguage(newLang);
            });
        }
    }
}

// Essaie d'appliquer les traductions le plus tôt possible
try {
    updatePageLanguage();
} catch (e) {
    console.log('L\'application précoce de la traduction a échoué, nouvelle tentative à DOMContentLoaded', e);
}

// Crée et ajoute le bouton de changement de langue lorsque le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - application des traductions');
    
    // Ajoute des transitions CSS pour tous les éléments qui peuvent changer
    // Cela aide à éviter le clignotement lors des changements de langue
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            /* Transitions douces pour les changements de langue */
            [data-i18n], 
            [data-i18n-src], 
            [data-i18n-alt], 
            [data-i18n-placeholder], 
            [data-i18n-title],
            .nav-links a,
            .nav-links li,
            button,
            h1, h2, h3, h4, h5, h6,
            p, span, div, a {
                transition: color 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
            }
            
            /* Éviter le clignotement des images */
            img {
                transition: opacity 0.3s ease;
            }
            
            /* Style pour la transition de langue */
            .language-transition * {
                opacity: 0.8;
                transition: opacity 0.3s ease;
            }
            
            /* Assurer que les éléments de navigation restent visibles pendant la transition */
            .language-transition .nav-links {
                opacity: 1;
            }
        </style>
    `);
    
    // Crée le bouton de changement de langue
    createLanguageSwitcher();
    
    // Applique la langue sauvegardée au chargement de la page
    updatePageLanguage();
});

// Ajoute un événement de chargement de fenêtre pour s'assurer que les traductions sont appliquées après le chargement de toutes les ressources
window.addEventListener('load', function() {
    console.log('Fenêtre entièrement chargée - application des traductions à nouveau');
    // Applique les traductions à nouveau après que tout est chargé
    updatePageLanguage();
});

// Exporte les fonctions pour une utilisation dans d'autres scripts si nécessaire
window.i18n = {
    getTranslation,
    switchLanguage,
    updatePageLanguage
};

// Force un rafraîchissement lorsque la page est chargée depuis le cache (navigation arrière/avant)
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        console.log('Page chargée depuis le cache - rafraîchissement des traductions');
        updatePageLanguage();
    }
});