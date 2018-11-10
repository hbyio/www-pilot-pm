---
author: mb
date: 2018-01-27
draft: false
illustration: items.png
menu: docs
slug: items
title: Contenus
weight: 2
---

## Qu'est ce qu'un contenu ?

Un contenu est le plus simple élément géré par Pilot. C'est une unité éditoriale compréhensible hors contexte.

<!--more-->

Un article, une interview, un tweet sont des contenus au sens de l'application à l'inverse d'un chapô ou un d'un paragraphe d'article.

Chaque contenu a un cycle de vie propre (brouillon > à valider > à publier > ..) ainsi que ses propres commentaires, versions, partages.

Des contenus peuvent être rassemblés dans un <a href="/resources/projects">projet</a> et/ou dans un <a href="/resources/channels">canal</a>.

## Créer un contenu

![vue de détail d'un contenu](/img/screenshots/additem.png)

Cliquez sur "Ajouter un contenu" puis sélectionnez le type de contenu que vous souhaitez créer.

Dans notre exemple nous en avons 3 par défaut. Le type "Article" est celui par défaut de l'application, il est constitué d'un champ titre et d'un champ contenu.

## Vue de détail d'un contenu

Plus loin dans la documentation nous nous référerons à cette vue comme "vue de détail" d'un contenu.

![vue de détail d'un contenu](/img/screenshots/item_detail.png)

## Les outils spécifiques aux contenus

<img style="float:right; margin-left:1em;" src="/img/screenshots/item_detail_menu.png" alt="">

### Informations

Ce menu permet d'afficher les informations générales relatives au contenu :

- Le projet auquel le contenu est affecté
- Le canal où le contenu sera publié
- Les éventuels responsables du document
- Les contenus liés (dans le cas de traduction par exemple pour avoir une référence au "master" ou pour lier un brief au contenu rédigé)

### Versions et différences

A chaque sauvegarde d'un contenu nous créons une "version mineure" (1.1, 1.2, etc ..) avec l'heure de la création et la référence à la personne ayant créé cette version.

Il est impossible de sauvegarder un document sans créer de version. C'est le concept "d'immutabilité" d'un document qui vous permet de savoir avec assurance ce qui a été fait, par qui et quand sur un texte.

Chaque version peut être "restaurée" pour revenir à un moment dans le passé et effacer les modifications qui auraient pu être introduite sur une version récente. La restauration entraîne la création d'une nouvelle version avec toutes les informations nécessaires à sa compréhension (qui a restauré, à partir de quelle version et quand). **Ainsi aucune information n'est pas perdue**

Afin de bénéficier totalement de ce système de version l'application propose une "vue des différences" entre versions afin de vous permettre de savoir très facilement et très rapidement ce qui a été ajouté ou supprimée d'une version à l'autre

<img src="/img/screenshots/diff.png" alt="vue des différences" />

### Commentaires

Vous pourrez discuter de l'évolution du document grâce à cette fonctionnalité qui offre en outre un système simple de mention et d'alerte des membres de l'équipe.

L'avantage indéniable de ce type d'outil est de pouvoir consulter l'historique d'un document au sein de l'équipe.

### Tâches

A chaque contenu vous pourrez affecter des tâches librement. Chacune de ces tâches aura une date de rendu et un ou plusieurs responsables.

### Partage

Le partage avec validation externe est utile pour interroger des personnes ne possédant pas de compte sur Pilot. Il est possible de permettre à votre interlocuteur de modifier le document envoyé. Lorsqu'il vous le renverra vous pourrez consulter les modifications apportées et le sintégrer, dans l'outil, une par une ou globalement en créant ue nouvelle version.

### Fichiers liés

Vous pouvez lier un ou plusieurs fichiers à votre contenu (**sans limite de taille de document**) et ce de deux manières :

1. En uploadant directement un fichier (bouton "Ajouter un fichier") : Le fichier sera lié exclusivement à ce contenu. On ne pourra pas le "lier" depuis d'autres contenus.

2. En faisant un lien depuis la médiathèque (bouton "chercher dans la médiathèque") : Le fichier est dans la médiathéque, peut être attaché à d'autres contenus, et n'est pas supprimé quand le contenu est supprimé.
