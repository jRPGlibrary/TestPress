# Instructions pour l'intégration du nouveau compteur de visiteurs

Ce document explique comment intégrer le nouveau compteur de visiteurs sur toutes les pages du site GameCritique.

## Problèmes identifiés dans l'ancien système

1. **Conflit entre les fichiers** - Les fichiers `gtm-visitor-counter.js` et `visitor-counter.js` avaient des fonctionnalités similaires mais utilisaient des noms d'événements différents.
2. **Incohérence dans les noms d'événements** - Les événements `visitor_count_data` et `visitor_count_response` étaient utilisés de manière incohérente.
3. **Délai de secours insuffisant** - Le délai de 3 secondes avant d'utiliser la valeur de secours était insuffisant.
4. **Absence de vérification de GTM** - Aucune vérification n'était faite pour s'assurer que GTM était bien chargé avant d'envoyer des événements.
5. **Logs insuffisants** - Les logs de débogage étaient insuffisants pour identifier l'origine des problèmes.

## Solution apportée

Un nouveau fichier `visitor-counter-new.js` a été créé pour remplacer les deux fichiers existants. Ce fichier combine les fonctionnalités des deux scripts en une solution unifiée et robuste.

## Étapes d'intégration

1. **Supprimer les anciens scripts** - Dans chaque page HTML, supprimer les lignes suivantes :
   ```html
   <script src="gtm-visitor-counter.js" defer></script>
   <script src="visitor-counter.js" defer></script>
   ```

2. **Ajouter le nouveau script** - À la place, ajouter la ligne suivante :
   ```html
   <script src="visitor-counter-new.js" defer></script>
   ```

3. **Vérifier l'élément HTML** - S'assurer que chaque page contient bien l'élément HTML suivant :
   ```html
   <div class="visitor-counter-container">
       <p data-i18n="visitor_count">Nombre de visiteurs: <span id="visitor-counter">0</span></p>
   </div>
   ```

4. **Vérifier le CSS** - S'assurer que le fichier `visitor-counter.css` est bien inclus dans chaque page :
   ```html
   <link rel="stylesheet" href="visitor-counter.css">
   ```

5. **Tester le compteur** - Après avoir effectué ces modifications, ouvrir la page `test-nouveau-compteur.html` pour vérifier que le compteur fonctionne correctement.

## Fonctionnalités du nouveau compteur

- **Initialisation automatique** - Le compteur s'initialise automatiquement au chargement de la page.
- **Vérification de GTM** - Le script vérifie si Google Tag Manager est chargé et le charge si nécessaire.
- **Stockage local** - Le nombre de visiteurs est stocké localement pour être affiché même si GTM ne répond pas.
- **Réinitialisation à minuit** - Le compteur se réinitialise automatiquement à minuit.
- **Logs détaillés** - Des logs détaillés sont disponibles pour faciliter le débogage.

## Configuration de Google Tag Manager

Pour que le compteur fonctionne correctement avec Google Tag Manager, il faut configurer les événements suivants dans GTM :

1. **new_visitor** - Événement envoyé lorsqu'un nouveau visiteur arrive sur le site.
2. **get_visitor_count** - Événement envoyé pour demander le nombre de visiteurs.
3. **visitor_count_response** - Événement reçu contenant le nombre de visiteurs.
4. **reset_visitor_count** - Événement envoyé pour réinitialiser le compteur à minuit.

Ces événements doivent être configurés dans GTM pour que le compteur fonctionne correctement avec Google Analytics.