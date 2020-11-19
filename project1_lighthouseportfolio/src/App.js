import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './components/scroll_to_top';
import Home from './pages/home';
import Header from './components/header';
import About from './pages/about';
import Projects from './pages/projects';
import OCR from './pages/ocr-solutions/ocr';
import NLP from './pages/nlp-solutions/nlp';
import Chatbot from './pages/chatbot-solutions/chatbot';
import Signal from './pages/signals-solutions/signal';
import TaxOCR from './pages/ocr-solutions/tax-ocr';
import Insight from './pages/insight';
import JEOCR from './pages/ocr-solutions/je_ocr';
import NH from './pages/ocr-solutions/nh';
import ScanDoc from './pages/ocr-solutions/scandoc';
import CLR from './pages/ocr-solutions/clr';
import KCCM from './pages/nlp-solutions/k_ccm';
import LIBOR from './pages/nlp-solutions/libor';
import Accounting from './pages/nlp-solutions/accounting';
import Woori from './pages/nlp-solutions/woori';
import ClosedBusiness from './pages/chatbot-solutions/closed_business';
import CheckTransaction from './pages/chatbot-solutions/check_transaction';
import Tourism from './pages/signals-solutions/tourism';
import Dart from './pages/signals-solutions/dart';




// import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <div className='contents'>
          <ScrollToTop>
            <Route path='/' exact component={Home} />
            {/* HOME */}
            <Route path='/about' exact component={About} />
            <Route path='/lighthouse' exact component={About} />
            <Route path='/insight' exact component={Insight} />
            <Route path='/projects' exact component={Projects} />
            {/* Solutions */}
            <Route path='/ocr' exact component={OCR} />
            <Route path='/nlp' exact component={NLP} />
            <Route path='/chatbot' exact component={Chatbot} />
            <Route path='/signal' exact component={Signal} />
            {/* OCR */}
            <Route path='/tax_ocr' exact component={TaxOCR} />
            <Route path='/je_ocr' exact component={JEOCR} />
            <Route path='/nh' exact component={NH} />
            <Route path='/scandoc' exact component={ScanDoc} />
            <Route path='/clr' exact component={CLR} />
            {/* NLP */}
            <Route path='/k_ccm' exact component={KCCM} />
            <Route path='/libor' exact component={LIBOR} />
            <Route path='/accounting' exact component={Accounting} />
            <Route path='/woori' exact component={Woori} />
            {/* Chatbot */}
            <Route path='/closed_business' exact component={ClosedBusiness} />
            <Route path='/check_transaction' exact component={CheckTransaction} />
            {/* Signals Repository */}
            <Route path='/tourism' exact component={Tourism} />
            <Route path='/dart' exact component={Dart} />

            {/* IGNORE */}
            {/* <Route path='/contact' exact component={Contact} /> */}
          </ScrollToTop>
        </div>
      </Router>
    </div>
  );
}

export default App;
