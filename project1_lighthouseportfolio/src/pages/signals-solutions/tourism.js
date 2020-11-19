import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Fade } from "react-awesome-reveal";
import '../page_css/solution.css';
import back from '../../components/static/back.png';
import mp4 from '../../components/gif/exampleMP4.mp4';
import play from '../../components/gif/play-btn.png';
import pause from '../../components/gif/pause-btn.png';


class Tourism extends Component {
    constructor(props){
        super(props);
        this.state = {
            play: true
        }
    }
    
    getVideo = e => {
        this.video = e
    }

    playVideo = () => {
        this.video.play();
        this.setState({
            play: !this.state.play
        });
    }
    pauseVideo = () => {
        this.video.pause();
        this.setState({
            play: !this.state.play
        });
    }

    render() {
        return(
            <div className='solution'>
               <Container>
                    <Fade>
                    <Row id='description'>
                        <Col>
                            <p id='description-title'><strong>Tourism Industry Analytics</strong><Link to='/signal'><img src={back} alt='img' id='back-icon'/></Link></p>
                        </Col>
                    </Row>
                    <Row>
                            <Col>
                                <Tabs style={{ borderBottom: '' }} defaultActiveKey="description" transition={false}>
                                    <Tab id='tab-btn' eventKey="description" title="Description">
                                    </Tab>
                                    <Tab id='tab-btn' eventKey="architecture" title="Architecture">
                                        <div className='arch' style={{height:'55vh'}}>
                                        </div>
                                    </Tab>
                                    <Tab id='tab-btn' eventKey="gif" title="Video">
                                        <video style={{width: '100%'}} ref={this.getVideo} src={mp4} type="video/mp4"/>
                                        <img className='play' src={this.state.play? play : pause} alt="play" onClick={this.state.play? this.playVideo : this.pauseVideo} />
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Fade>
                </Container>
            </div>
        );
    }
}

export default Tourism;



// description - txt version 
  {/* <h1>COVID-19 Signals in Korea Tourism Industry</h1>
                                            <p>The tourism sector has been devastated by COVID-19 and It's predicted that 120 million jobs are at risk, with economic damage likely to exceed over $1 trillion according to World Economic Forum.</p>
                                            <h2>Background</h2>
                                            <p>Due to restrictions imposed in March when the coronavirus started spreading rapidly around the world, international travel came to a screeching halt in April and May, resulting in international tourist arrivals that trailed last year’s total by almost 60 percent through the first five months of 2020.</p>
                                            <h2>Signals</h2>
                                            <p> Depending on when travel restrictions will be fully lifted, the World Tourism Organization expects international tourism receipts (i.e. spending by international tourists) to drop between $910 billion and $1.2 trillion this year, which would set the global tourism industry back by 20 years.</p>
                                            <h2>Potential Risk Assessment</h2>
                                            <p>In Korea, tourism industry was also impacted according to the local news and media. KPMG Lighthouse Korea team thoroughly paid attention to these signals by utilizing KPMG Signals Repository.</p>
                                            <p>Data from DART, a corporate information electronic disclosure system operated by the Financial Supervisory Service, showed that COVID-19 worsened the financial situation of manufacturing and travel businesses.</p>
                                            <p>Our Outcome – Number of infected Monitoring</p>
                                            <h1>Global Signals Monitoring</h1>
                                            <p>We track COVID 19 data every day to understand the impact of COVID 19 on the world and the country.
In the global context, understanding the increase and decrease status of COVID 19 confirmed cases will be critical to the business. With its rich global network, KPMG first monitors the number of global coroners at near real-time intervals to collect signals.
Data visualization is also important. Data visualization helps users intuitively understand the current situation.
Furthermore, we are proactively monitoring domestic impact by identifying local covid19 confirmed cases and deaths.</p> */}