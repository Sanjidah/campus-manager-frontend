import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk } from '../../store/thunks';
import { FormGroup, Input } from '@material-ui/core';


class NewStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          email: "",
          gpa: 0,
          gpaError: "",
          campusId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value},() => {
        this.validateGPA();
    });
      console.log(this.state);
    }
//Checking the GPA and console logging the error if invalid
    validateGPA = () => {
      const { gpa } = this.state;
      this.setState({
        gpaError:
          gpa <= 4 ? null : 'GPA Must be less Than or equal to 4.0'
      });
    }

    handleGPAChange = event => {
      this.setState({ gpa: event.target.value }, () => {
        this.validateGPA();
      });
    };

    handleSubmit = async event => {
        event.preventDefault();
        
        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            email: this.state.email,
            gpa: this.state.gpa
        };

        let newStudent = await this.props.addStudent(student);

        this.setState({
          firstname: "", 
          lastname: "", 
          campusId: null, 
          email: "",
          gpa: 0,
          redirect: true, 
          redirectId: newStudent.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }
    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <NewStudentContainer
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}
            onChange={this.handleGPAChange} 
            onBlur={this.validateGPA} 
          />
        );
    }
}
const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default connect(null, mapDispatch)(NewStudentContainer);