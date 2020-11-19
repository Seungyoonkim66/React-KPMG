import React, { Component } from 'react';
import Canvas from '../components/canvas/canvas_render';

class Contact extends Component {
    render() {
        return( 
        <div>
            <canvas id={'sample'} width={'500'} height={'500'}></canvas>
        </div>
        );
    }
}

export default Contact;