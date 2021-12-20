import { Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
  image:{  
    width: '200px',
    height: "auto",
  }
}));

const StudentView = (props) => {
  const classes = useStyles();
  const { student, deleteStudent} = props;
  return (
    <div>
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


      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} alt="Student profile" className={classes.image}/>
      <p>
        <Link to={`/editstudent/` + student.id}>
          <button>Edit Student</button>
        </Link>
      </p>
      <Link to={`/students`}>
      <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
      </Link>
      <h3> <Link to={`/campus/${student.campus.id}`}>
        {student.campus.name}
      </Link> </h3>
      <h3>{student.email}</h3>
      <h3>GPA: {student.gpa}</h3>
    </div>
  );

};

export default StudentView;