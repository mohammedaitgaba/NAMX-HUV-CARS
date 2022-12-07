import React from "react";
import "../../assets/styles/PrimaryButton.css";
interface Prop{
  children:string
  onClick:()=>void
  width:string
}
const PrimaryButton = (props:Prop) => {
  return (
    <div id="container">
      <div className={`button ${props.width}`}>
        <button className="primary" onClick={props.onClick}>
          <div className="label">
            <span className="hover-effect"></span>
            <span className="label-text">{props.children}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PrimaryButton;
