import React, { Component } from 'react';
import './App_ver2.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Content from './components/content';
import ContentDeveloping from './components/content_developing';
import Sidebar from './components/sidebar';
import Home from './components/home';

import sample from './components/img/sample.jpg';


class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <Sidebar />
          <div id='main-contents'>
            {/* 개발 중인 페이지는 ContentDeveloping 컴포넌트 랜더링 + step props  / 개발이 끝난 페이지는 Content 컴포넌트 랜더링 + guide={img}, downlod={exe_file}*/}
            {/* step={0} : requirement not done / step={1} : requirement complete / step={2} : design complete / step={3} : implementation complete / step={4} : verification complete / step={5} : maintenanace  complete*/}
            {/* contentDeveloping componente에 example image file을 exam={filename} 으로 전달 */}
            <Route path='/' exact component={Home}/>
            <Route path='/원천징수영수증' exact render={() => <Content guide={sample} download={sample} exam={sample}/>}/>
            <Route path='/종합소득세질문서' exact render={() => <Content guide={sample} download={sample} exam={sample}/>}/>
            <Route path='/기부금명세서' exact render={() => <ContentDeveloping step={3} exam={sample}/>}/>
            <Route path='/외국인등록증' exact render={() => <ContentDeveloping step={1} exam={sample}/>}/>
            <Route path='/환급계좌' exact render={() => <ContentDeveloping step={0} exam={sample} />}/>
            <Route path='/연금저축명세서' exact render={() => <ContentDeveloping step={2} exam={sample}/>}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
