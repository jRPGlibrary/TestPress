# Documentation du Compteur de Visiteurs Centralisé

## Vue d'ensemble

Le compteur de visiteurs a été modifié pour utiliser Google Analytics comme source de données centralisée au lieu du stockage local (localStorage). Cette modification permet à tous les utilisateurs de voir le même compteur global, car les données sont maintenant stockées en ligne dans Google Analytics plutôt que localement sur chaque navigateur.

## Fonctionnement

### Architecture

1. **Google Tag Manager (GTM)** sert d'intermédiaire entre le site web et Google Analytics.
2. **Google Analytics (GA)** stocke le nombre de visiteurs de manière centralisée.
3. Les scripts **google-analytics.js** et **visitor-counter-new.js** ont été modifiés pour communiquer avec GA via GTM.

### Flux de données

1. Lorsqu'un utilisateur visite le site pour la première fois dans une session:
   - Un événement `new_visitor` est envoyé à GTM
   - GTM transmet cet événement à GA qui incrémente le compteur global

2. Pour afficher le compteur:
   - Le site envoie un événement `request_visitor_count_from_ga` à GTM
   - GTM récupère la valeur depuis GA
   - GTM renvoie la valeur via un événement `visitor_count_response`
   - Le script met à jour l'affichage avec cette valeur

3. À minuit:
   - Un événement `reset_visitor_count_in_ga` est envoyé à GTM
   - GTM réinitialise le compteur dans GA

## Configuration requise dans Google Tag Manager

Pour que le compteur fonctionne correctement, les événements suivants doivent être configurés dans GTM:

1. **request_visitor_count_from_ga** - Déclenche une requête pour récupérer le nombre de visiteurs depuis GA
2. **increment_visitor_count_in_ga** - Incrémente le compteur dans GA
3. **reset_visitor_count_in_ga** - Réinitialise le compteur dans GA
4. **visitor_count_response** - Renvoie le nombre de visiteurs au site

## Avantages de cette approche

- Tous les utilisateurs voient le même compteur global
- Les données sont persistantes et ne dépendent pas du navigateur de l'utilisateur
- Le compteur est plus précis car il compte réellement les visiteurs uniques
- Les données peuvent être analysées dans Google Analytics

## Dépannage

Si le compteur ne s'affiche pas correctement:

1. Vérifiez que Google Tag Manager est correctement chargé
2. Assurez-vous que les événements sont correctement configurés dans GTM
3. Consultez la console du navigateur pour voir les messages de débogage
4. Vérifiez que Google Analytics reçoit et traite correctement les événements