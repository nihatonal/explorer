import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";

import './Modal.css'
function Modal(props) {
    return (
        <div className={props.showModal ? `modal_container ${props.className} show_modal` : `modal_container ${props.className}`}>
            <IoCloseCircleOutline className='modal_close_btn' onClick={props.closeModal} />
            {props.children}
        </div>
    );
}

export default Modal;