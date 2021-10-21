import ReactDOM from 'react-dom';
import Toast from './Toast';

class ToastManager {
    private contaierRef: HTMLElement
    constructor() {
        const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
        const toastContainer = document.createElement('div')
        toastContainer.id = 'toast-containter';
        body.insertAdjacentElement('beforeend', toastContainer);
        this.contaierRef = toastContainer;
    }

    public destroy = () => {
        if(this.contaierRef) {
            ReactDOM.unmountComponentAtNode(this.contaierRef);
        }
    }

    public show(id: string) {
        ReactDOM.render(<Toast id={id} destory={this.destroy}/>, this.contaierRef)
    }
}

export const toast = new ToastManager();