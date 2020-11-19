import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../pages/page_css/home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Fade } from "react-awesome-reveal";
import home_1 from '../components/static/home_1.png';  // global insignths center tab image 
import home_2 from '../components/static/home_2.png';  // lighthouse center tab image
import home_4 from '../components/static/home_4.png';  // main image 
import p1 from '../components/static/p1.png';  // article1 image
import p3 from '../components/static/p3.png';  // article2 image
import p4 from '../components/static/p4.png';  // article3 image
import s1 from '../components/static/s1.png';  // solutions tab 1, 3 image
import s2 from '../components/static/s2.png';  // solutions tab 2, 4 image

class Home extends Component {

  render() {
    return (
      <div className="home">
        <Container fluid id='home-container'>
          <Fade>
          <Row id='main'>
            <Col style={{padding: 0}}>
              <Card style={{ border: 'none', borderRadius: '0' }}>
                <Card.Img src={home_4} alt='img' style={{ border: 'none', borderRadius: '0' }} />
                <Link to='/'><Card.ImgOverlay id='main-card-txt'>
                  <Card.Text style={{fontSize:'7vw'}}><strong><a id='link-main' href='https://home.kpmg/kr/ko/home.html'>KPMG</a></strong></Card.Text>
                  <Card.Text>Be the Best Business Problem Solver with Data and AI </Card.Text>
                </Card.ImgOverlay></Link>
              </Card>
            </Col>
          </Row>
          <div id='main-content-container'>
            <Row id='main-content'>
              <Col style={{ padding: 0 }}>
                <Card id='home-card'>
                  <Card.Img src={home_1} alt='img' id='home-card-img' />
                  <Link to='/insight'><Card.ImgOverlay id='home-card-txt'>
                    <Card.Title id='home-card-title' style={{fontWeight:'400'}}>Global Insights Center</Card.Title>
                  </Card.ImgOverlay></Link>
                </Card>
              </Col>

              <Col style={{ padding: 0 }}>
                <Card id='home-card'>
                  <Card.Img src={home_2} alt='img' id='home-card-img' />
                  <Link to='/lighthouse'><Card.ImgOverlay id='home-card-txt'>
                    <Card.Title id='home-card-title' style={{fontWeight:'400'}}>Lighthouse Center</Card.Title>
                  </Card.ImgOverlay></Link>
                </Card>
              </Col>
            </Row>

            <Row id='main-content2'>
              <Col style={{ display: 'flex', flexDirection: 'row', padding: 0 }}>
                <Card id='about-product-card'>
                  <Card.Img src={p1} alt='img' id='product-card-img' />
                  <a href='https://home.kpmg/kr/ko/home/media/press-releases/2020/02/press-release-18.html' target="_blank" onUpdate={() => window.scrollTo(100.0)}><Card.ImgOverlay id='product-card-txt'>
                    <Card.Text id='p-title'>“AI 기술로 기업 문제 해결해요” 삼정KPMG 대학생 경연 개최 </Card.Text>
                  </Card.ImgOverlay></a>
                </Card>
                <Card id='about-product-card'>
                  <Card.Img src={p3} alt='img' id='product-card-img' />
                  <a href='https://home.kpmg/kr/ko/home/newsletter-channel/202010/samjong-news.html' target="_blank"><Card.ImgOverlay id='product-card-txt'>
                    <Card.Text id='p-title'>삼정KPMG Lighthouse, ‘KPMG Global 데이터사이언스 경연대회’ 우승</Card.Text>
                  </Card.ImgOverlay></a>
                </Card>
                <Card id='about-product-card'>
                  <Card.Img src={p4} alt='img' id='product-card-img' />
                  <a href='https://home.kpmg/kr/ko/home/services/special-service/digital-new-technology.html' target="_blank"><Card.ImgOverlay id='product-card-txt'>
                    <Card.Text id='p-title'>디지털 신기술 도입 지원</Card.Text>
                  </Card.ImgOverlay></a>
                </Card>
              </Col>
            </Row>
          </div>

          <Row>
            <Col id='service'>
              <div id='service-label'>
                <div>Solutions</div>
              </div>
              <div id='service-content'>
                <Link to='/ocr' style={{textDecoration:'none'}}><div id='service-content-each'>
                  <img src={s1} id='service-img'/>
                  <p id='service-title'>Smart Finance OCR</p>
                  <p>Optical character recognition or optical character reader (OCR) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text</p>
                </div></Link>
                <Link to='/nlp'  style={{textDecoration:'none'}}><div id='service-content-each'>
                  <img src={s2} id='service-img'/>
                  <p id='service-title'>Finance NLP</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div></Link>
                <Link to='/chatbot' style={{textDecoration:'none'}}><div id='service-content-each'>
                  <img src={s1} id='service-img'/>
                  <p id='service-title'>Automation Chatbot</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div></Link>
                <Link to='/signal' style={{textDecoration:'none'}}><div id='service-content-each'>
                  <img src={s2} id='service-img'/>
                  <p id='service-title'>Signals Repository</p>
                  <p>KPMG Signals Repository is an active listening platform that continuously harvests a variety of data from public and private sources. </p>
                </div></Link>           
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} id='footer'>
              {/* <p>email lighthouse@kr.kpmg.com</p>
              <p>tel. +82 2 123 4567</p>
              <p>address 152 Teheran-ro, Yeoksam 1-dong, Gangnam-gu, Seoul, 28F </p> */}
              <p>© 2020 KPMG Samjong Accounting Corp., a Korea Limited Liability Company and a member firm of the KPMG global organization of independent member firms affiliated with KPMG International Limited, a private English company limited by guarantee. All rights reserved.  </p>
              <p>For more detail about the structure of the KPMG global organization please visit https://home.kpmg/governance.</p>
            </Col>
          </Row>
          {/* <Row>
            <Canvas />
          </Row> */}
          </Fade>
        </Container>
      </div>
    );
  }
}


export default Home;
