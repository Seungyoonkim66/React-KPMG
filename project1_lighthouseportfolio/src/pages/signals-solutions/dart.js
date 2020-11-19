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
import play from '../../components/gif/play-btn.png';
import pause from '../../components/gif/pause-btn.png';

import mp4 from '../../components/gif/exampleMP4.mp4';

class Dart extends Component {
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
                            <p id='description-title'><strong>Financial Statement Analytics</strong><Link to='/signal'><img src={back} alt='img' id='back-icon'/></Link></p>
                        </Col>
                    </Row>
                    <Row>
                            <Col>
                                <Tabs style={{ borderBottom: '' }} defaultActiveKey="description" transition={false}>
                                    <Tab id='tab-btn' eventKey="description" title="Description">
                                        <div className='desc'>
                                            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                                            </div>
                                      </div>
                                    </Tab>
                                    <Tab id='tab-btn' eventKey="architecture" title="Architecture">
                                        <div className='arch'>
                                        </div>
                                    </Tab>
                                    <Tab id='tab-btn' eventKey="gif" title="Video">
                                        <video style={{width: '100%'}} ref={this.getVideo} src={mp4} type="video/mp4"/>
                                        <img className='play' src={this.state.play? play : pause} alt="play" onClick={this.state.play? this.playVideo : this.pauseVideo} />
                                    </Tab>
                                    {/* <Tab id='tab-btn' eventKey="live_demo" title="Live Demo"></Tab> */}
                                </Tabs>
                            </Col>
                        </Row>
                    </Fade>
                </Container>
            </div>
        );
    }
}

export default Dart;