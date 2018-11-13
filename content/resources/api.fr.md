---
author: mb
date: 2018-01-27
draft: true
menu: docs
slug: api
title: api
weight: 20
---

## Introduction

Pilot propose une API Rest aux applications tierces pour leur permettre d'accèder aux contenus gérés par l'application.

<div class="alert alert-info" role="alert">Cette documentation concerne la V2 (Beta) de l'API</div>

<div class="alert alert-warning" role="alert">La v1 atteindra son terme le 12/12/2016 à minuit date à laquelle elle ne sera plus accessible.</div>

Le principal endpoint est :
`https://app.pilot.pm/publicapi/v2/`

La réponse est sous format JSON uniquement.

## Authentification & HTTPS

L'authentification se fera par token. Un token peut être généré par un administrateur du compte Pilot concerné pour chaque canal.
Un token est obligatoire à chaque requête. En l'absence un `HTTP 401 Unauthorized` sera retourné.

Attention : nous acceptons uniquement les requêtes HTTPS. Merci de bien prendre garde de ne pas faire de requête en HTTP. Cela aurait pour conséquence de transmettre en clair le token.
Si c'est le cas générez simplement un nouveau token.

Exemple de requête avec l'outil Curl (tous les exemples seront basés sur cet outil) :

<pre>
  <code>
    curl \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
    --request GET 'https://app.pilot.pm/publicapi/v2/items/'
  </code>
</pre>

## GET items/

Ce endpoint permet de récupérer tous les contenus auxquels le token a accès.

Un token peut être associé à un canal, auquel cas la réponse contiendra tous les contenus de ce canal.

Si le token est associé à plusieurs canaux tous les contenus de tous les canaux seront renvoyés (voir GET channels/ ci-dessous pour lister les canaux accessibles au token)

La réponse JSON contient le nombre total de contenus renvoyés (`count`).

La liste est paginée avec 10 résultats par page. `next` et `previous` permettent de circuler dans les pages de résultats.

Exemple de requête

<pre>
  <code>
    curl \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
    --request GET 'https://app.pilot.pm/publicapi/v2/items/'
  </code>
</pre>

Exemple de réponse

<pre>  
{
    "count": 18,
    "next": "http://127.0.0.1:8000/publicapi/v2/items/?page=2",
    "previous": null,
    "results": [...]
}
</pre>

### Filtrer les résultats

Vous pouvez filtrer les résultats grâce aux paramètres suivants :

####`state`

Plusieurs états de workflow sont disponibles pour un contenu

<ul>
  <li>'idea' (contenu en phase de réflexion)</li>
  <li>'rejected' (contenu refusé, ne passera pas en production)</li>
  <li>'edition_ready' (contenu en cours de production)</li>
  <li>'validation_ready' (contenu en cours de validation)</li>
  <li>'publication_ready' (contenu validé, prêt pour publication)</li>
  <li>'published' (contenu publié)</li>
  <li>'unpublished' (contenu dépublié)</li>
</ul>

En terme de logique métier et pour le moment le principal filtre intéressant est 'publication_ready' qui permet de récupérer les contenus à publier

Exemple de requête pour récupérer tous les contenus marqués 'A publier'

<pre>
  <code>
    curl \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
    --request GET 'https://app.pilot.pm/publicapi/v2/items/?state=publication_ready'
  </code>
</pre>

####`channel`

Si votre token à accès à plusieurs canaux ou si le canal auquel vous avez accès possède des canaux enfants, vous pouvez filtrer par un ou plusieurs canaux.

Exemple de requête pour un canal

<pre>
  <code>
    curl \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
    --request GET 'https://app.pilot.pm/publicapi/v2/items/?state=publication_ready&channel=204'
  </code>
</pre>

Exemple de requête pour plusieurs canaux

<pre>
  <code>
    curl \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
    --request GET 'https://app.pilot.pm/publicapi/v2/items/?state=publication_ready&channel=204&channel=103'
  </code>
</pre>

####`publication_dt`

Filtre selon la date de publication

Il doit être obligatoirement formaté comme suit : 'YYYY-MM-DD'

Exemple de requête

<pre>
  <code>
    curl \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
    --request GET 'https://app.pilot.pm/publicapi/v2/items/?state=publication_ready&channel=204&publication_dt=2016-04-05'
  </code>
