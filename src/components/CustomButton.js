import React from "react";
import "./CustomButton.css";
const CustomButton = props => {
  return (
    <a className="custbtn btn-large waves-red btn-flat" href={props.link}>
      {props.btnName}
    </a>
  );
};

export default CustomButton;
