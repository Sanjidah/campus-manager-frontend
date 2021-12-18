import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Georgia, serif', 
    fontSize: '35px', 
    color: '#9ebe35'
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',
    fontFamily: 'Georgia, serif', 
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  },
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  // title: {
  //   flexGrow: 1,
  //   textAlign: 'left',
  //   textDecoration: 'none'
  // }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  
}));

const NewCampusView = (props) => {
  // const {handleChange, handleSubmit } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
        <Typography variant="h6" className={classes.title} color="#9ebe35" >
            Campus Manager
          </Typography>

          <Link className={classes.links} to={'/'} >
              <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                Home
              </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Add Campus
          </Typography>
        </div>
        

        <form style={{textAlign: 'center'}} noValidate autoComplete="off" onSubmit={props.handleSubmit}>

          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
          <input type="text" name="Campus Name" onInput={ e => props.setCampusName(e.target.value)} />
          <br/>
          <br/>

          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Address: </label>
          <input type="text" name="Campus Address" onInput={ e => props.setCampusAddress(e.target.value)} />
          <br/>
          <br/>

          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Description: </label>
          <input type="text" name="Campus Description" onInput={ e => props.setCampusDescription(e.target.value)} />
          <br/>
          <br/>

          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Image URL: </label>
          <input type="text" name="Campus Image URL" onInput={ e => props.setCampusImageUrl(e.target.value)} />
          <br/>
          <br/>

          <Button type="submit" variant="contained" color="primary">
              Submit
          </Button>
          <br/>
          <br/>
          
        </form>


        
        {/* <form className={classes.root} noValidate autoComplete="off" onSubmit={props.handleSubmit}>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Name" onInput={ e => props.setCampusName(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Address" onInput={ e => props.setCampusAddress(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Description" onInput={ e => props.setCampusDescription(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <TextField id="standard-basic" label="Campus Image URL" onInput={ e => props.setCampusImageUrl(e.target.value)}/>
        </Grid>

        <Grid container justify="center">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
        
        </form> */}

        </div>
      </div>
    
  )
}

NewCampusView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setCampusName: PropTypes.func.isRequired,
  setCampusAddress: PropTypes.func.isRequired,
  // setCampusId: PropTypes.func.isRequired,
  setCampusDescription: PropTypes.func.isRequired,
  setCampusImageUrl: PropTypes.func.isRequired,
}; 

export default NewCampusView;