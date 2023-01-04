import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Avatar from '../components/avatar';
import {SectionList, TouchableOpacity} from 'react-native';
import ContainerView from '../components/styledComponents/home/containerview';
import {STEAM_KEY} from '@env';

/* APIList est une constante qui contient l'URL qui va faire appel à l'API GetAppList de Steam pour récupérer une liste de produits Steam
   Elle va retourner un objet JSON avec une propriété applist qui contient un tableau d'objets JSON (apps) qui contient les propriétés appid et name
*/
const APIList = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';

/* APIDetails est une constante qui contient l'URL qui va faire appel à l'API appdetails de Steam pour récupérer les détails d'un produit Steam
   Elle va retourner un objet JSON avec une propriété appid qui contient un objet JSON qui contient les propriétés
   success qui est un booléen qui indique si l'appel à l'API a réussi ou non
    data qui contient un objet JSON qui contient les propriétés :
      type qui est une chaîne de caractères qui indique le type de produit (game, DLC, ...)
      name qui est une chaîne de caractères qui indique le nom du produit
      steam_appid qui est un nombre qui indique l'ID du produit
      required_age qui est un nombre qui indique l'âge minimum requis pour jouer au produit
      is_free qui est un booléen qui indique si le produit est gratuit ou non
      detailed_description qui est une chaîne de caractères qui indique la description détaillée du produit
      about_the_game qui est une chaîne de caractères qui indique la description du produit
      short_description qui est une chaîne de caractères qui indique une description courte du produit
      supported_languages qui est une chaîne de caractères qui indique les langues supportées par le produit
      header_image qui est une chaîne de caractères qui indique l'URL de l'image d'en-tête du produit
      website qui est une chaîne de caractères qui indique l'URL du site web du produit
      pc_requirements qui est un objet JSON qui contient les propriétés :
        minimum qui est une chaîne de caractères qui indique les spécifications minimales requises pour jouer au produit sur PC
        recommended qui est une chaîne de caractères qui indique les spécifications recommandées pour jouer au produit sur PC
      mac_requirements qui est un objet JSON qui contient les propriétés :
        minimum qui est une chaîne de caractères qui indique les spécifications minimales requises pour jouer au produit sur Mac
        recommended qui est une chaîne de caractères qui indique les spécifications recommandées pour jouer au produit sur Mac
      linux_requirements qui est un objet JSON qui contient les propriétés :
        minimum qui est une chaîne de caractères qui indique les spécifications minimales requises pour jouer au produit sur Linux
        recommended qui est une chaîne de caractères qui indique les spécifications recommandées pour jouer au produit sur Linux
      developers qui est un tableau d'objets JSON qui contient les propriétés :
        id qui est un nombre qui indique l'ID du développeur
        name qui est une chaîne de caractères qui indique le nom du développeur
      publishers qui est un tableau d'objets JSON qui contient les propriétés :
        id qui est un nombre qui indique l'ID de l'éditeur
        name qui est une chaîne de caractères qui indique le nom de l'éditeur
      price_overview qui est un objet JSON qui contient les propriétés :
        currency qui est une chaîne de caractères qui indique la devise du prix
        initial qui est un nombre qui indique le prix initial du produit
        final qui est un nombre qui indique le prix final du produit
        discount_percent qui est un nombre qui indique le pourcentage de réduction du produit
      packages qui est un tableau de nombres qui indique les IDs des packages du produit
      package_groups qui est un tableau d'objets JSON qui contient les propriétés :
        name qui est une chaîne de caractères qui indique le nom du package
        title qui est une chaîne de caractères qui indique le titre du package
        description qui est une chaîne de caractères qui indique la description du package
        selection_text qui est une chaîne de caractères qui indique le texte de sélection du package
        save_text qui est une chaîne de caractères qui indique le texte de sauvegarde du package
        display_type qui est un nombre qui indique le type d'affichage du package
        is_recurring_subscription qui est un booléen qui indique si le package est un abonnement récurrent ou non
        subs qui est un tableau d'objets JSON qui contient les propriétés :
          packageid qui est un nombre qui indique l'ID du package
          percent_savings_text qui est une chaîne de caractères qui indique le pourcentage de réduction du package
          percent_savings qui est un nombre qui indique le pourcentage de réduction du package
          option_text qui est une chaîne de caractères qui indique le texte de l'option du package
          option_description qui est une chaîne de caractères qui indique la description de l'option du package
          can_get_free_license qui est un booléen qui indique si l'option du package peut être obtenue gratuitement ou non
          is_free_license qui est un booléen qui indique si l'option du package est gratuite ou non
          price_in_cents_with_discount qui est un nombre qui indique le prix en centimes du package avec réduction
      platforms qui est un objet JSON qui contient les propriétés :
        windows qui est un booléen qui indique si le produit est disponible sur Windows ou non
        mac qui est un booléen qui indique si le produit est disponible sur Mac ou non
        linux qui est un booléen qui indique si le produit est disponible sur Linux ou non
      metacritic qui est un objet JSON qui contient les propriétés :
        score qui est un nombre qui indique le score de Metacritic du produit
        url qui est une chaîne de caractères qui indique l'URL de Metacritic du produit
      categories qui est un tableau d'objets JSON qui contient les propriétés :
        id qui est un nombre qui indique l'ID de la catégorie
        description qui est une chaîne de caractères qui indique la description de la catégorie
      genres qui est un tableau d'objets JSON qui contient les propriétés :
        id qui est un nombre qui indique l'ID du genre
        description qui est une chaîne de caractères qui indique la description du genre
      screenshots qui est un tableau d'objets JSON qui contient les propriétés :
        id qui est un nombre qui indique l'ID de la capture d'écran
        path_thumbnail qui est une chaîne de caractères qui indique l'URL de la capture d'écran en miniature
        path_full qui est une chaîne de caractères qui indique l'URL de la capture d'écran en taille réelle
      movies qui est un tableau d'objets JSON qui contient les propriétés :
        id qui est un nombre qui indique l'ID de la vidéo
        name qui est une chaîne de caractères qui indique le nom de la vidéo
        thumbnail qui est une chaîne de caractères qui indique l'URL de la vidéo en miniature
        webm qui est un objet JSON qui contient les propriétés :
          480 qui est une chaîne de caractères qui indique l'URL de la vidéo en format WebM en 480p
          max qui est une chaîne de caractères qui indique l'URL de la vidéo en format WebM en taille réelle
        highlight qui est un booléen qui indique si la vidéo est une vidéo en évidence ou non
      recommendations qui est un objet JSON qui contient les propriétés :
        total qui est un nombre qui indique le nombre total de recommandations
      achievements qui est un objet JSON qui contient les propriétés :
        total qui est un nombre qui indique le nombre total de succès
      release_date qui est un objet JSON qui contient les propriétés :
        coming_soon qui est un booléen qui indique si le produit est bientôt disponible ou non
        date qui est une chaîne de caractères qui indique la date de sortie du produit
      support_info qui est un objet JSON qui contient les propriétés :
        url qui est une chaîne de caractères qui indique l'URL de la page de support du produit
        email qui est une chaîne de caractères qui indique l'adresse e-mail de support du produit
      background qui est une chaîne de caractères qui indique l'URL de l'image de fond du produit
      content_descriptors qui est un objet JSON qui contient les propriétés :
        ids qui est un tableau de nombres qui indique les IDs des descripteurs de contenu du produit
        notes qui est une chaîne de caractères qui indique les notes des descripteurs de contenu du produit
  */
const APIDetails = 'https://store.steampowered.com/api/appdetails?appids=';

// L'objectif final de ce script est d'afficher les jeux Steam (pas les DLC, les autres types de produits) dans des SectionList qui seront triées par genre (si un jeu possède plusieurs genres, il sera affiché dans toutes les sections correspondantes). Pour ce faire, nous allons utiliser une fonction qui va récupérer les données des APIs Steam et les traiter pour les rendre plus facilement utilisables.