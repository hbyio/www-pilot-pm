---
title: "{{ replace .Name "-" " " | title }}"
description: "{{ replace .Name "-" " " | title }}"
subtitle: "{{ replace .Name "-" " " | title }}"
illustration: rocket.png
author: Justine
featured: false
tag: Article
tagColor: gray
date: {{ .Date }}
draft: true
---

**Insert Lead paragraph here.**

## New Cool Posts

{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}
* {{ .Title }}
{{ end }}