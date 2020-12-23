import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const QAs = [
  { Q: "Q1", A: "A1" },
  { Q: "Q2", A: "A2" },
  { Q: "Q3", A: "A3" },
  { Q: "Q4", A: "A4" },
  { Q: "Q5", A: "A5" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    width: '100%',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const resultValue = QAs.map((QA, i) =>

  <FormControl key={i}>
    <InputLabel htmlFor="data"></InputLabel>
    <div style={{ marginBottom: '3%' }}>
      <TextField
        id="data"
        label={QA.Q}
        defaultValue={QA.A}
        variant="outlined"
        fullWidth
      />
    </div>
  </FormControl>
);

export default function ResultValue() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {resultValue}
    </div>
  );
}
