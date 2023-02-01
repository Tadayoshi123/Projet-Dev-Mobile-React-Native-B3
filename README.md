# Projet-Dev-Mobile-React-Native-B3

## Technologies utilisées
- React Native
- Android

## Storm le clone de Steam :
### Pour le 19 Décembre :
- Login/Register
- Lien avec les APIs de Steam : 
    - https://api.steampowered.com/ISteamApps/GetAppList/v2/ pour récupérer la liste des produits
    - https://store.steampowered.com/api/appdetails?appids=? pour récupérer les détails d'un produit
- Home (liste des produits) :
    - Affichage de la liste des produits par catégorie
    - Recherche par nom

### Pour le 9 Janvier :
- Détail d'un produit (au moins le nom, le prix et la description et les catégories)
- Panier
- Visuel de l'app

### BONUS :
- Navbar (avec les catégories) + Nouvelle page pour chaque catégorie (avec la liste des produits de cette catégorie)
- Profil (liste de ses produits, image de profil, amis, etc.)
- Amis (ajout/suppression, liste d'amis, profil d'un ami, liste de ses produits, messagerie)
- Détail d'un produit avancé (plus d'infos, revues des produits, etc.)


### Résultat 02/02/2023 :
- Pour l'utilisation de l'application, il est nécessaire d'utiliser SDK 33 pour lancer l'application Android et posséder un émulateur avec la même version.
- Pour lancer l'application, il suffit de lancer `npx react-native start` depuis un terminal dans le dossier du projet et de lancer l'application sur l'émulateur depuis un autre terminal dans le dossier avec la commande `npx react-native run android`.
- Ce qui est réalisé : 
    - Login : Fait à moitié car il reprend ce qui a été fait en cours avec le token, très rapide mais si c'était pas super compliqué à faire, j'aurais utiliser une API de Steam pour le login.
    - Lien avec les APIs de Steam : Fait, j'ai utilisé les API de Steam pour récupérer la liste des produits et les détails d'un produit. Comme il y avait énormément de donnée, il a fallu faire du "scrapping" pour récupérer seulement une partie des données sans quoi l'application ne fonctionnerait pas.
    - Home (liste des produits) : Fait à 80%, il manque la recherche par nom. J'aurai aimé faire une recherche par catégorie ou bien une page pour chaque catégorie mais je n'ai pas eu le temps, il manque aussi la page de souhaits.
    - Détail d'un produit : Fait, peut être que si j'avais le temps j'aurais implémenté les extraits vidéos des produits et rajouter des liens vers les dlcs et/ou des produits similaires.
    - Panier : Fait, il manque juste l'ajout des produits achetés dans la bibliothèque de l'utilisateur.
    - Visuel de l'app: Bon... Je me suis donné mais React-Native c'est pas facile et mon excuse c'est que Steam Mobile est moche.

- Ce qui n'est pas réalisé :
    - Register : Y'en a juste pas car comme expliqué plus haut, j'ai utilisé l'API du cours pour le login.
    - Barre de recherche par nom : Pas réussi à la faire fonctionner mais j'ai laisser le code à l'intérieur du projet pour que regarder ce que j'ai tenté de faire.
    - Navbar avec les catégories : Pas eu le temps de le faire.
    - Bibliothèque de l'utilisateur : J'ai fait quelque chose rapidement mais il manque beaucoup de choses.

## Conclusion :
Première fois que j'essaie de réaliser un projet perso sous forme d'application mobile, gros challenges rencontrés tout le long du projet. 
J'ai appris beaucoup de choses sur React-Native et sur le développement mobile en général. J'ai eu un peu de mal à faire fonctionner l'application sur Android, j'ai dû passer beaucoup de temps à chercher des solutions sur internet et à tester des choses. J'ai aussi eu beaucoup de mal à faire fonctionner les API de Steam, j'ai dû faire du "scrapping" pour récupérer les données que je voulais pour éviter la surcharge de l'application et de me faire kick temporairement des APIs de Steam. Un peu du mal avec styled-components, plein de fonctionnalités du CSS qui marchaient pas et j'ai pas pu tout faire comme je le voulais.

Je suis néanmoins satisfait de ce que j'ai fait et peut-être qu'un jour je tenterais de refaire ce projet et de le finir à 100%.