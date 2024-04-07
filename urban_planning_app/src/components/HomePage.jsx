import React from 'react';
import ReactDOM from 'react-dom/client';
import game from './UrbanGame';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

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
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = "UrbanGame";
      navigate(path);
    }
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
                    
                    In this simulation, you will be taking the role as city designer for
                    You have 
                </p>
                <Button variant="success" onClick={routeChange}>Play</Button>
                
               
            </Modal>

        </>
        
    )
}

export default HomePage;