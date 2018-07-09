import { connect } from 'react-redux';
import sessionForm from './session_form';
import {logIn} from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const isLoggedIn =  (!!state.entities.users[state.session.id]);
  const errors = Object.values(state.errors) || [];

  return { errors: errors , formType: 'login', isLoggedIn: isLoggedIn};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(logIn(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
