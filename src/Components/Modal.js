import { clearcart } from '../features/cart/cart'
import { closemodal, openmodal } from '../features/Modal/ModalSlice'
import { useDispatch } from 'react-redux';

const Modal = () => {

    const dispatch = useDispatch();

    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4>Remove all items from your shopping cart?</h4>
                <div className='btn-container'>
                    <button type='button' className='btn confirm-btn' onClick={() => {
                        dispatch(clearcart());
                        dispatch(closemodal());
                    }} >
                        confirm
                    </button>
                    <button type='button' className='btn clear-btn' onClick={() => dispatch(closemodal())} >
                        cancel
                    </button>
                </div>
            </div>
        </aside>
    );
};
export default Modal;