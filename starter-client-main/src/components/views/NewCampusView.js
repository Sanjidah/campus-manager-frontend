import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
  const {handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="#9ebe35" >
            Campus Manager
            <Link className={classes.links} to={'/'} >
              <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                Home
              </Button>
            </Link>
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            New Campus
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
          <input type="text" name="name" onChange ={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Address: </label>
          <input type="text" name="address" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
          <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Description: </label>
          <input type="text" name="desc" onChange={(e) => handleChange(e)} />
          <br/>
          <br/>

          {/* <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
          <input type="double" name="gpa" onChange={(e) => handleChange(e)} />
          <br/>
          <br/> */}

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
        </form>
        </div>
      </div>
    
  )
}

export default NewCampusView;