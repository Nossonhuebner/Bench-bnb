import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router';


class sessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    debugger
    if (this.props.isLoggedIn){
      return <Redirect to="/"/>;
    }

    const altLink = this.props.formType === 'signup' ?
          <Link to="/login">log in</Link> :
          <Link to="/signup">sign up</Link>  ;

    const errors = this.props.errors.map((error, idx) => {
      return (<li key={idx}>{error}</li>);
    });

    return(
      <div>
        <h2>{this.props.formType}</h2>
        {altLink}
        <ul>
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label>username
            <input type="text" onChange={this.handleChange('username')} value={this.state.username} />
          </label>

          <label>password
            <input type="password" onChange={this.handleChange('password')} value={this.state.password} />
          </label>

          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }

  handleChange(field) {
    return e => {
    this.setState({[field]: e.target.value});
   };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState(this.state = { username: "", password: "" });
  }

}

export default sessionForm;
