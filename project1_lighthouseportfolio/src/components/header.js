import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import logo from '../components/static/KPMG_logo_white.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            <Container fluid>
                <Row className="home-header">
                    <Col>
                        <a href='/'><img id='header-logo' alt='logo' src={logo} /></a>
                    </Col>
                    <Col xs={8}>
                        <div id='header-nav' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <OverlayTrigger placement='bottom' overlay={<Tooltip id={`tooltip-bottom`}>Home</Tooltip>}>
                                <a href='/'><Button variant="light" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '2vw' }}>Home</Button></a>
                            </OverlayTrigger>
                            <OverlayTrigger placement='bottom' overlay={<Tooltip id={`tooltip-bottom`}>About us, lighthouse</Tooltip>}>
                                <Link to='/about'><Button variant="light" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '2vw' }}>About</Button></Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement='bottom' overlay={<Tooltip id={`tooltip-bottom`}>See more solutions</Tooltip>}>
                                <Link to='/projects'><Button variant="light" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', fontSize: '2vw' }}>Solutions</Button></Link>
                            </OverlayTrigger>
                            {/* <OverlayTrigger placement='bottom' overlay={<Tooltip id={`tooltip-bottom`}>About CS team</Tooltip>}>
                                <a href='https://intra.ema.kpmg.com/sites/ADV/KR/Pages/CS.aspx' target='blank'><Button variant="light" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', fontSize:'2vw'}}>Consulting Services</Button></a>
                            </OverlayTrigger> */}
                            {/* <OverlayTrigger placement='bottom' overlay={<Tooltip id={`tooltip-bottom`}>Contact information</Tooltip>}>
                                <Link to='/contact'><Button variant="light" style={{ backgroundColor: 'transparent', border: 'none',paddingTop: '20px', color: 'white' }}><strong>Contact</strong></Button></Link>
                            </OverlayTrigger> */}
                        </div>

                    </Col>
                    <Col>
                        <div>
                            {/* <Form.Row style={{ display: 'flex', float: 'right' }}>
                                <Form.Control id='search-bar' style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none', backgroundColor: 'transparent', borderRadius: '0', borderBottom: '1px solid white'}} size="sm" type="text" placeholder="" />
                                <Button variant="light" style={{ backgroundColor: 'transparent', border: 'none', }}><img alt='search_icon' src={search_white} style={{ width: '15px' }} /></Button>
                            </Form.Row> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;
