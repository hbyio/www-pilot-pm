<template>
    <main id="main">
        <section class="intro-section ressources-page">
            <div class="container">
                <div class="text-holder">
                    <h1>Ressources</h1>
                    <p>Pour vraiment pouvoir découvrir plus facilement et le plus simplement possible l’application nous avons disposé de nombreux guides interactifs au sein de l’interface.</p>
                </div>
            </div>
        </section>
        <section class="card-section">
            <div class="container">
                <div class="row card-holder">
                    <div class="card">
                        <div class="card-heading dark-blue-overlay" style="background-image: url(images/img-overlay-1.png)">
                            <div class="heading-text">
                                <i class="icon icon-letter"></i>
                                <h6>Les contenus</h6>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>Un contenu est le plus simple élément géré par Pilot. C’est une unité éditoriale compréhensible hors contexte.</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="ressources-link">13 ressources</a>
                            <a href="#" class="btn btn-lg">View</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-heading purple-overlay" style="background-image: url(images/img-overlay-2.png)">
                            <div class="heading-text">
                                <i class="icon icon-folder-2"></i>
                                <h6>Les projets</h6>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>Vous pouvez rassembler vos contenus dans des projets pour organiser le travail de l’équipe</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="ressources-link">13 ressources</a>
                            <a href="#" class="btn btn-lg">View</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-heading blue-overlay" style="background-image: url(images/img-overlay-3.png)">
                            <div class="heading-text">
                                <i class="icon icon-radio"></i>
                                <h6>Les canaux</h6>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>Pour Pilot un canal représente un espace où diffuser un contenu.</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="ressources-link">13 ressources</a>
                            <a href="#" class="btn btn-lg">View</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-heading green-overlay" style="background-image: url(images/img-overlay-4.png)">
                            <div class="heading-text">
                                <i class="icon icon-ask"></i>
                                <h6>Questions Fréquentes</h6>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>Collection des questions que vous nous posez le plus souvent</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="ressources-link">13 ressources</a>
                            <a href="#" class="btn btn-lg">View</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-heading brown-overlay" style="background-image: url(images/img-overlay-5.png)">
                            <div class="heading-text">
                                <i class="icon icon-book"></i>
                                <h6>Les guides dans l’application</h6>
                            </div>
                        </div>
                        <div class="card-body">
                            <p>Vous pouvez rassembler vos contenus dans des projets pour organiser le travail de l’équipe</p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="ressources-link">13 ressources</a>
                            <a href="#" class="btn btn-lg">View</a>
                        </div>
                    </div>
                </div>
                <div class="text-holder">
                    <h3>Vous n’avez pas trouvé ce que vous cherchez ?</h3>
                    <p>Contactez-nous nous ferons de notre mieux pour y répondre.</p>
                    <form action="#" class="subscribe-form">
                        <div class="input-holder">
                            <input type="email" placeholder="Entrez votre email…">
                            <i class="icon-mail"></i>
                        </div>
                        <div class="submit-holder">
                            <button type="submit" class="btn">CONTACTEZ-MOI</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section class="blog-section">
            <div class="container">
                <h3>Retrouvez nos articles sur le blog</h3>
                <div class="row">
                    <div class="col">
                        <div class="text-holder">
                            <div class="img-holder" style="background-image: url(images/image-08.jpg)">
                            </div>
                            <h6>Using Banner Stands To Increase Trade Show Traffic.</h6>
                            <p>A thought experiment on how we measure risk when the fate of the world hangs in the balance</p>
                        </div>
                        <a href="#" class="btn btn-white">Read the article</a>
                    </div>
                    <div class="col">
                        <div class="text-holder">
                            <div class="img-holder" style="background-image: url(images/image-09.jpg)">
                            </div>
                            <h6>Using Banner Stands To Increase Trade Show Traffic.</h6>
                            <p>A thought experiment on how we measure risk when the fate of the world hangs in the balance</p>
                        </div>
                        <a href="#" class="btn btn-white">Read the article</a>
                    </div>
                    <div class="col">
                        <div class="text-holder">
                            <div class="img-holder" style="background-image: url(images/image-10.jpg)">
                            </div>
                            <h6>Using Banner Stands To Increase Trade Show Traffic.</h6>
                            <p>A thought experiment on how we measure risk when the fate of the world hangs in the balance</p>
                        </div>
                        <a href="#" class="btn btn-white">Read the article</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
export default {
 mounted () {
   this.$nextTick(() => {
     this.$nuxt.$loading.start()

     setTimeout(() => this.$nuxt.$loading.finish(), 500)
   })
 }
}

</script>
