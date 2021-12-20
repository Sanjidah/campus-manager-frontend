// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// import NewCampusView from '../views/NewCampusView';
// import { addCampusThunk } from '../../store/thunks';

// class NewCampusContainer extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           name: "",
//           imageUrl: "https://www.thoughtco.com/thmb/jfIJE14e4c4SbCw2ozOiTijzijQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg",
//           address: "",
//           description: null,
//           redirect: false,
//           redirectId: null
//         };
//     }

//     handleChange = event => {
//       this.setState({
//         [event.target.name]: event.target.value
//       });
//     }

//     handleSubmit = async event => {
//         event.preventDefault();

//         let campus = {
//             name: this.state.name,
//             imageUrl: "https://www.thoughtco.com/thmb/jfIJE14e4c4SbCw2ozOiTijzijQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg",
//             address: this.state.address,
//             description: this.state.description,
//         };

//         let newCampus = await this.props.addCampus(campus);

//         this.setState({
//           name: "",
//           imageUrl: "https://www.thoughtco.com/thmb/jfIJE14e4c4SbCw2ozOiTijzijQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg",
//           address: null,
//           description: null,
//           redirect: true,
//           redirectId: newCampus.id
//         });
//     }

//     componentWillUnmount() {
//         this.setState({redirect: false, redirectId: null});
//     }

//     render() {
//         if(this.state.redirect) {
//           return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
//         }
//         return (
//           <NewCampusView
//             handleChange = {this.handleChange}
//             handleSubmit={this.handleSubmit}
//           />
//         );
//     }
// }

// const mapDispatch = (dispatch) => {
//     return({
//         addCampus: (campus) => dispatch(addCampusThunk(campus)),
//     })
// }

// export default connect(null, mapDispatch)(NewCampusContainer);

// import { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { fetchAllCampusesThunk, addCampusThunk } from "../../store/thunks";
// import { NewCampusView } from "../views";

// class NewCampusContainer extends Component {
//     constructor() {
//         super();
//         this.state = {
//             campusName: "",
//             campusAddress: "",
//             campusDescription: "",
//             campusImageURL: "",
//             redirect: false,
//             redirectId: null
//         };
//     }

//     // handleChange = event => {
//     //     this.setState({
//     //       [event.target.name]: event.target.value
//     //     });
//     //   }

//     handleSubmit = async (e) => {
//         e.preventDefault();
//         const campus = {
//             campusName: this.state.campusName,
//             campusAddress: this.state.campusAddress,
//             campusDescription: this.state.campusDescription,
//             campusImageURL: this.state.campusImageURL
//         };

//        let newCampus = await this.props.addCampus(campus);
//        console.log(newCampus);

//         let url = window.location.href;
//         url = url.substring(0, url.lastIndexOf("/"));
//         await this.props.addCampusThunk(campus);
//         window.location.href = url + "/campuses";
//     };

//     setCampusName = (newCampusName) => {
//         this.setState({ campusName: newCampusName });
//     };

//     setCampusAddress = (newCampusAddress) => {
//         this.setState({ campusAddress: newCampusAddress });
//     };

//     setCampusDescription = (newCampusDescription) => {
//         this.setState({ campusDescription: newCampusDescription });
//     };

//     setCampusImageUrl = (newCampusImageUrl) => {
//         this.setState({ campusImageURL: newCampusImageUrl });
//     };

//     componentDidMount() {
//         console.log(this.props);
//         this.props.fetchAllCampuses();
//     }

//     render() {
//         return (
//         <NewCampusView
//             allCampuses={this.props.allCampuses}
//             // handleChange = {this.handleChange}
//             handleSubmit={this.handleSubmit}
//             setCampusName={this.setCampusName}
//             setCampusAddress={this.setCampusAddress}
//             setCampusDescription={this.setCampusDescription}
//             setCampusImageUrl={this.setCampusImageUrl}
//         />
//         );
//     }
// }

// // Map state to props;
// const mapState = (state) => {
//     return {
//         allCampuses: state.allCampuses,
//     };
// };

// // Map dispatch to props;
// const mapDispatch = (dispatch) => {
//     return {
//         fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
//         addCampusThunk: (campus) => dispatch(addCampusThunk(campus)),
//     };
// };

// // Type check props;
// NewCampusContainer.propTypes = {
//     allCampuses: PropTypes.array.isRequired,
//     fetchAllCampuses: PropTypes.func.isRequired,
// };

// // Export our store-connected container by default;
// export default connect(mapState, mapDispatch)(NewCampusContainer);

import { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
      redirectId: newCampus.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  render() {
    console.log(this.state.redirectId);
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }
    return (
      <NewCampusView
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  };
};

export default connect(null, mapDispatch)(NewCampusContainer);
