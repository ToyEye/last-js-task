const KEY = '24201171-f795c334c12b489d5c6645c6d';
const BASE_URL = 'https://pixabay.com/api'

// export default function apiSrevice(seach) {

//     return fetch(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${seach}&page=1&per_page=12&key=${KEY}`)
//         .then(response => response.json())
//         .then(data => data);
// }
    
export default class ApiServer {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchPrhoto = () => {
        const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;
        return fetch(url).then(resp => resp.json()).then(data => {
            this.incrementPage();
            return data.hits;
        });
    }

    incrementPage = () => {
        this.page += 1;
    }

    resetPage = () => {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}


// export default class ApiService{
//     constructor(){
//         this.searchQuery = '';
//         this.page = 1;
//     }
            
//     fetchPhoto (){
//         if(this.searchQuery.trim() === ''){
//             return ;
//         }

//         const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;
//          return fetch(url)
//             .then(r =>{
//                 return r.json()})
//             .then(({hits}) => {

//                 this.incrementPage();
//                 return hits
//             });
//     }

//     incrementPage(){
//         this.page +=1;
//     }

//     resetPage() {
//         this.page = 1;
//       }

//     get query(){
//         return this.searchQuery;
//     }
//     set query(newQuery){
//         this.searchQuery = newQuery;
//     }

// }