</pre>

Deux paramètres supplémentaires sont disponibles pour délimiter des plages de date :

`publication_dt__gte` (greater than or equal) et `publication_dt__lte` (less than or equal): chacun de ces paramètres étant, comme son acronyme l'indique, inclusif.

Exemple pour récupérer les items dont la date de publication est comprise entre le premier et 31 mars 2016

`items?publication_dt__gte=2016-03-01&publication_dt__lte=2016-03-31`

### Exemple

#### Récupérer les contenus prêts à publier aujourd'hui pour le canal 204

La requête la plus fréquente sera celle permettant de récupérer les contenus marqués comme "A publier" pour aujourd'hui

En supposant que vous avez déjà généré la date du jour au format demandé ("YYYY-MM-DD"). La date du jour sera le 5 avril 2016 dans notre exemple.

Exemple de requête

<pre>
  <code>
    curl \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
    --request GET 'https://app.pilot.pm/publicapi/v2/items/?state=publication_ready&channel=204&publication_dt=2016-04-05'
  </code>
</pre>

## GET items/{id}

Permet de récupérer un item (contenu)

### Description des attributs JSON

#### id

Entier - ID unique du contenu sur la plateforme

#### url

Endpoint de détail de la ressource

#### updated_at

Date de dernière mise à jour

#### type

Le type du contenu.

`is_custom` : (Boolean) Indique si le type de contenu est défini par l'utilisateur ou non.

`technical_name` : Nom technique du type de contenu, sera permanent tout au long de son cycle de vie.

`name` : Nom associé à ce type de contenu, définit par l'utilisateur qui peut le modifier comme il le souhaite.

   <pre>
      "type": {
        "is_custom": false,
        "technical_name": "default",
        "name": "Classique"
      }</pre>

#### state

L'état (workflow) actuel du contenu

#### publication_dt

La date de publication prévue.

#### state_dates

Les différents états _datés_ du contenu. Cet attribut ne présente pas tous les états dans lequel le contenu peut être.

#### tags

Liste des tags du contenu

#### files

Liste des fichiers liés au contenu.

   <div class="alert alert-danger" role="alert">
    <p><strong>Attention</strong></p>
    <p> Il n'est pas permis d'utiliser ces URLS directement. Vous devez télécharger la ressource.</p>
    <p> Ces URL seront prochainement délivrées avec timestamp ce qui les rendra obsolètes en quelques heures.</p>
  </div>
   <pre>
      "files": [
          {
            "url": "https://pilotapp-master-bucket.s3.amazonaws.com/assets/11aefer35fez/1541/11_1541_original.jpg",
            "title": "Marketing team at CES booth",
            "filetype": "image",
            "size": 230684,
            "extension": "jpg"
          },
          {
            "url": "https://pilotapp-master-bucket.s3.amazonaws.com/assets/11aefer35fez/1654/11_1654_original.pdf",
            "title": "CEO Speech 2016 Management",
            "filetype": "pdf",
            "size": 53807,
            "extension": "pdf""
          }
        ],
   </pre>

#### campaign

La campagne liée au contenu

#### channel

Le canal lié au contenu

#### targets

Liste des cibles marketing liées au contenu

#### cfields

"Content fields" : Liste des champs éditoriaux du contenu.

Cet attribut est primordial car il contient l'ensemble des contenus exploitables du document.

Ces champs de contenu sont définis par l'utilisateur pour qualifier ce contenu. L'utilisateur peut ajouter des champs date, file upload, select, etc ..

Vous devez vous entendre avec l'administrateur du compte Pilot pour définir les champs qui pourront être utilisés en fonction des types de contenus.

Chaque content field aura obligatoirement 3 attributs :

      "field_label": L'intitulé du champ, défini par l'utilisateur,
      "field_name": Nom technique du champ,
      "field_content": Le contenu tel que saisi par l'utilisateur.

A l'exception du content field `content` qui en aura 4 :

      "field_label": L'intitulé du champ, défini par l'utilisateur,
      "field_name": Nom technique du champ,
      "field_content_raw": Le contenu au format markdown
      "field_content_html": Le contenu rendu en HTML pour publication immédiate

