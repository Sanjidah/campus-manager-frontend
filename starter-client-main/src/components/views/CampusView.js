import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  order: {
    marginRight: "40px",


  },
  campus: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#45A29E",
    height: "auto",
    width: "400px",
    borderRadius: "40px",
  },
  createButton: {
    backgroundColor: "pink",
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

const CampusView = (props) => {
  const classes = useStyles();
  const { campus, deleteCampus, deleteStudent } = props;

  if (!campus.students.length) {
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
                All Campuses
              </Button>
            </Link>

            <Link className={classes.links} to={"/students"}>
              <Button
                variant="contained"
                color="white"
                style={{ marginRight: "10px", height: "60px", width: "200px" }}
              >
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>

        <button className={classes.campusButton}>
          <div className={classes.campus}>
            <h1>{campus.name}</h1>
            <p>
              <Link to={`/editcampus/` + campus.id}>
                <button>Edit Campus</button>
              </Link>
            </p>
            <p>
              <Link to={`/campuses`}>
                <button onClick={() => deleteCampus(campus.id)}>
                  Delete Campus
                </button>
              </Link>
            </p>
            <img src={campus.imageUrl} alt="Campus" className={classes.image} />
            <p>{campus.description}</p>
            <p>{campus.address}</p>
            <p>There are no students who attend this campus.</p>
            <p>
              {" "}
              <Link to={`/newstudent/`}>
                <button>Add Student</button>
              </Link>
            </p>
          </div>
        </button>
      
      </div>
    );
  }

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
                All Campuses
              </Button>
            </Link>

            <Link className={classes.links} to={"/students"}>
              <Button
                variant="contained"
                color="white"
                style={{ marginRight: "10px", height: "60px", width: "200px" }}
              >
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>

      <button className={classes.campusButton}>
        <div className={classes.campus}>
          <h1>{campus.name}</h1>
          <p>
            <Link to={`/editcampus/` + campus.id}>
              <button>Edit Campus</button>
            </Link>
          </p>
          <p>
            <Link to={`/campuses`}>
              <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
            </Link>
          </p>
          <img src={campus.imageUrl} alt="Campus" className={classes.image} />
          <p>{campus.description}</p>
          <p>{campus.address}</p>
          <ul>
            {campus.students.map((student) => {
              let name = student.firstname + " " + student.lastname;
              return (
                <div className={classes.order}>
                <div key={student.id}>
                  <Link to={`/student/${student.id}`}>{name}</Link>
                  <p>
                    <Link to={`/campuses`}>
                      <button onClick={() => deleteStudent(student.id)}>
                        Delete Student
                      </button>
                    </Link>
                  </p>
                </div>
                </div>
              );
            })}
          </ul>
          <p>
            <Link to={`/newstudent/`}>
              <button>Add Student</button>
            </Link>
          </p>
        </div>
      </button>

    </div>

  );
};

export default CampusView;
