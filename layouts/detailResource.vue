<template>
    <main id="main">
        <section class="intro-section ressources-page ressources-detail-page">
            <div class="container">
                <div class="text-holder">
                    <i class="icon-details icon-letter"></i>
                    <h3> <slot name="title"></slot> </h3>
                </div>
            </div>
        </section>
        <section class="details-section">
            <div class="container">
                <aside class="sidebar">
                    <div class="heading">
                        <h6>Table de matières</h6>
                    </div>
                    <ul class="page-nav">
                        <li><a href="#">Créer un contenu</a></li>
                        <li><a href="#">Vue de détail d’un contenu</a></li>
                        <li><a href="#">Les outils spécifiques aux contenus</a></li>
                        <li><a href="#">Informations</a></li>
                        <li><a href="#">Versions et différences</a></li>
                        <li><a href="#">Commentaires</a></li>
                        <li><a href="#">Tâches</a></li>
                        <li><a href="#">Partage</a></li>
                        <li><a href="#">Fichiers liés</a></li>
                    </ul>
                </aside>
                <div class="content-block">
                    <slot name="body"></slot>
                </div>
            </div>
        </section>
        <section class="blog-section">
            <div class="container">
                <h3>Retrouvez nos articles sur le blog</h3>
                <div class="row">
                    <article class="col">
                        <div class="text-holder">
                            <div class="img-holder" style="background-image: url(images/image-08.jpg)">
                            </div>
                            <h6><a href="#">Using Banner Stands To Increase Trade Show Traffic.</a></h6>
                            <p>A thought experiment on how we measure risk when the fate of the world hangs in the balance</p>
                        </div>
                        <a href="#" class="btn btn-white">Read the article</a>
                    </article>
                    <article class="col">
                        <div class="text-holder">
                            <div class="img-holder" style="background-image: url(images/image-09.jpg)">
                            </div>
                            <h6><a href="#">Using Banner Stands To Increase Trade Show Traffic.</a></h6>
                            <p>A thought experiment on how we measure risk when the fate of the world hangs in the balance</p>
                        </div>
                        <a href="#" class="btn btn-white">Read the article</a>
                    </article>
                    <article class="col">
                        <div class="text-holder">
                            <div class="img-holder" style="background-image: url(images/image-10.jpg)">
                            </div>
                            <h6><a href="#">Using Banner Stands To Increase Trade Show Traffic.</a></h6>
                            <p>A thought experiment on how we measure risk when the fate of the world hangs in the balance</p>
                        </div>
                        <a href="#" class="btn btn-white">Read the article</a>
                    </article>
                </div>
            </div>
        </section>
    </main>
</template>
