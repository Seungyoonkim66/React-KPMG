import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";
import logo from './img/KPMG_logo_white.svg';


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked_0:false,
            clicked_1: false,
            clicked_2: false,
            clicked_3: false,
            clicked_4: false,
            clicked_5: false,
            clicked_6: false
        }
        this.ClickTab_0 = this.ClickTab_0.bind(this);
        this.ClickTab_1 = this.ClickTab_1.bind(this);
        this.ClickTab_2 = this.ClickTab_2.bind(this);
        this.ClickTab_3 = this.ClickTab_3.bind(this);
        this.ClickTab_4 = this.ClickTab_4.bind(this);
        this.ClickTab_5 = this.ClickTab_5.bind(this);
        this.ClickTab_6 = this.ClickTab_6.bind(this);
    }
    ClickTab_0() {
        this.setState({
            clicked_0: false,
            clicked_1: false,
            clicked_2: false,
            clicked_3: false,
            clicked_4: false,
            clicked_5: false,
            clicked_6: false
        });
    }
    ClickTab_1() {
        this.setState({
            clicked_0: false,
            clicked_1: true,
            clicked_2: false,
            clicked_3: false,
            clicked_4: false,
            clicked_5: false,
            clicked_6: false
        });
    }
    ClickTab_2() {
        this.setState({
            clicked_0: false,
            clicked_1: false,
            clicked_2: true,
            clicked_3: false,
            clicked_4: false,
            clicked_5: false,
            clicked_6: false,
        });
    }
    ClickTab_3() {
        this.setState({
            clicked_0: false,
            clicked_1: false,
            clicked_2: false,
            clicked_3: true,
            clicked_4: false,
            clicked_5: false,
            clicked_6: false,
        });
    }
    ClickTab_4() {
        this.setState({
            clicked_0: false,
            clicked_1: false,
            clicked_2: false,
            clicked_3: false,
            clicked_4: true,
            clicked_5: false,
            clicked_6: false,
        });
    }
    ClickTab_5() {
        this.setState({
            clicked_0: false,
            clicked_1: false,
            clicked_2: false,
            clicked_3: false,
            clicked_4: false,
            clicked_5: true,
            clicked_6: false,
        });
    }
    ClickTab_6() {
        this.setState({
            clicked_0: false,
            clicked_1: false,
            clicked_2: false,
            clicked_3: false,
            clicked_4: false,
            clicked_5: false,
            clicked_6: true,
        });
    }

    render() {
        const tabClass_0 = ["tab"];
        const tabClass_1 = ["tab"];
        const tabClass_2 = ["tab"];
        const tabClass_3 = ["tab"];
        const tabClass_4 = ["tab"];
        const tabClass_5 = ["tab"];
        const tabClass_6 = ["tab"];
        if (this.state.clicked_0) { tabClass_0.push('clicked'); }
        if (this.state.clicked_1) { tabClass_1.push('clicked'); }
        if (this.state.clicked_2) { tabClass_2.push('clicked'); }
        if (this.state.clicked_3) { tabClass_3.push('clicked'); }
        if (this.state.clicked_4) { tabClass_4.push('clicked'); }
        if (this.state.clicked_5) { tabClass_5.push('clicked'); }
        if (this.state.clicked_6) { tabClass_6.push('clicked'); }
        return (
            <div className="sidebar">
                <div id='main-sidebar'>
                    <Link to='/' className='link'><div id='main-sidebar-logo' onClick={() => this.ClickTab_0()} className={tabClass_0.join(' ')}><img style={{ width: '45%' }} src={logo} alt='logo' /><div id='main-sidebar-title'>TAX-OCR</div></div></Link>
                    <Link to='/원천징수영수증' className='link'><div id='tab' onClick={() => this.ClickTab_1()} className={tabClass_1.join(' ')}>원천징수영수증</div></Link>
                    <Link to='/종합소득세질문서' className='link'><div id='tab' onClick={this.ClickTab_2} className={tabClass_2.join(' ')}>종합소득세질문서</div></Link>
                    <Link to='/기부금명세서' className='link'><div id='tab' onClick={this.ClickTab_3} className={tabClass_3.join(' ')}>기부금명세서</div></Link>
                    <Link to='/외국인등록증' className='link'><div id='tab' onClick={this.ClickTab_4} className={tabClass_4.join(' ')}>외국인등록증</div></Link>
                    <Link to='/환급계좌' className='link'><div id='tab' onClick={this.ClickTab_5} className={tabClass_5.join(' ')}>환급계좌</div></Link>
                    <Link to='/연금저축명세서' className='link'><div id='tab' onClick={this.ClickTab_6} className={tabClass_6.join(' ')}>연금저축명세서</div></Link>
                </div>
            </div>
        );
    }
}

export default SideBar;
