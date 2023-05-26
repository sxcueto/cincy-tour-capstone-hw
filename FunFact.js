//What I did: added some of the links to social media icons, tryed to connect funfact.js to about.js, added outdoor attractions to google doc
//What I'm going to work on: successfully connecting funfact to about, add css to generator, work on css of about page

import React, { useState } from "react";
import { FaDiceD20 } from 'react-icons/fa'
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
const facts = ['Fun fact test.', 'Fun fact test 2.'];

const FunFact = () => {
  const [displayedFact, setDisplayedFact] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    const randomNumber = Math.floor(Math.random() * (facts.length));
    setDisplayedFact(facts[randomNumber]).setShow(true);
  }
  //     const newFact =() =>{//     const randomNumber = Math.floor(Math.random() * (facts.length));
  //     setDisplayedFact(facts[randomNumber])
  //     // document.getElementById('factDisplay').innerHTML = facts[randomNumber];// }return (
  <div>
    <Button variant="primary" onClick={handleShow}>
      <FaDiceD20 />
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className="text-center">{displayedFact}</Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={handleClose} >
          Close
        </Button>        
        </Modal.Footer>
    </Modal>
  </div>

}

export default FunFact;