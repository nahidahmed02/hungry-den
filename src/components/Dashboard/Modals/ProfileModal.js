import React from 'react';

const ProfileModal = ({ setProfileModal }) => {
    return (
        <div>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" defaultChecked={true} />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                    <label className="modal-backdrop btn btn-xs bg-red-500" htmlFor="my_modal_7" onClick={() => setProfileModal(false)}>Close</label>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;