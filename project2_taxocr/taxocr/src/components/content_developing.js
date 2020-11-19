import React, { Component } from 'react';
import img from './img/Man_Desk.png';
import Spinner from 'react-bootstrap/Spinner';
import CutomizedSteppers from './stepper';
import ShowExample from './show_example';

class ContentDeveloping extends Component {

    render() {
        return (
            <div id='content-developing'>
                <div id='developing-txt'>
                    <p><Spinner animation="grow" style={{marginBottom:'2.5%'}}/>&ensp;Developing...</p>
                    <div id='example-btn-div'><ShowExample exam={this.props.exam}/></div>
                </div>
                <CutomizedSteppers step={this.props.step}/>
                <img id='developing-img' alt='deveoping' src={img} />
            </div>
        );
    }
}

export default ContentDeveloping;