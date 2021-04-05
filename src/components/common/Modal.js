import React from 'react'

export const Modal = ({ children, title, isOpen, closeModal }) => {
    return (
        <div className={`modal-custom animate__animated ${isOpen ? 'animate__backInDown show' : 'animate__backOutDown'}`} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
