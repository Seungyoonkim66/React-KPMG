import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Files from '../../static/files.json';

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


export default function ResultValue({ fileIndex }) {
  const classes = useStyles();
  const resultValue = Files[fileIndex].QAs.map((QA, i) =>
  <FormControl key={i}>
    <InputLabel htmlFor="data"></InputLabel>
    <div style={{ marginBottom: '3%' }}>
      <TextField
        label={QA.Q}
        defaultValue={QA.A}
        variant="outlined"
        fullWidth
      />
    </div>
  </FormControl>
);

  return (
    <div className={classes.root}>
      {resultValue}
    </div>
  );
}
