import { MdSettings } from 'react-icons/md';
import Modal from 'react-modal';
import React, { useState } from 'react';

const UserSettings = () => {

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <div className="user__icon-btn" onClick={openModal}><MdSettings />
      </div>
      <Modal
        style={{
          overlay: {
            backgroundColor: 'rgba(37,60,119,0.92)',
            cursor: 'pointer',
          },
        }}
        className="user__modal"
        isOpen={modal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}>
        <button className="user__icon-btn" onClick={closeModal}>Close Modal</button>
      </Modal>
    </>
  );
};

export default UserSettings;