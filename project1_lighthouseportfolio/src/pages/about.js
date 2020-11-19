import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import { Fade } from "react-awesome-reveal";
import './page_css/about.css';
import main from '../components/static/lighthouse-main.png';
import b1 from '../components/static/b1.png';
import global_asset from '../components/static/global_asset.svg';
import discovery from '../components/static/discovery.svg';
import customization from '../components/static/customization.svg';
import delivery from '../components/static/delivery.svg';
import pin from '../components/static/pin.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



class About extends Component {

    render() {
        return (
            <div className='about'>
                <Container style={{padding: 0, border: 'none'}}>   
                <Fade>             
                    <Row className='main-row' style={{margin: 0, backgroundColor:'#f2f5f9'}}>
                        <Col xs={7} id='main-img' style={{padding: 0}}>
                            <img alt='' img src={main} style={{  border: 'none' }} id='main-img'/>
                        </Col>
                        <Col id='main-txt' style={{ padding: 0 }}>
                            <p id='main-txt-title'>Lighthouse VISION</p>
                            <p id='main-txt-content'>We will be the best business problem solver with <p className='p-emp1'>Data</p> and <p className='p-emp1'>AI</p></p>
                        </Col>
                    </Row>
                    <Row style={{ margin: 0 }}>
                        <Col style={{ padding: 0, textAlign: 'center', color: 'white' }}>
                            <Card id='wiki-card'>
                                <Card.Img src={b1} alt='img' id='wiki-img' />
                                <Card.ImgOverlay>
                                    <Card.Title id='wiki-txt'>Lighthouse Strategies</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ margin: '0',  backgroundColor: '#f2f5f9' }}>
                        <Col style={{ padding: 0 }}>
                            <div id='strategy-content-row'>
                                <div id='strategy-content-each'>
                                    <img alt='img' src={global_asset} id='strategy-content-img'/>
                                    <p id='strategy-content-title'>Global Asset </p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </p>
                                </div>
                                <div id='strategy-content-each'>
                                    <img alt='img' src={discovery} id='strategy-content-img'/>
                                    <div id='strategy-content-each-txt'>
                                        <p id='strategy-content-title'>Discovery </p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </p></div>
                                </div>
                            </div>
                            <div id='strategy-content-row'>
                                <div id='strategy-content-each'>
                                    <img alt='img' src={customization} id='strategy-content-img'/>
                                    <div id='strategy-content-each-txt'>
                                        <p id='strategy-content-title'>Customization </p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </p></div>
                                </div>
                                <div id='strategy-content-each'>
                                    <img alt='img' src={delivery} id='strategy-content-img'/>
                                    <div id='strategy-content-each-txt'>
                                        <p id='strategy-content-title'>Delivery </p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </p></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ margin: 0, padding: 0 }}>
                        <Col style={{ padding: 0, textAlign: 'center', color: 'white' }}>
                            <Card id='wiki-card'>
                                <Card.Img src={b1} alt='img' id='wiki-img' />
                                <Card.ImgOverlay>
                                    <Card.Title id='wiki-txt'>KPMG Ignite Solutions</Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>
                    <Row  style={{ margin: '0'}}>
                        <Col id='solutions'>
                            <Card id='solution-each'>
                                <Card.Img src="https://picjumbo.com/wp-content/uploads/D0102169-2210x3315.jpg" alt='img' id='solution-img' />
                                <Link to='/ocr'><Card.ImgOverlay id='solution-txt'>
                                    <Card.Title style={{fontSize:'2.5vw'}}>Smart OCR</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                            <Card id='solution-each'>
                                <Card.Img src="https://picjumbo.com/wp-content/uploads/D0102127-2210x3315.jpg" alt='img' id='solution-img' />
                                <Link to='/nlp'><Card.ImgOverlay id='solution-txt'>
                                    <Card.Title style={{fontSize:'2.5vw'}}>Fincnace NLP</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                            <Card id='solution-each'>
                                <Card.Img src="https://picjumbo.com/wp-content/uploads/DSC09453-2210x3410.jpg" alt='img' id='solution-img' />
                                <Link to='chatbot'><Card.ImgOverlay id='solution-txt'>
                                    <Card.Title style={{fontSize:'2.5vw'}}>Automation Chatbot</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                            <Card id='solution-each'>
                                <Card.Img src="https://picjumbo.com/wp-content/uploads/DSC03904-2210x3315.jpg" alt='img' id='solution-img' />
                                <Link to='signal'><Card.ImgOverlay id='solution-txt'>
                                    <Card.Title style={{fontSize:'2.5vw'}}>Signals Repository</Card.Title>
                                </Card.ImgOverlay></Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{margin: '0', backgroundColor: '#f2f5f9' }}>
                        <div id='obj-roadmap'>
                            <div id='obj'>
                                <p id='obj-title'>Business Objectives</p>
                                <p id='obj-content'> <img alt='img' src={pin}/> &nbsp;&nbsp;&nbsp;&nbsp;Product</p>
                                <p id='obj-content-2'>글로벌 네트워크 내에 존재하는 Asset의 현지화를 통해 최고의 AI 제품을 개발</p>
                                <p id='obj-content'> <img alt='img' src={pin}/> &nbsp;&nbsp;&nbsp;&nbsp;Infra</p>
                                <p id='obj-content-2'>개발된 제품을 고객에게 효율적으로 제공하기 위한 절차, 플랫폼, 인프라 확보</p>
                                <p id='obj-content'> <img alt='img' src={pin}/> &nbsp;&nbsp;&nbsp;&nbsp;Resource</p>
                                <p id='obj-content-2'>분야별 전문가를 확충하여 개발 및 고객 서비스 역량 제고</p>
                            </div>
                            <div id='roadmap'>
                                <p id='roadmap-div-title'>Roadmap</p>
                                <p id='roadmap-title'>Smart OCR</p>
                                <div id='roadmap-content'>
                                    <div id='roadmap-txt'>
                                        Tax OCR v1.0 ('20 Dec)<br></br>Tax OCR v2.0 ('21 Apr)
                                    </div>
                                    <div id='roadmap-txt'>ClientSalesDelivery</div>
                                </div>
                                <p id='roadmap-title'>Finance NLP</p>
                                <div id='roadmap-content'>
                                    <div id='roadmap-txt'>
                                        PoC ('20 Dec)<br></br>Asset化 ('21 Mar)
                                    </div>
                                    <div id='roadmap-txt'>ClientSalesDelivery</div>
                                </div>
                                <p id='roadmap-title'>Automation</p>
                                <div id='roadmap-content'>
                                    <div id='roadmap-txt'>
                                        Audit Chatbot ('20 Dec)<br></br>Chatbot영역 추가 발굴
                                    </div>
                                    <div id='roadmap-txt'>Chatbot영역 추가 발굴</div>
                                </div>
                                <p id='roadmap-title'>Signals Reposiotry</p>
                                <div id='roadmap-content'>
                                    <div id='roadmap-txt'>
                                        재무재표 데이터 <br></br>Ingestion ('20 Dec)
                                    </div>
                                    <div id='roadmap-txt'>필요 데이터 추가 발굴</div>
                                </div>
                            </div>
                        </div>
                    </Row>
                    </Fade>
                    </Container>
            </div>
        );
    }
}

export default About;
