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
  campus: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#45A29E",
    height: "auto",
    width: "400px",
    borderRadius: "40px",
  },
  campusButton: {
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    backgroundColor: "#45A29E",
    borderRadius: "40px",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Georgia, serif",
    fontSize: "80px",
    color: "#66FCF1",
  },
  appBar: {
    backgroundColor: "#1F2833",
    shadows: ["none"],
  },
  greeting: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    fontFamily: "Georgia, serif",
    width: "0%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
  },
  image: {
    width: "200px",
    height: "auto",
  },
}));

const StudentView = (props) => {
  const classes = useStyles();
  const { student } = props;
  return (
    <div>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="#9ebe35">
            Campus Manager
          </Typography>

          <Link className={classes.links} to={"/"}>
            <Button
              variant="contained"
              color="white"
              style={{ marginRight: "10px", height: "60px", width: "200px" }}
            >
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="white"
              style={{ marginRight: "10px", height: "60px", width: "200px" }}
            >
              Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button
              variant="contained"
              color="white"
              style={{ marginRight: "10px", height: "60px", width: "200px" }}
            >
              Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <button className={classes.campusButton}>
        <div className={classes.campus}>
          <h1>{student.firstname + " " + student.lastname}</h1>
          <p>
            <Link to={`/editstudent/` + student.id}>
              <button>Edit Student</button>
            </Link>
          </p>
            <div>
            {student.campus ? (
              <div>
                <Link to={`/campus/` + student.campus.id}>
                <h3>{student.campus.name}</h3></Link>
                <img src={student.imageUrl}
                    alt="Student profile"
                    className={classes.image}/>
                <h3>{student.email}</h3>
                <h3>GPA: {student.gpa}</h3>
              </div>
            ) : (
              <h3>Student is currently not enrolled in a campus.</h3>
            )}
            </div>
         </div>
       </button>

    </div>
  );

};

export default StudentView;