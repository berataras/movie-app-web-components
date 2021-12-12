const movieCardTemplate = document.createElement("template");

movieCardTemplate.innerHTML = `
<link rel="stylesheet" href="${location.origin}/components/MovieCard/MovieCard.css">

<div class="movie-container">
    <div class="image-container">
        <img />
    </div>

    <div class="info">
        <div class="action_container">
            <h3 class="title"> </h3>
            <p> 
                <slot /> 
            </p>
            <i class="isFavourite fa fa-heart"></i>
            <a target="_blank" class="button">IMDB</a>
        </div>
    </div>
</div>
`

class MovieCard extends HTMLElement {
    constructor(){
        super();
        this.isFavourite = this.getAttribute("isFavourite");
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(movieCardTemplate.content.cloneNode(true));

        this.shadowRoot.querySelector("h3.title").innerHTML = this.getAttribute("title");
        this.shadowRoot.querySelector("img").src = this.getAttribute("poster");

        this.isFav = this.shadowRoot.querySelector(".isFavourite");
        
        this.isFavourite == "true" && this.isFav.classList.add("is_favourite")
    }

    favToggle(){
        this.isFavourite = !this.isFavourite;
        
        if(this.isFavourite){
            this.isFav.classList.add("is_favourite");
        }else{
            this.isFav.classList.remove("is_favourite");
        }
    }
 
    connectedCallback(){
        this.isFav.addEventListener("click", () => this.favToggle());
    }

    disconnectedCallback(){
        this.isFav.removeEventListener("click");
    }
}

window.customElements.define("movie-card", MovieCard);