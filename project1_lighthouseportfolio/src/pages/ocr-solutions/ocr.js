import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Fade } from "react-awesome-reveal";
import '.././page_css/solution.css';
import back from '../../components/static/back.png';

class OCR extends Component {

    render() {
        return (
            <div className='solution'>
                <Container>
                    <Fade>
                        <Row id='description'>
                            <Col>
                                <p id='description-title'><strong>Smart OCR</strong><Link to='/projects'><img src={back} alt='img' id='back-icon' /></Link></p>
                                <p id='description-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised </p>
                            </Col>
                        </Row>
                        <Row className='overflow-hidden-row'> 
                            <Col>
                            <Card id='product-card'>
                                <Card.Img id='product-card-img' src="https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg" alt="Card image" />
                                <Link style={{textDecoration: 'none'}} to='/tax_ocr'><Card.ImgOverlay id='product-card-overlay'>
                                    <Card.Title id='product-card-title'>TAX OCR</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                            </Col>
                            <Col style={{height:'30vh'}}>
                            <Card id='product-card'>
                                <Card.Img id='product-card-img' src="https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958_1280.jpg" alt="Card image" />
                                <Link style={{textDecoration: 'none'}} to='/je_ocr'><Card.ImgOverlay id='product-card-overlay'>
                                    <Card.Title id='product-card-title'>JOURNAL ENTRY OCR</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                            </Col>
                        </Row>
                        <Row className='overflow-hidden-row'> 
                            <Col>
                            <Card id='product-card'>
                                <Card.Img id='product-card-img' src="https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456_1280.jpg" alt="Card image" />
                                <Link style={{textDecoration: 'none'}} to='/nh'><Card.ImgOverlay id='product-card-overlay'>
                                    <Card.Title id='product-card-title'>NH</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                            </Col>
                            <Col>
                            <Card id='product-card'>
                                <Card.Img id='product-card-img' src="https://cdn.pixabay.com/photo/2018/07/09/10/11/cube-3525716_1280.jpg" alt="Card image" />
                                <Link style={{textDecoration: 'none'}} to='/clr'><Card.ImgOverlay id='product-card-overlay'>
                                    <Card.Title id='product-card-title'>CLR</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                            </Col>
                        </Row>
                        <Row className='overflow-hidden-row'> 
                            <Col>
                            <Card id='product-card'>
                                <Card.Img id='product-card-img' src="https://cdn.pixabay.com/photo/2020/04/25/12/14/tech-5090539_1280.jpg" alt="Card image" />
                                <Link style={{textDecoration: 'none'}} to='/scandoc'><Card.ImgOverlay id='product-card-overlay'>
                                    <Card.Title id='product-card-title'>SCAN DOC</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Fade>
                </Container>
            </div>
        );
    }
}

export default OCR;
