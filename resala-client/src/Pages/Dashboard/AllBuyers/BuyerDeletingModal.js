import React from 'react';

const BuyerDeletingModal = ({ title, successAction, successButtonName, modalData, closeModal }) => {
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="modal-action">
                        <label onClick={closeModal} className="btn btn-success">Close</label>
                        <label onClick={() => successAction(modalData)} htmlFor="confirmationModal" className="btn">{successButtonName}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerDeletingModal;