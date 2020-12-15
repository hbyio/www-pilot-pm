---
author: mb
date: 2015-01-27T11:27:27-04:00
menu: policies
short: Description de nos principaux fournisseurs d'infrastructure applicative et de sauvegarde
sitemapShow: false
slug: infra
tag: infrastructure
tagColor: green
title: Infrastructure & securité
weight: 3
---

Pilot est hébergé par les services d’Amazon Web Services.
Une partie de l’administration système est déléguée au service Heroku qui agit en tant que Paas (heroku.com, membre du groupe SalesForce)

## Sécurité Hébergement :

Pilot bénéficie des exigences de sécurité de la plateforme Amazon Web Services dont les détails sont accessibles ici : http://aws.amazon.com/fr/security/

Notre prestataire possède des infrastructures sécurisées avec accès contrôlés, surveillance des flux et des infrastructures permanente.
Toutes les informations sont présentées ici : http://aws.amazon.com/fr/security/

Certifications http://aws.amazon.com/fr/compliance/ :
_ ISO 27001 et 9001
_ SOC 1 and SOC 2/SSAE 16/ISAE 3402 (Previously SAS 70 Type II) PCI Level 1
_ FISMA Moderate
_ Sarbanes-Oxley (SOX)

## Pérennité des données

Nos mots de passe, stockés encryptés dans notre base de données, doivent avoir 6 caractères minimum.

Nos sauvegardes sont horaires, journalières et mensuelles et conservées en de multiples points en Europe.

<!-- Une sauvegarde de la base de données est réalisée toutes les heures avec rétention sur 150 heures.

Une sauvegarde quotidienne (6h, heure de Paris) avec rétention sur 90 jours.

Une sauvegarde mensuelle (premier jours du mois) avec rétentions sur 12 mois.

Une sauvegarde des fichiers médias est réalisée chaque heure.

Les sauvegardes sont dupliquées en plusieurs points en Europe (Irlande, France, Allemagne)

Des procédures automatisées permettent de contrôler que les mécanismes de sauvegardes fonctionnent correctement.

Nous bénéficions d’un Plan de Reprise d’Activité automatisé activant un serveur applicatif secondaire en cas de défaillance majeure du serveur principal.

Le serveur de secours est activé une fois par mois pour contrôle. -->
