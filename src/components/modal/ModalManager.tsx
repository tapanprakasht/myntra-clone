import Modal from "./Modal";
import ReactDOM from 'react-dom';
import { ListItem } from "../../datasource/interfaces/ListItem";

class ModalManager {
    containerRef: HTMLDivElement;

    constructor() {
        const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
        const modalContainer = document.createElement('div');
        modalContainer.id = 'modal-container';
        body.insertAdjacentElement('beforeend', modalContainer);
        this.containerRef = modalContainer;
    }

    public closeModal = () => {
        if(this.containerRef) {
            ReactDOM.unmountComponentAtNode(this.containerRef);
            document.getElementsByTagName('body')[0].style.overflow = 'auto';
        }
    }

    public showModal(data: ListItem) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        ReactDOM.render(<Modal data={data} closeModal={this.closeModal}/>, this.containerRef);
    }
}

export const modal = new ModalManager();