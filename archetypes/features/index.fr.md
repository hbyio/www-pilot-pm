---
author: Mathieu
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
illustration: 
overtitle: Fonctionnalité
menu:
    main:
        weight: 1
        parent: features
        params:
            svg: 
            subtitle: 
            class: 
---

**Insert Lead paragraph here.**

## New Cool Posts

{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}

-   {{ .Title }}
    {{ end }}
