import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "../components/Login";
import { getLogin } from "../action/login.action";

const mapDispatchToProps = dispatch => {
  return {
    getLogin: data => {
      dispatch(getLogin(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.login.loading,
    loginDetails: state.login.loginDetails
  };
};
const LoginContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

export default LoginContainer;
