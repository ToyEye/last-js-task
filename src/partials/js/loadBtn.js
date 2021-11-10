export default class LoadButton {
    constructor({hidden = false}) {
        this.loadbtn = document.querySelector('.js-loadMoreBtn');
        hidden && this.hide();
    };

    show = () => {
        this.loadbtn.classList.remove('isHide');
    }

    hide = () => {
        this.loadbtn.classList.add('isHide');       
    }
}
