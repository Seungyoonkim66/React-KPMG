import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Typography from '@material-ui/core/Typography';

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#00338d',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#00338d',
        },
    },
    line: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#00338d',
    },
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#00338d',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div className={clsx(classes.root, {[classes.active]: active,})}>
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = { active: PropTypes.bool, completed: PropTypes.bool,};

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        paddingTop: '5%',
    },
    stepperDiv:{
        background: '#f2f5f9',
    },
    labelStyle: {
        fontSize: '1vw',
    }
}));

export default function CustomizedSteppers({step}) {

    const theme = createMuiTheme({
        typography: {
            fontFamily: "monospace",
            // fontSize: 15,
        }
    });

    const classes = useStyles();
    const steps = ['Requirements', 'Design', 'Implementation', 'Verification', 'Maintenance'];
    return (
        <div className={classes.root}>
            <Stepper className={classes.stepperDiv} alternativeLabel={true} activeStep={step} connector={<QontoConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel classes={{label: classes.labelStyle}} StepIconComponent={QontoStepIcon}><MuiThemeProvider theme={theme}><Typography>{label}</Typography></MuiThemeProvider></StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

