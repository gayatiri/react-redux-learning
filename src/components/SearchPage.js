import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root :{
    marginTop : theme.spacing(5),
  },
  form: {
      '& > *' : {
        margin: theme.spacing(3),
      },
    width: '100%', 
    display: 'flex',   
  },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
}));

export default function SearchPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="lg" fullWidth className ={classes.root}>
      <CssBaseline />
        <Paper >
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="BorrowerName"
            label="Borrower Name"
            name="BorrowerName"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="loanId"
            label="loanId"
            id="loanId"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="loanAmount"
            label="loanAmount"
            id="loanAmount"
          />
        </form>
        <Button
            type="submit"
            maxWidth= "md"
            variant="contained"
            color="primary"
            className={classes.submit}
          > Search
          </Button>
        </Paper>
     
    </Container>
  );
}