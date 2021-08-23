import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import ImageComp from './ImageComp'
import Badge from 'react-bootstrap/Badge'
import {Link} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Alert from 'react-bootstrap/Alert'


const CardComp = ({ title, calories, image, ingredients, cuisine, meal, url, healthlabel,protein})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
           <Card class="recipe_cont" style={{ width: '20rem'/* ,height:'500px' ,overflowY:'hidden' */, marginBottom: '35px', height: 'auto' }}>
                <Card.Img variant="top" src={image}></Card.Img>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                <Badge pill bg="primary" variant="secondary" style={{ padding: '10px', margin: '5px' }}>
                                {meal}
                            </Badge>
                <Badge pill bg="primary" variant="success" style={{ padding: '10px', margin: '5px' }}>
                                {cuisine}
                            </Badge>
                            <br></br><br />
                <Button variant="primary" onClick={handleShow}>
                    view more
                </Button>
                <Modal fullscreen={true} show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ width: '100%',textAlign:'center'}}>
                            <Alert variant="danger">
                                {title}
                            </Alert>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img variant="top" src={image} style={{height:'20%'}}></Card.Img>
            
                        <Badge bg="primary" variant="success" style={{ padding: '10px',margin:'15px'}}>Ingredients</Badge>

                     <ul className="ingredient">
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ul>
                        <Badge bg="primary" variant="success" style={{ padding: '10px' }}>category</Badge><br></br><br></br>
                        <div style={{display:'grid',gridTemplateColumns:'auto auto auto',gridGap:'15px'}}>
                            {
                                healthlabel.map(ingredient => (
                                    <Badge pill bg="primary" variant="info" style={{ padding: '10px'}}>{ingredient}</Badge>
                                ))
                            }
                        </div>
                        <Alert variant="danger" style={{ margin: '25px' }}>
                            <p >calories : {calories}</p>
                        </Alert>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>           
    </Card>
    );
}

export default CardComp;