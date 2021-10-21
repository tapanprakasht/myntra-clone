import { StyledToast } from './Toast.styled';
import { useEffect } from 'react';

const TOAST_TIMEOUT = 3000;

export interface ToastInterface {
    id: string;
    destory: () => void
}

function Toast(props: ToastInterface) {
    useEffect(() => {
        const timer = setTimeout(() => {
            props.destory();
        }, TOAST_TIMEOUT)

        return () => clearTimeout(timer);
    }, [props])

    return (
        <StyledToast>
            <img src={`./shopping-item/item${props.id}.png`} alt="" />
            <div>Item removed from wishlist</div>
        </StyledToast>
    )
}

export default Toast
