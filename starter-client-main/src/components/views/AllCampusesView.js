import PropTypes from "prop-types";
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

const AllCampusesView = (props) => {
  const { campuses, deleteCampus } = props;
  const classes = useStyles();
  if (!props.allCampuses.length) {
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

        <p>There are no campuses.</p>
        <Link to={`/newcampus`}>
          <button>Add New Campus</button>
        </Link>
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
              Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button variant="contained" color="primary">
              Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src={campus.imageUrl} alt="Campus" className={classes.image} />
          <p>{campus.description}</p>
          <button onClick={() => deleteCampus(campus.id)}>Delete</button>
        </div>
      ))}
      <p>
        <Link to={`/newcampus`}>
          <button>Add New Campus</button>
        </Link>
      </p>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
