import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './page_css/projects.css';
import { Fade } from "react-awesome-reveal";
import img1 from '../components/static/about_4.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class Projects extends Component {
    
    render() {
        return (
            <div className='project'>
            <Container fluid>
                <Fade duration={1500}>
                    <Row>
                        <Col id='card-row'>
                            <Card id='pj'>
                                <Card.Img src={img1} alt='img' id='pj-img' />
                                <Link to='/ocr'><Card.ImgOverlay id='pj-text'>
                                    <Card.Title style={{fontSize:'3vw'}} >Smart OCR</Card.Title>
                                    <Card.Text style={{fontSize:'1vw'}}>Optical character recognition or optical character reader (OCR) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text</Card.Text>
                                </Card.ImgOverlay></Link>
                            </Card>
                            <Card id='pj'>
                                <Card.Img src="https://picjumbo.com/wp-content/uploads/DSC09975-2210x3315.jpg" alt='img' id='pj-img' />
                                <Link to='/nlp'><Card.ImgOverlay id='pj-text'>
                                    <Card.Title style={{fontSize:'3vw'}}>Finance NLP</Card.Title>
                                    <Card.Text style={{fontSize:'1vw'}}>Insert simple explanation of the project : Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Card.Text>
                                </Card.ImgOverlay></Link>
                            </Card>
                            <Card id='pj'>
                                <Card.Img src="https://picjumbo.com/wp-content/uploads/office-essentials-smartphone-laptop-and-diary-2210x3315.jpg" alt='img' id='pj-img' />
                                <Link to='/chatbot'><Card.ImgOverlay id='pj-text'>
                                    <Card.Title style={{fontSize:'3vw'}}>Automation Chatbot</Card.Title>
                                    <Card.Text style={{fontSize:'1vw'}}>Insert simple explanation of the project : Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Card.Text>
                                </Card.ImgOverlay></Link>
                            </Card>
                            <Card id='pj'>
                                <Card.Img src="https://picjumbo.com/wp-content/uploads/DSC09453-2210x3410.jpg" alt='img' id='pj-img' />
                                <Link to='/signal'><Card.ImgOverlay id='pj-text'>
                                    <Card.Title style={{fontSize:'3vw'}}>Signals Repository</Card.Title>
                                    <Card.Text style={{fontSize:'1vw'}}>KPMG Signals Repository is an active listening platform that continuously harvests a variety of data from public and private sources.  Structured and unstructured data is transformed into complex expressions, creating tens of thousands of signals when used by machine learning and other AI systems, and helps our clients significantly improve the accuracy in predictions.</Card.Text>
                                </Card.ImgOverlay></Link>
                            </Card>
                        </Col>
                    </Row>
                </Fade>
            </Container>
            </div>
        );
    }
}

export default Projects;