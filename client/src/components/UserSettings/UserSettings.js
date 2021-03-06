import React from "react";
import { connect } from "react-redux";
import LoginSignup from "../LoginSignup/LoginSignup";
import AccessorySelector from "./AccessorySelector/AccessorySelector";
import StandardSelector from "./StandardSelector/StandardSelector";
import WeightBoxSelector from "./WeightBoxSelector/WeightBoxSelector";
import "./UserSettings.css";

function UserSettings(props) {
  return (
    <div
      className={props.settingsOpen ? "userSettings" : "userSettings__closed"}
    >
      <LoginSignup>
        <AccessorySelector />
        <StandardSelector />
        <WeightBoxSelector />
      </LoginSignup>
    </div>
  );
}

const mapStateToProps = state => ({
  settingsOpen: state.userSettings.settingsOpen
});

export default connect(mapStateToProps)(UserSettings);
