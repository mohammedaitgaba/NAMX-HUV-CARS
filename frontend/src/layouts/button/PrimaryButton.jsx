import React from "react";
import "../../assets/styles/PrimaryButton.css";
const PrimaryButton = ({ children, onClick, width }) => {
  return (
    <div id="container">
      <div className={`button ${width}`}>
        <button class="primary" onClick={onClick}>
          <div class="label">
            <span class="hover-effect"></span>
            <span class="label-text">{children}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default PrimaryButton;
