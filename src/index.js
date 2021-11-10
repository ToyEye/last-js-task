import './sass/main.scss';
import  ApiServer  from "./partials/js/apiService.js";
import  gallery  from "./partials/templates/gallery.hbs";
import LoadBtn from "./partials/js/loadBtn.js";

const form = document.querySelector('#search-form');
const galleryContainer = document.querySelector('.js-container__gallery');
const newApi = new ApiServer();
const loadMoreBtn = new LoadBtn({ hidden: true });


form.addEventListener('submit', onSearchForm);
loadMoreBtn.loadbtn.addEventListener('click', onLoadBtn);


function onSearchForm(evt) {
    evt.preventDefault();
    loadMoreBtn.show();
    clearMarkUp();
    newApi.resetPage();

    const inputValue = evt.target.elements.query.value.trim();
    newApi.query = inputValue;
    newApi.fetchPrhoto().then(pictureMarkUp)
}

function pictureMarkUp(picture) {
    galleryContainer.insertAdjacentHTML('beforeend', gallery(picture));
}
function onLoadBtn() {
    newApi.fetchPrhoto().then(pictureMarkUp);
    newApi.incrementPage();
    setTimeout(() => {
        galleryContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
        })
    }, 1000);
}

function clearMarkUp() {
    galleryContainer.innerHTML = '';
    
}
    




// function onSearchFormSubmit(e){
//     e.preventDefault();
//     ApiService.query =  e.currentTarget.elements.query.value;
    
//     // loadMoreBtn.show();
//     // ApiService.resetPage();
//     clearPhotosContainer();
//     onLoadMore();
// }

//  function  onLoadMore(){

//     // loadMoreBtn.disable();
    
//     ApiService.fetchPhoto()
//     .then(photos =>{
//       const photosListMarkup = photosMap(photos);
//       galleryContainer.insertAdjacentHTML('beforeend', photosListMarkup);
//       scrollPage();
//       loadMoreBtn.enable();
//     })
 
// }


// function clearPhotosContainer() {
//     galleryContainer.innerHTML = '';
//   }

// function photosMap(photos){
//   return  photos.map(gallery).join('');
// }
// function scrollPage(){
//   window.scrollTo({
//     top: window.pageYOffset + documentHeight,
//     width: 0,
//     behavior: "smooth",
//   });
// }