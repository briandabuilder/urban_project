import React from 'react';
import ReactDOM from 'react-dom/client';
import UrbanGame from './UrbanGame';
import { Button } from 'react-bootstrap';
import ButtonLink from './ButtonLink';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
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

function HomePage() {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);


    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      subtitle.style.color = "#000000";
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
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hi there!</h2>
                    Welcome to Urban Planning Game! INSERT TUTORIAL TEXT HERE
                </p>
                <Routes>
                  <Route path="./UrbanGame" element={ButtonLink} />
                </Routes>
                
                
               
            </Modal>

        </>
        
    )
}

export default HomePage;