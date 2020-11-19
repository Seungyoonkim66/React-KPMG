import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ShowExample from './show_example';

class Content extends Component {

    render() {
        return (
            <div id='content'>
                <p id='user-guide-title'>User Guide<div style={{float:'right', paddingRight:'5%'}}><ShowExample exam={this.props.exam}/></div></p>
                <div id='user-guide'><img src={this.props.guide} alt='user-guide-img' id='user-guide-img' /></div>
                <div id='download'><a style={{ textDecoration: 'none' }} href={this.props.download} download><Button variant='outline-light' id='download-btn' block size="lg" >Click to download</Button></a></div>
            </div>
        );
    }
}

export default Content;