import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// import ResultValue from './resultvalue';
import SampleImage from '../../static/sample_image.jpg';
import Files from '../../static/samplefile.json';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    titleContainer: {
        color: 'white',
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3),
    },
    QAContainer: {
        backgroundColor: 'rgba(107, 186, 167, 0.5)',
    },
    fileInfoContainer: {
        paddingTop: theme.spacing(1.5),
    },
    infoBox: {
        backgroundColor: 'rgba(251,161,0, 0.5)',
        borderRadius: '4px',
    },
    grid: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    box: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '4px',
        boxShadow: '1px 1px 1px #555555',
    }
}));


export default function Detail({ fileId }) {
    const classes = useStyles();
    const file = Files.files[fileId];

    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <Container maxWidth="lg">
                    <Grid container direction="row" justify="space-between">
                        <div style={{ fontSize: '50px' }}>{file.name}</div>
                        <div><Link to='/' style={{ textDecoration: 'none' }}> <IconButton aria-label="delete"><CloseIcon fontSize="large" /></IconButton></Link></div>
                    </Grid>
                </Container>
            </div>

            <div className={classes.QAContainer}>
                <Container>

                    <Grid container direction="row" justify="space-between">
                        <Grid item xs={4} className={classes.grid}><Box height={650} className={classes.box}>
                        
                        </Box></Grid>
                        <Grid item xs={8} className={classes.grid}><Box height={650} className={classes.box}>
                            
                        </Box></Grid>
                    </Grid>
                </Container>
            </div>

            <div className={classes.fileInfoContainer}>
                <Container>
                    <Box height={120} className={classes.infoBox}></Box>
                </Container>
            </div>
        </div>
        // <Container id='detail'>
        //     <Grid container justify="center" alignItems="stretch">
        //         <Grid item xs={12} className={classes.grid}>
        //             {/* <Box bgcolor="primary.light" className={classes.box} height={50}> */}
        //                 <div className={classes.controlBar}>
        //                     {file.name}
        //                     <Link to='/' style={{ textDecoration: 'none' }}>
        //                         <IconButton aria-label="delete" color="default">
        //                             <CloseIcon fontSize="large" />
        //                         </IconButton>
        //                     </Link>
        //                 </div>
        //             {/* </Box> */}
        //         </Grid>
        //         <Grid item xs={5}>
        //             <div style={{ textAlign: 'left', marginLeft: '20px' }}>Annotations</div>
        //             <Box bgcolor="primary.light" className={classes.table} height={630}>
        //                 {/* <ResultValue fileIndex={fileId} /> */}
        //             </Box>
        //         </Grid>
        //         <Grid item xs={7} >
        //             <div style={{ textAlign: 'left', marginLeft: '20px' }}>Image</div>
        //             <Box bgcolor="primary.light" className={classes.box} height={630}>
        //                 <div style={{ height: '630px', overflow: 'auto' }}>
        //                     <img src={SampleImage} alt="sample_image" style={{ width: '100%' }} />
        //                 </div>
        //             </Box>
        //         </Grid>
        //         <Grid item xs={12}>
        //             <div style={{ textAlign: 'left', marginLeft: '20px' }}>Documentation Information</div>
        //             <Box bgcolor="primary.light" id='doc_info' className={classes.box} height={85}>
        //                 <div id='doc_info_table' style={{ display: 'flex', flexDirection: 'row', lineHeight: '1.2rem', textAlign: 'center' }}>
        //                     <div id='doc_info_title'
        //                         style={{
        //                             display: 'flex',
        //                             flexDirection: 'column',
        //                             width: '30%',
        //                             backgroundColor: 'rgba(255, 255, 255, 0.3)',
        //                             borderRadius: '4px',
        //                             fontWeight: '600',
        //                         }} >
        //                         <div id='doc_info_table_each_row'>file name</div>
        //                         <div id='doc_info_table_each_row'>#pages</div>
        //                         <div id='doc_info_table_each_row'>processing date</div>
        //                         <div id='doc_info_table_each_row'>uploader</div>
        //                     </div>
        //                     <div id='doc_info_content'
        //                         style={{
        //                             width: '70%',
        //                             backgroundColor: 'rgba(255, 255, 255, 0.3)',
        //                             borderRadius: '4px',
        //                             marginLeft: '1%',
        //                             color: 'black',
        //                         }}>
        //                         <div id='doc_info_table_each_row'></div>
        //                         <div id='doc_info_table_each_row'></div>
        //                         <div id='doc_info_table_each_row'></div>
        //                         <div id='doc_info_table_each_row'></div>
        //                     </div>
        //                 </div>
        //             </Box>
        //         </Grid>
        //     </Grid>
        // </Container>
    );
}

