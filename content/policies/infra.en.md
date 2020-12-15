---
author: mb
date: 2015-01-27T11:27:27-04:00
menu: policies
short: Description of our main application and backup infrastructure providers
sitemapShow: false
slug: infra
tag: infrastructure
tagColor: green
title: Infra & security
weight: 3
---

Pilot is hosted by Amazon Web Services.
Part of the system administration is delegated to the Heroku service which acts as Paas (heroku.com, member of the SalesForce group)

## Hosting Security :

Pilot benefits from the security requirements of the Amazon Web Services platform, details of which are available here: http://aws.amazon.com/fr/security/

Our provider has secure infrastructures with controlled access, flow monitoring and permanent infrastructure.
All information is available here: http://aws.amazon.com/fr/security/

Certifications http://aws.amazon.com/fr/compliance/ :
ISO 27001 and 9001
SOC 1 and SOC 2/SSAE 16/ISAE 3402 (Previously SAS 70 Type II) PCI Level 1
FISMA Moderate
Sarbanes-Oxley (SOX)

## Security

Our passwords, stored encrypted in our database, must have a minimum of 6 characters.
Our backups are hourly, daily and monthly and kept at multiple points in Europe.

<!-- Une sauvegarde de la base de données est réalisée toutes les heures avec rétention sur 150 heures.

Une sauvegarde quotidienne (6h, heure de Paris) avec rétention sur 90 jours.

Une sauvegarde mensuelle (premier jours du mois) avec rétentions sur 12 mois.

Une sauvegarde des fichiers médias est réalisée chaque heure.

Les sauvegardes sont dupliquées en plusieurs points en Europe (Irlande, France, Allemagne)

Des procédures automatisées permettent de contrôler que les mécanismes de sauvegardes fonctionnent correctement.

Nous bénéficions d’un Plan de Reprise d’Activité automatisé activant un serveur applicatif secondaire en cas de défaillance majeure du serveur principal.

Le serveur de secours est activé une fois par mois pour contrôle. -->
