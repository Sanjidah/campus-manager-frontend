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
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Georgia, serif",
    fontSize: "35px",
    color: "#9ebe35",
  },
  appBar: {
    backgroundColor: "#11153e",
    shadows: ["none"],
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
    fontFamily: "Georgia, serif",
    width: "50%",
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


  if (!campus.students.length){

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
                color="primary"
                style={{ marginRight: "10px" }}
              >
                Home
              </Button>
            </Link>

            <Link className={classes.links} to={"/campuses"}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
              >
                All Campuses
              </Button>
            </Link>

            <Link className={classes.links} to={"/students"}>
              <Button variant="contained" color="primary">
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>

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
              color="primary"
              style={{ marginRight: "10px" }}
            >
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

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
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>{name}</Link>
              <p>
                {/* <Link to={`/campus/${campus.id}`}> */}
                <Link to={`/campuses`}>
                  <button onClick={() => deleteStudent(student.id)}>
                    Delete Student
                  </button>
                </Link>
              </p>
            </li>
          );
        })}
      </ul>
      <p>
        <Link to={`/newstudent/`}>
          <button>Add Student</button>
        </Link>
      </p>
    </div>
  );
};

export default CampusView;
