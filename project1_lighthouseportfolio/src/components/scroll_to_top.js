import React, { Component } from 'react';

class ScrollToTop extends Component{

    componentDidUpdate(prevProps){
        if (this.props.location.path !== prevProps.location.path){
            window.scrollTo(0,0);
        }
    }

    render(){
        return this.props.children;
    }
}

export default ScrollToTop;