<div class="alert alert-warning" role="alert">
  <p><strong>Attention</strong></p>
  <p> A date nous pensons retourner obligatoirement un champ <code>title</code> et un champ <code>content</code>. </p>
  <p>Or, dans certaines situations, un 'contenu' pour un administrateur Pilot peut être, par exemple, 3 champs texte. </p>
  <p>De fait le champ 'content' sera trop restrictif et pourrait être supprimé dans le formulaire. </p>
  <p>La façon dont vous consommez l'API doit prendre en compte cet aspect de l'utilisation de Pilot ou le modeèle de contenu est variable et doit faire l'objet de discussions entre l'administrateur du compte et le développeur utilisant l'API.</p>
</div>

### Exemple

Requête

<pre>
  <code>
    curl \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
    --request GET 'https://app.pilot.pm/publicapi/v2/items/4371/'
  </code>
</pre>

Réponse

<pre>
  <code>
    {
      "id": 4371,
      "url": "https://app.pilot.pm/publicapi/v2/items/4371",
      "updated_at": "2016-04-07T09:00:01.392133Z",
      "type": {
        "is_custom": false,
        "technical_name": "default",
        "name": "Classique"
      },
      "state": "published",
      "publication_dt": "2015-08-21T23:59:59+02:00",
      "state_dates": {
        "published": "2015-08-21"
      },
      "tags": [],
      "files": [],
      "campaign": {
        "id": 415,
        "name": "LasVegasCES"
      },
      "channel": {
        "id": 204,
        "name": "intranet",
        "parent": null
      },
      "targets": [
        {
          "id": 95,
          "name": "InternalTeam"
        }
      ],
      "cfields": [
              {
                "field_label": "Titre",
                "field_name": "title",
                "field_content": "Marketing team at CES Las Vegas 2016"
              },
              {
                "field_label": "Contenu",
                "field_content_raw": "# Dominum Triumphum fortunaque qvem\r\n\r\n## Qui divus quod perque non loquatur ille\r\n\r\nLorem markdownum belloque canit tamen eiaculatus truncus levitas, vel rubet: et\r\nnec feruntur colloque coniunx. Subnixa victae, vis imminet arma pectus currat\r\nrepulsam Libys mutavit. Superstitibus [festinus vim mater](http://gifctrl.com/)\r\nbene verbisque egerat. Cum sustinui clamavit, timori scelus Augustis deique,\r\nille erat matertera factum videre.\r\n\r\n1. Tibi quae Thybrin quem recisum sedes\r\n2. Cereris similesque contigit\r\n3. Tibi viris tangit illa omnibus\r\n4. Ut ire cum meminisse\r\n5. Graminis quibus\r\n\r\n## Ferro suarum facinusque\r\n\r\nTamen ingrediorque tenens Cereris exacta. *Se* modo parens vagus lacrimas audita\r\nore nostri avis **acie** pectora crate Tridentifer, ignes Phoebus, tellus,\r\nfemorum.\r\n\r\n    var codec_vpi = cloudSectorCorrection(577488);\r\n    if (metal_degauss(emulation_function)) {\r\n        wins(malware + log, 4);\r\n        ipadBoot(handle, touchscreen_hertz_display, modeVertical);\r\n    } else {\r\n        peoplewareWiLink = gisOpticalMenu(left - cleanAlgorithm);\r\n        disk_it_xslt(tftpPasteAnalog(payload_boot_font), 2 / -5);\r\n        fullRibbonPath.mode(2, 2 / winsock);\r\n    }\r\n    jqueryDel.cache_data_drop += basicCtpCross.promptJsf(\r\n            freewareSrgb.source_isa(pack_pc(3), vfatFrameworkBar));\r\n    unmount.newbie(domainDirect, extensionDiskMaximize(correction_flowchart(\r\n            exabyteLionMemory, markup_floppy_push, ieee), design_netiquette_vrml\r\n            + alert_rw));\r\n    serp_function = io.it_ssl(dial.moduleSoft(barebones_thin)) + refresh_ipx +\r\n            dos;",
                "field_name": "content",
                "field_content_html": "&#x3C;h1&#x3E;Dominum Triumphum fortunaque qvem&#x3C;/h1&#x3E;\n\n&#x3C;h2&#x3E;Qui divus quod perque non loquatur ille&#x3C;/h2&#x3E;\n\n&#x3C;p&#x3E;Lorem markdownum belloque canit tamen eiaculatus truncus levitas, vel rubet: et&#x3C;br /&#x3E;\nnec feruntur colloque coniunx. Subnixa victae, vis imminet arma pectus currat&#x3C;br /&#x3E;\nrepulsam Libys mutavit. Superstitibus &#x3C;a href=\&#x22;http://gifctrl.com/\&#x22;&#x3E;festinus vim mater&#x3C;/a&#x3E;&#x3C;br /&#x3E;\nbene verbisque egerat. Cum sustinui clamavit, timori scelus Augustis deique,&#x3C;br /&#x3E;\nille erat matertera factum videre.&#x3C;/p&#x3E;\n\n&#x3C;ol&#x3E;\n&#x3C;li&#x3E;Tibi quae Thybrin quem recisum sedes&#x3C;/li&#x3E;\n&#x3C;li&#x3E;Cereris similesque contigit&#x3C;/li&#x3E;\n&#x3C;li&#x3E;Tibi viris tangit illa omnibus&#x3C;/li&#x3E;\n&#x3C;li&#x3E;Ut ire cum meminisse&#x3C;/li&#x3E;\n&#x3C;li&#x3E;Graminis quibus&#x3C;/li&#x3E;\n&#x3C;/ol&#x3E;\n\n&#x3C;h2&#x3E;Ferro suarum facinusque&#x3C;/h2&#x3E;\n\n&#x3C;p&#x3E;Tamen ingrediorque tenens Cereris exacta. &#x3C;em&#x3E;Se&#x3C;/em&#x3E; modo parens vagus lacrimas audita&#x3C;br /&#x3E;\nore nostri avis &#x3C;strong&#x3E;acie&#x3C;/strong&#x3E; pectora crate Tridentifer, ignes Phoebus, tellus,&#x3C;br /&#x3E;\nfemorum.&#x3C;/p&#x3E;\n\n&#x3C;pre&#x3E;&#x3C;code&#x3E;var codec_vpi = cloudSectorCorrection(577488);\nif (metal_degauss(emulation_function)) {\n    wins(malware + log, 4);\n    ipadBoot(handle, touchscreen_hertz_display, modeVertical);\n} else {\n    peoplewareWiLink = gisOpticalMenu(left - cleanAlgorithm);\n    disk_it_xslt(tftpPasteAnalog(payload_boot_font), 2 / -5);\n    fullRibbonPath.mode(2, 2 / winsock);\n}\njqueryDel.cache_data_drop += basicCtpCross.promptJsf(\n        freewareSrgb.source_isa(pack_pc(3), vfatFrameworkBar));\nunmount.newbie(domainDirect, extensionDiskMaximize(correction_flowchart(\n        exabyteLionMemory, markup_floppy_push, ieee), design_netiquette_vrml\n        + alert_rw));\nserp_function = io.it_ssl(dial.moduleSoft(barebones_thin)) + refresh_ipx +\n        dos;\n&#x3C;/code&#x3E;&#x3C;/pre&#x3E;\n"
              }
            }
          ]
}
  </code>
</pre>

## PUT items/

Une fois le contenu récupéré et éventuellement publié sur le support externe concerné vous pouvez changer l'état du contenu pour en informer les utilsiateurs de Pilot.
Cette action n'est pas obligatoire est doit être vue avec l'administrateur du compte.

L'exemple ci-dessous présente le changement de statut vers 'published' du conteu ID 4371

<pre>
  <code>
    curl \
      --header 'Content-Type: application/json' \
      --header 'Authorization: Token 27d0b13960fc26bcbc297da328ee8fde5ac2a9c0' \
      --request PUT 'https://app.pilot.pm/publicapi/v2/items/4371/' \
      --data '{"state": "published"}'
  </code>
</pre>

## GET channels/

Liste les canaux accessibles au token.

`id` : Identifiant unique du canal

`name` : Nom fournit par l'utilisateur

`parent` : ID du canal parent. Si **null** le canal n'a pas de parent.

Exemple de réponse

<pre>
  <code>
    [
        {
            "id": 204,
            "name": "Intranet",
            "parent": null
        },
        {
            "id": 363,
            "name": "IntranetNews",
            "parent": 204
        }
    ]
  </code>
</pre>
