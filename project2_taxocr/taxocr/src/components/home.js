import React, { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import test from './img/test.PNG';
import img from './img/idea.png';

class Home extends Component {
    render() {
        return (
            // <div className='home'>
            //     <div id='home-title'>OCR </div>
            //     <div id='home-desc'>Optical character recognition or optical character reader (OCR) is the electronic or mechanical conversion of images of typed, handwritten or printed text into machine-encoded text, whether from a scanned document, a photo of a document, a scene-photo or from subtitle text superimposed on an image. Widely used as a form of data entry from printed paper data records – whether passport documents, invoices, bank statements, computerized receipts, business cards, mail, printouts of static-data, or any suitable documentation.</div>
            //     <div id='home-contact'><p>lighthouse@kr.kpmg.com</p><p>02-123-4567</p><p>152 Teheran-ro, Yeoksam 1-dong, Gangnam-gu, Seoul</p></div>
            // </div>
            // <div className='home2'>
            //     <Carousel className='carousal' pause='hover'> 
            //         <Carousel.Item interval={3000}><img className="d-block w-100" src={test} alt="slide" style={{height: '80vh', padding:'6rem 8rem'}}/></Carousel.Item>
            //         <Carousel.Item interval={3000}><img className="d-block w-100" src={test} alt="slide" style={{height: '80vh', padding:'6rem 8rem'}}/></Carousel.Item>
            //     </Carousel>
            // </div>
            <div className='home'>
                <img src={img} alt='img' id='home-icon' />
                <div id='home-title'>KPMG TAX-OCR PORTAL </div>
                <div id='home-desc'>KPMG TAX-OCR Portal is a web platform that helps KPMG Tax professionals perform TAX-OCR related tasks such as client PBC scanning and tax filing, etc. easily and efficiently. OCR (optical character recognition) is the use of technology to distinguish printed or handwritten text characters inside digital images of physical documents, such as a scanned paper document. The basic process of OCR involves examining the text of a document and translating the characters into code that can be used for data processing.</div>
            
            </div>
        );
    }
}

export default Home;