import React from "react";
import Link from "next/link";

const AccountModal = ({ onMouseLeaveCLose, onClickClose }) => {
  return (
    <div className="modal modal__content" onMouseLeave={onMouseLeaveCLose}>
      <div className="modal__container">
        <Link href={"/signin"}>
          <button className="modal__signin-link" onClick={onClickClose}>
            Sign In
          </button>
        </Link>
        <p>
          New customer?{" "}
          <Link href={"/signup"} className="modal__signup-link" onClick={onClickClose}>
            Start here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AccountModal;
