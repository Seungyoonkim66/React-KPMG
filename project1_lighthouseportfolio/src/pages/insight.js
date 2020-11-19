import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import './page_css/insight.css';
import global_ic from '../components/static/global_ic.PNG'
import b1 from '../components/static/b1.png';  // row tab image 
import b2 from '../components/static/b2.png';  // middle tab 1, 4 image
import b3 from '../components/static/b3.png';  // middle tab 2 image
import b4 from '../components/static/b4.png';  // middle tab 3 image
import ics from '../components/static/ics.PNG';
import { Fade } from "react-awesome-reveal";
import Card from 'react-bootstrap/Card';

class Insight extends Component {

    render() {
        return(
            <div className='insight'>
                <Container style={{padding: 0, border: 'none'}}>
                    <Fade>
                        <Row id='insight-main'>
                            <Col xs={9}  style={{ padding: 0 }}><img alt='img' src={global_ic} id='insight-main-img' /></Col>
                            <Col xs={3} style={{ paddingLeft: '10px', paddingRight: 0 }}>
                                <div id='insight-main-txt'>
                                    <h1>Lighthouse Korea IC</h1>
                                    <p>Explore our executive digital workspaces with<p className='p-emp'>data-driven technologies</p>at the core.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row id='insight-link'>
                            <Col xs={12} id='link-gic'>
                                <a href='https://intra.ema.kpmg.com/sites/SGI/GlobalKPMGLighthouse/Pages/InsightsCenters.aspx' target='blank'>
                                    <Card id='link1'>
                                        <Card.Img src={b1} alt='img' id='link1-img' />
                                        <Card.ImgOverlay id='link1-txt-overlay'>
                                            <Card.Title id='link1-txt'>Global Insights Center</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                </a>
                            </Col>
                        </Row>
                        <Row id='insight-content'>
                            <Col style={{display: 'flex', flexDirection: 'row', backgroundColor:'white', padding:'0 10px'}} xs={12}>
                                <a className='content-link' href='https://home.kpmg/xx/en/home/insights/2019/11/data-driven-client-stories.html'><div className='insight-content-each'>
                                    <img className='content-img' src={b2} alt='img'/>
                                    <p className='content-title'>Data-driven client stories</p>
                                    <p className='content-txt'>Learn how KPMG member firms helped clients cultivate their data ecosystems</p>
                                </div></a>
                                <a className='content-link' href='https://home.kpmg/xx/en/home/insights/2018/07/trusted-analytics-for-confident-decisions.html'><div className='insight-content-each'>
                                    <img className='content-img' src={b3} alt='img'/>
                                    <p className='content-title'>Building confidence in your data</p>
                                    <p className='content-txt'>At KPMG, out approach to data-driven technologies is rooted in trust.</p>
                                </div></a>
                                <a className='content-link' href='https://home.kpmg/xx/en/home/insights/2018/07/our-capabilities.html'><div className='insight-content-each'>
                                    <img className='content-img' src={b4} alt='img'/>
                                    <p className='content-title'>Data-Driven Technologies: Our capabilities</p>
                                    <p className='content-txt'>KPMG has developed robust technology solutions to help clients find value in data.</p>
                                </div></a>
                                <a className='content-link' href='https://home.kpmg/xx/en/home/insights/2018/08/ready-set-fail.html'><div className='insight-content-each'>
                                    <img className='content-img' src={b2} alt='img'/>
                                    <p className='content-title'>Ready, set, fail?</p>
                                    <p className='content-txt'>Results from a 2017 KPMG LLP study</p>
                                </div></a>
                            </Col>
                        </Row>
                        <Row id='insight-link'>
                            <Col xs={12} id='link-gic'>
                                    <Card id='link1'>
                                        <Card.Img src={b1} alt='img' id='link1-img' />
                                        <Card.ImgOverlay>
                                            <Card.Title id='link1-txt'>Insights Center Locations</Card.Title>
                                        </Card.ImgOverlay>
                                    </Card>
                                    <img alt='img' src={ics} style={{width: '100%'}} />
                            </Col>
                        </Row>
                        <Row id='insight-footer'>
                            <Col style={{display: 'flex', flexDirection: 'row', padding:'30px 0', color: '#a4a4a4', fontSize: '11px'}} xs={12}>
                               <p>© 2020 Copyright owned by one or more of the KPMG International entities. KPMG International entities provide no services to clients. All rights reserved. KPMG refers to the global organization or to one or more of the member firms of KPMG International Limited (“KPMG International”), each of which is a separate legal entity. KPMG International Limited is a private English company limited by guarantee and does not provide services to clients. For more detail about our structure please visit https://home.kpmg/governance. Member firms of the KPMG network of independent firms are affiliated with KPMG International. KPMG International provides no client services. No member firm has any authority to obligate or bind KPMG International or any other member firm vis-à-vis third parties, nor does KPMG International have any such authority to obligate or bind any member firm.</p>
                            </Col>
                        </Row>
                    </Fade>
                </Container>

            </div>
        );
    }
}

export default Insight;