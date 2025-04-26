# Optimisation du code de GameCritique

## Résumé des modifications

Le code du site a été optimisé pour améliorer les performances, réduire la duplication et faciliter la maintenance. Voici les principales modifications apportées :

### 1. Unification des fichiers CSS

Tous les styles CSS ont été regroupés dans un seul fichier :

- **`/assets/css/styles-unified.css`** : Regroupe tous les styles précédemment répartis dans :
  - `styles.css`
  - `mobile-responsive.css`
  - `game-review.css`
  - `review-images-fix.css`
  - `visitor-counter.css`

### 2. Optimisation des fichiers JavaScript

Les scripts JavaScript ont été réorganisés et optimisés :

- **`/assets/js/scripts-unified.js`** : Regroupe les fonctionnalités communes (thème, Google Analytics, Google Tag Manager)
- **`/assets/js/visitor-counter.js`** : Version optimisée du compteur de visiteurs
- **`/assets/js/language-switcher.js`** : Version optimisée du changeur de langue

### 3. Création d'un modèle de page

Un modèle de page HTML a été créé pour standardiser la structure des pages :

- **`/assets/templates/page-template.html`** : Modèle à utiliser pour créer de nouvelles pages

## Comment utiliser les fichiers optimisés

Pour mettre à jour les pages existantes, suivez ces étapes :

### 1. Mettre à jour les liens CSS

Remplacez toutes les balises de style actuelles par :

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="/assets/css/styles-unified.css">
```

### 2. Mettre à jour les liens JavaScript

Remplacez tous les scripts actuels par :

```html
<script src="/assets/js/scripts-unified.js" defer></script>
<script src="/assets/js/language-switcher.js" defer></script>
<script src="/assets/js/visitor-counter.js" defer></script>
```

### 3. Pour créer de nouvelles pages

Utilisez le modèle de page situé dans `/assets/templates/page-template.html` comme base pour toutes les nouvelles pages.

## Avantages de cette optimisation

- **Réduction du nombre de requêtes HTTP** : Moins de fichiers à charger
- **Meilleure organisation du code** : Structure plus claire et plus facile à maintenir
- **Réduction de la duplication** : Le code commun est centralisé
- **Amélioration des performances** : Chargement plus rapide des pages
- **Facilité de maintenance** : Modifications plus simples à appliquer à l'ensemble du site

## Fichiers qui peuvent être supprimés

Une fois que toutes les pages ont été mises à jour pour utiliser les nouveaux fichiers, les fichiers suivants peuvent être supprimés :

- `styles.css`
- `mobile-responsive.css`
- `game-review.css`
- `review-images-fix.css`
- `visitor-counter.css`
- `theme-switcher.js`
- `google-analytics.js`
- `google-tag-manager.js`
- `visitor-counter-new.js`
- `language-switcher.js` (celui à la racine)

**Note** : Ne supprimez ces fichiers qu'après avoir vérifié que toutes les pages utilisent bien les nouveaux fichiers optimisés.