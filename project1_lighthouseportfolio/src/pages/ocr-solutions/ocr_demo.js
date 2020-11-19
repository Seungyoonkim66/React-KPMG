import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import imageCompression from "browser-image-compression";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
// import { Fade } from "react-awesome-reveal";
import '.././page_css/ocr_demo.css';
import arrow from '../../components/static/arrow2.svg';
import upload from '../../components/static/upload.svg';

const url = "http://localhost:5000/accounting-samples";
const img_url = "http://localhost:5000/extract-sample-image/accounting/";

class OCRDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            upload: [],
            btn_style: {
                color: '#00338d'
            }
        };
        this.onDrop = this.onDrop.bind(this);
        this.onClickRun = this.onClickRun.bind(this);
        this.onClickFile = this.onClickSampleFile.bind(this);
    }

    async componentDidMount() {
        let { data: files } = await axios.get(url);
        this.setState({ files });
    }


    async onDrop(e) {
        this.setState(this.state.upload = e.target.files[0])
        const options = {
            maxSizeMB: 0.2,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };
        try {
            const compressedFile = await imageCompression(this.state.upload, options);
            console.log(compressedFile);
            const formData = new FormData();
            formData.append('doc_type', 'accounting');
            formData.append('image', compressedFile);

            return axios.post('http://localhost:5000/file', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(res => { console.log(res); this.setState(this.state.btn_style = { color: 'white' }) }).catch(err => { alert('failed') });

        } catch (error) {
            console.log(error);
        }
    }

    onClickRun(e) {
        console.log('click');
        alert('Executing OCR');
    }

    onClickSampleFile(e) {

        console.log(this.state.files.sample_list[e - 1].image.file_name);

        const total_price = (
            <div>
                {this.state.files.sample_list[e - 1].extract_data.총금액}
            </div>
        );
        const pay_due = (
            <div>
                {this.state.files.sample_list[e - 1].extract_data.지급기일}
            </div>
        );
        const pay_to = (
            <div>
                {this.state.files.sample_list[e - 1].extract_data.지급처}
            </div>
        );
        const posting_date = (
            <div>
                {this.state.files.sample_list[e - 1].extract_data.전기일자}
            </div>
        );
        const proof_date = (
            <div>
                {this.state.files.sample_list[e - 1].extract_data.증빙일자}
            </div>
        );


        const extract_image = (
            <div>
                <img style={{ width: '100%', borderRadius: '9px' }} alt='extract' src={img_url + this.state.files.sample_list[e - 1].image.file_name} />
            </div>
        );

        ReactDOM.render(total_price, document.getElementById('total_price'));
        ReactDOM.render(pay_due, document.getElementById('pay_due'));
        ReactDOM.render(pay_to, document.getElementById('pay_to'));
        ReactDOM.render(posting_date, document.getElementById('posting_date'));
        ReactDOM.render(proof_date, document.getElementById('proof_date'));
        ReactDOM.render(extract_image, document.getElementById('extract-image'));

    }

    render() {

        return (
            <div className='ocr_demo'>
                <Container style={{ marginTop: '80px' }}>
                    {/* <Fade directrion='down' cascade duration={800}> */}
                        <Row>
                            <Col xs={9}>
                                <div id='file-upload'>
                                    <img alt="upload-icon" src={upload} style={{ width: '50px', marginBottom: '30px' }} />
                                    <label id='file-input-label' for='file-input'><strong>Choose File</strong></label>
                                    <input id='file-input' type='file' name='file' onChange={this.onDrop} />
                                </div>
                            </Col>
                            <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', }}>
                               
                                <DropdownButton align='right' id="dropdown-button-drop-1" size='lg' title="Sample List" variant='light'>
                                    <Dropdown.Item as="button" onClick={() => this.onClickSampleFile(1)}>회계전표_국내청구서</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => this.onClickSampleFile(2)}>회계전표_세금계산서</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => this.onClickSampleFile(3)}>회계전표_수입부대비전표</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => this.onClickSampleFile(4)}>회계전표_MM_1</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => this.onClickSampleFile(5)}>회계전표_MM_2</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => this.onClickSampleFile(6)}>회계전표_MM_3</Dropdown.Item>
                                    <Dropdown.Item as="button" onClick={() => this.onClickSampleFile(7)}>회계전표_MM_4</Dropdown.Item>
                                </DropdownButton>
                                <button id='run-btn' style={this.state.btn_style}><a href='/ocr'>RESET</a></button>
                                <button id='run-btn' onClick={this.onClickRun} style={this.state.btn_style}>RUN</button>
                            </Col>
                        </Row>
                        <Row id='divider'>
                            <img src={arrow} alt='arrow'/>
                        </Row>
                        <Row style={{ marinBottom: '50px' }}>
                            <Col xs={5}>
                                <div id='extract-data'>
                                <h1 id='title'><strong>EXTRACT DATA</strong></h1>
                                    <Table responsive="sm" >
                                        <thead>
                                            <tr>
                                                <th style={{ borderBottom: '2px solid #a4a4a4', borderTop: 'none', color: '#a4a4a4', textAlign: 'center' }}>extract data</th>
                                                <th style={{ borderBottom: '2px solid #a4a4a4', borderTop: 'none', color: '#a4a4a4', textAlign: 'center' }}>extract data value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>total price</strong></td>
                                                <td id='total_price'></td>
                                            </tr>
                                            <tr>
                                                <td><strong>payment due</strong></td>
                                                <td id='pay_due'></td>
                                            </tr>
                                            <tr>
                                                <td><strong>payment to</strong></td>
                                                <td id='pay_to'></td>
                                            </tr>
                                            <tr>
                                                <td><strong>posting date</strong></td>
                                                <td id='posting_date'></td>
                                            </tr>
                                            <tr>
                                                <td><strong>proof date</strong></td>
                                                <td id='proof_date'></td>
                                            </tr>
                                        </tbody>

                                    </Table>
                                </div>
                            </Col>
                            <Col>
                                <h1 id='title'><strong>EXTRACT IMAGE</strong></h1>
                                <div id='extract-image'></div>
                            </Col>
                        </Row>
                    {/* </Fade> */}
                </Container>
            </div>
        );
    }
}

export default OCRDemo;