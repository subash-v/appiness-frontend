import React from "react";
import PropTypes from "prop-types";
import show_password from "./show_pwd.svg";
import viewIcon from "./Viewline.svg";
import CircleButton from "./CircleButton";
import Icon from "./Icon";

import styles from "./PasswordInput.module.css";
import Input2 from "./Input2";

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: this.props.passwordVisible
    };
  }

  onPress = () => {
    this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
  };
  handleKeyUp(event) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }
  render() {
    let scalerClass = styles.scaler;
    let type = this.props.type;

    if (this.state.isPasswordVisible) {
      scalerClass = styles.scalerHolder;
      type = "text";
    }
    return (
      <Input2
        {...this.props}
        type={type}
        onKeyUp={event => {
          this.handleKeyUp(event);
        }}
        value={this.props.password}
        rightChild={
          <React.Fragment>
            <div className={styles.passWordButton}>
              <CircleButton
                color={"transparent"}
                icon={<Icon image={viewIcon} size={20} />}
                onClick={this.onPress}
              />
              <div className={scalerClass} />
            </div>
          </React.Fragment>
        }
      />
    );
  }
}

PasswordInput.propTypes = {
  passwordVisible: PropTypes.bool,
  type: PropTypes.string,
  password: PropTypes.string,
  img: PropTypes.string
};

PasswordInput.defaultProps = {
  passwordVisible: false,
  type: "Password",
  password: "",
  img: show_password
};

export default PasswordInput;
