---
author: mb
date: 2018-01-27
draft: false
menu: docs
icon: file-text
short: A content is an editorial unit that can be understood out of context (article, tweet, ..).
slug: items
title: Items
weight: 2
---

## What is an "item" exactly ?

An article, an interview, a tweet are contents in the sense of Pilot as opposed to a chapô or a paragraph of an article.

Each content has its own life cycle (draft > to validate > to publish > ..) as well as its own comments, versions, shares.

Contents can be gathered in a <a href="/resources/projects">project</a> and/or in a <a href="/resources/channels">channels</a>.

## Create a content

![vue de détail d'un contenu](/img/screenshots/additem.png)

Click "Add Content" and select the type of content you want to create.

In our example we have 3 by default. The "Article" type is the default type of the application, it consists of a title field and a content field.

## Detail view of a content

Later in the documentation we will refer to this view as a "detail view" of a content.

![vue de détail d'un contenu](/img/screenshots/item_detail.png)

## Content specific tools

<img style="float:right; margin-left:1em;" src="/img/screenshots/item_detail_menu.png" alt="">

### Information

This menu displays general information about the content:

- The project to which the content is assigned
- The channel where the content will be published
- Any persons responsible for the document
- The contents linked (in the case of translation for example to have a reference to the "master" or to link a brief to the written content)

### Versions and differences

Each time content is saved we create a "minor version" (1.1, 1.2, etc.) with the time of creation and the reference to the person who created this version.

It is impossible to save a document without creating a version. It is the concept of "immutability" of a document that allows you to know with confidence what has been done, by whom and when on a text.

Each version can be "restored" to go back to a time in the past and delete changes that might have been introduced on a recent version. Restoration results in the creation of a new version with all the information necessary to understand it (who restored it, from which version and when). So no information is lost.

In order to fully benefit from this version system, the application offers a "difference view" between versions to allow you to know very easily and very quickly what has been added or deleted from one version to another.

<img src="/img/screenshots/diff.png" alt="vue des différences" />

### Comments

You will be able to discuss the document's evolution thanks to this feature which also offers a simple system for mentioning and alerting team members.

The undeniable advantage of this type of tool is to be able to consult the history of a document within the team.

### Tasks

You can freely assign tasks to each content. Each of these tasks will have a rendering date and one or more persons responsible.

### Sharing

Sharing with external validation is useful for interviewing people who do not have a Pilot account. It is possible to allow your interlocutor to modify the document sent. When it will return it to you you will be able to consult the modifications made and integrate them, in the tool, one by one or globally by creating a new version.

### Related files

You can link one or more files to your content (**without document size limit**) in two ways :

1. By directly uploading a file ("Add a file" button): The file will be linked exclusively to this content. It cannot be "linked" from other content.

2. By making a link from the media library ("search the media library" button): The file is in the media library, can be attached to other content, and is not deleted when the content is deleted.
