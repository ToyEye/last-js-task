import './sass/main.scss';
import  ApiServer  from "./partials/js/apiService.js";
import  gallery  from "./partials/templates/gallery.hbs";
import LoadBtn from "./partials/js/loadBtn.js";

// const form = document.querySelector('#search-form');
// const galleryContainer = document.querySelector('.js-container__gallery');
// const newApi = new ApiServer();
// const loadMoreBtn = new LoadBtn({ hidden: true });


class WebKit   {
    constructor() {
        this.form = document.querySelector('#search-form');
        this.galleryContainer = document.querySelector('.js-container__gallery');
        this.newApi = new ApiServer();
        this.loadMoreBtn = new LoadBtn({ hidden: true });
    }

    onSearchForm = evt => {
        evt.preventDefault();
        this.loadMoreBtn.show();
        
        this.clearMarkUp();
        
        this.newApi.resetPage();
        const inputValue = evt.target.elements.query.value.trim();
        
        this.newApi.query = inputValue;
        this.newApi.fetchPrhoto().then(this.pictureMarkUp)
    }

    pictureMarkUp = picture => {
        this.galleryContainer.insertAdjacentHTML('beforeend', gallery(picture));
    }

    onLoadBtn = () => {
        this.newApi.fetchPrhoto().then(this.pictureMarkUp);
        this.newApi.incrementPage();
        setTimeout(() => {
            this.galleryContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
            })
        }, 1000);
    }

    clearMarkUp =()=> {
        this.galleryContainer.innerHTML = '';
    }
    
    eventListeners = () => {
        this.form.addEventListener('submit', this.onSearchForm);
        this.loadMoreBtn.loadbtn.addEventListener('click', this.onLoadBtn);
    }

    init = () => {
        this.eventListeners();
    }
}

const web = new WebKit();
web.init();


// form.addEventListener('submit', onSearchForm);
// loadMoreBtn.loadbtn.addEventListener('click', onLoadBtn);


// function onSearchForm(evt) {
//     evt.preventDefault();
//     loadMoreBtn.show();
//     clearMarkUp();
//     newApi.resetPage();

//     const inputValue = evt.target.elements.query.value.trim();
//     newApi.query = inputValue;
//     newApi.fetchPrhoto().then(pictureMarkUp)
// }

// function pictureMarkUp(picture) {
//     galleryContainer.insertAdjacentHTML('beforeend', gallery(picture));
// }
// function onLoadBtn() {
//     newApi.fetchPrhoto().then(pictureMarkUp);
//     newApi.incrementPage();
//     setTimeout(() => {
//         galleryContainer.scrollIntoView({
//             behavior: 'smooth',
//             block: 'end',
//         })
//     }, 1000);
// }

// function clearMarkUp() {
//     galleryContainer.innerHTML = '';
    
// }
    
