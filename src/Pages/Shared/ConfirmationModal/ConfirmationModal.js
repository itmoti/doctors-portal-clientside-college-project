import React from 'react';

const ConfirmationModal = ({title , message , CloseModal  , handleDltUserBtn , modalData , successbtnName}) => {
    return (
        <div>
            {/* The button to open modal */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="ConfirmationModal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label htmlFor="ConfirmationModal" onClick={() => handleDltUserBtn(modalData)} className='btn btn-primary btn-sm'>{successbtnName}</label>
      <button  onClick={CloseModal} className='btn btn-error btn-sm ' >Cancel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;