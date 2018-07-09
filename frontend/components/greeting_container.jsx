import  { connect } from 'react-redux';
import greeting from './greeting';
import {logOut} from '../actions/session_actions';

const mapStateToProps = (state) => {
  const currentUser =  state.entities.users[state.session.id];
  return ({ currentUser });
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(greeting);
