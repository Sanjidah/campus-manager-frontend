import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { editStudentThunk } from '../../store/thunks';
import { fetchStudentThunk } from "../../store/thunks"

class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "", 
          email: "",
          gpa: 0,
          campusId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting student ID from url
        this.props.fetchStudent(this.props.match.params.id);

        this.setState({
          firstname: this.props.student.firstname,
          lastname: this.props.student.lastname,
          email: this.props.student.email,
          gpa: this.props.student.gpa,
          campusId: this.props.student.campusId,
          redirect: false, 
          redirectId: null
        })
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            email: this.state.email,
            gpa: this.state.gpa
        };
        console.log(this.props)

        let newStudent = await this.props.editStudent(student);
        console.log(newStudent)

        this.setState({
          firstname: "", 
          lastname: "", 
          campusId: null, 
          email: "",
          gpa: 0,
          redirect: true, 
          redirectId: this.props.match.params.id
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
            <EditStudentView 
            student={this.props.student}
            editStudent={this.props.editStudent}
            deleteStudent={this.props.deleteStudent}
            fetchStudent={this.props.fetchStudent}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapState = (state) => {
    return {
      student: state.student,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        addStudent: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student))
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);