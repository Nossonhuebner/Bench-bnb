import { connect } from 'react-redux';
import sessionForm from './session_form';
import {signUp} from '../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  const isLoggedIn =  (!!state.entities.users[state.session.id]);
  const errors = state.errors.session;

  return { errors: errors ,  formType: 'signup', isLoggedIn: isLoggedIn};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signUp(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
