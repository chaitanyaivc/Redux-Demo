import React ,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { createPosts } from './actions/postActions';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      title: '',
      body: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // async componentDidMount(){
  //   await axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res=> {
  //       this.setState({data:res.data});
  //       console.log("state: ", this.state.data);
  //     })
  //     .catch(errorMessage=>{
  //       console.log("error occured");
  //     })
  // }

  handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPosts(post);
    //call action
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    console.log(value);
    this.setState({
      [name]: value 
    });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input type = "text" name = "title" onChange={this.handleChange} value = {this.state.title} />
          </div>
          <div>
            <label>body: </label>
            <br />
            <input type = "textbox" name = "body" onChange={this.handleChange} value = {this.state.body} />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

App.propTypes = {
  createPosts: PropTypes.func.isRequired
}

export default connect(null, {createPosts})(App)