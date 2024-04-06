import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function ProjectName() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <>
            <h1>Urban Planning Game</h1>
            <Button variant="success" onClick={openModal}>Get Started</Button>{' '}
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <p>
                    Hi there, welcome to Urban Planning Game! INSERT TUTORIAL TEXT HERE
                </p>
                <Button variant="success">Play</Button>
            </Modal>

        </>
        
    )
}

export default ProjectName;