import { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { fetchAllCampusesThunk, addCampusThunk } from "../../store/thunks";
import { NewCampusView } from "../views";

class NewCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            description: "",
            imageUrl: "",
            redirect: false, 
            redirectId: null
        };
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleSubmit = async (e) => {
        e.preventDefault();
        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
        };

        let newCampus = await this.props.addCampus(campus);
        // console.log(newCampus)
        // let url = window.location.href;
        // url = url.substring(0, url.lastIndexOf("/"));
        // await this.props.addCampusThunk(campus);
        // window.location.href = url + "/campuses";

        this.setState({
            name: "", 
            address: "", 
            description: "", 
            imageUrl: "",
            redirect: true, 
            redirectId: newCampus.id
          });


    };

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        console.log(this.state.redirectId)
        if(this.state.redirect) {
          return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
          <NewCampusView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);
