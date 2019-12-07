import React from "react";
import styles from "./Login.module.css";

import Input2 from "./Input2";

import PasswordInput from "./PasswordInput";

import { validateEmail } from "./validation";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props && this.props.email,
      password: "",
      passwordText: "",
      emailEmpty: true,
      passwordMatch: true,
      remember: false
    };
  }
  handleLogin = async () => {
    if (!this.state.email) {
      this.setState({
        emailEmpty: false,
        emailError: "please enter email"
      });
      return false;
    }

    if (this.state.email) {
      if (validateEmail(this.state.email)) {
        this.setState({
          emailEmpty: false,
          emailError: "Invalid email"
        });
        return false;
      }
    }
    if (!this.state.password) {
      this.setState({
        passwordMatch: false,
        passwordText: "Password cannot be empty"
      });
      return false;
    }
    if (this.props.getLogin) {
      await this.props.getLogin(this.state);
    }
  };
  componentWillReceiveProps = nextProps => {
    if (
      nextProps.loginDetails.user.some(data =>
        data.email.includes(this.state.email)
      ) &&
      nextProps.loginDetails.user.some(data =>
        data.password.includes(this.state.password)
      )
    ) {
      nextProps.history.push("/employeelistpage");
    } else {
      this.setState({
        passwordMatch: false,
        passwordText: "Invalid Credentials"
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.signInContainer}>
          <div className={styles.welTxt}>
            <div className={styles.welcomeTxt}>Welcome Back</div>
            <div className={styles.stayConnected}>
              Stay connected, be informed and keep inspiring.
            </div>

            <div className={styles.inputBox}>
              <Input2
                placeholder="Email Address"
                value={this.state.email}
                onChange={val => this.setState({ email: val })}
                textStyle={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontFamily: "Regular"
                }}
                height={50}
                boxy={true}
                borderColor={
                  !this.state.emailEmpty
                    ? "#d81818"
                    : "rgba(127, 127, 127, 0.5)"
                }
                onFocus={() => this.setState({ emailEmpty: true })}
              />
            </div>
            {!this.state.emailEmpty ? (
              <div className={styles.error}>{this.state.emailError}</div>
            ) : null}
            <div className={styles.inputBox}>
              <PasswordInput
                placeholder="Password"
                password={this.state.password}
                value={this.state.password}
                onChange={val => this.setState({ password: val })}
                textStyle={{
                  fontSize: 14,
                  lineHeight: 20,
                  fontFamily: "Regular"
                }}
                height={50}
                boxy={true}
                borderColor={
                  !this.state.passwordMatch
                    ? "#d81818"
                    : "rgba(127, 127, 127, 0.5)"
                } // borderBottom={"#7f7f7f"}
                type="password"
                onFocus={() => this.setState({ passwordMatch: true })}
              />
            </div>
            {!this.state.passwordMatch ? (
              <div className={styles.error}>{this.state.passwordText}</div>
            ) : null}
            <div
              className={styles.passwordBlock}
              onClick={() => this.setState({ remember: !this.state.remember })}
            >
              <div className={styles.remPassword}>Remember password</div>
              <div
                className={styles.forgotPassword}
                onClick={() => this.props.showForgotPassword(this.props)}
              >
                Forgot password?
              </div>
            </div>
            <button
              onClick={() => this.handleLogin()}
              className={styles.loginButton}
              type="button"
            >
              LOGIN
            </button>

            <div></div>
            <div>
              <div className={styles.starInTxt}>No Account?&nbsp;&nbsp;</div>

              <div className={styles.signUpNow}>Sign Up</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
