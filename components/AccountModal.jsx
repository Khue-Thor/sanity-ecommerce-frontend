import React from "react";
import { Link } from "react-router-dom";

const AccountModal = ({ onMouseLeaveCLose, onClickClose }) => {
  return (
    <div className="modal modal__content" onMouseLeave={onMouseLeaveCLose}>
      <div className="modal__container">
        <Link to={"/signin"}>
          <button className="modal__signin-link" onClick={onClickClose}>
            Sign In
          </button>
        </Link>
        <p>
          New customer?{" "}
          <Link to={"/signup"} className="modal__signup-link" onClick={onClickClose}>
            Start here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AccountModal;
