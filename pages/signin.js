import React from "react";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Signin = ({ email, handleEmail, password, handlePassword }) => {
  return (
    <div className="sign-in__page">
      <div className="sign-in__modal-con modal-container">
        <Link href={'/'}>
          <BsFillArrowLeftCircleFill className="page-back-arrow"/>
        </Link>
        <fieldset className="modal__form-fieldset">
          <h2>Sign in:</h2>
          <label className="modal__form-label">Email*</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            minLength="1"
            maxLength="30"
            onChange={handleEmail}
            placeholder="Your email"
            required
            className="modal__form-input"
          />
          <span className="modal__input-error"></span>
          <label className="modal__form-label">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            required
            placeholder="Password"
            className="modal__form-input"
          />
          <span className="modal__input-error"></span>
          <button type="button" className="modal-sign-in__btn modal-btn">
            Sign in
          </button>
        </fieldset>
        <p className="left-line"></p>
        <p className="right-line"></p>
        <p className="sign-in__page-ques">new customer?</p>
        <Link href={"/signup"}>
          <button type="button" className="modal-sign-up__btn modal-btn">
            Create an accout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
