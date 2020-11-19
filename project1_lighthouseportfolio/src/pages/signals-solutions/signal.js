import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import '.././page_css/solution.css';
import { Fade } from "react-awesome-reveal";
import back from '../../components/static/back.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Signal extends Component {
    render() {
        return (
            <div className='solution'>
                <Container>
                    <Fade>
                        <Row id='description'>
                            <Col>
                                <p id='description-title'><strong>Signals Repository</strong><Link to='/projects'><img src={back} alt='img' id='back-icon' /></Link></p>
                                <p id='description-content'>KPMG Signals Repository is an active listening platform that continuously harvests a variety of data from public and private sources.  Structured and unstructured data is transformed into complex expressions, creating tens of thousands of signals when used by machine learning and other AI systems, and helps our clients significantly improve the accuracy in predictions.</p>
                            </Col>
                        </Row>
                        <Row className='overflow-hidden-row'>
                            <Col>
                                <Card id='product-card'>
                                    <Card.Img id='product-card-img' src="https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg" alt="Card image" />
                                    <Link style={{ textDecoration: 'none' }} to='/tourism'><Card.ImgOverlay id='product-card-overlay'>
                                        <Card.Title id='product-card-title' style={{fontSize:'3vw'}}>TOURISM INDUSTRY ANALYTICS</Card.Title>
                                    </Card.ImgOverlay></Link>
                                </Card>
                            </Col>
                            <Col style={{ height: '30vh' }}>
                                <Card id='product-card'>
                                    <Card.Img id='product-card-img' src="https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg" alt="Card image" />
                                    <Link style={{ textDecoration: 'none' }} to='/dart'><Card.ImgOverlay id='product-card-overlay'>
                                        <Card.Title id='product-card-title' style={{fontSize:'3vw'}}>FINANCIAL STATEMENT ANALYTICS</Card.Title>
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

export default Signal;