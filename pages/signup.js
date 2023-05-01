import React, { useState, useEffect, use } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Link from "next/link";

const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasswornd] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    setConfirmPasswornd(e.target.value);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function handleAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    onRegistration({ name, avatar, email, password });
  }
  return (
    <div className="sign-up__page">
      <div className="modal-container">
        <Link href={"/"}>
          <BsFillArrowLeftCircleFill className="page-back-arrow" />
        </Link>
        <fieldset className="modal__form-fieldset">
          <label className="modal__form-label">Your name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder="First and last name"
            onChange={handleName}
            minLength="1"
            maxLength="30"
            required
            className="modal__form-input"
          />
          <span className="modal__input-error"></span>
          <label className="modal__form-label">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            minLength="1"
            maxLength="30"
            onChange={handleEmail}
            required
            placeholder="Your email"
            className="modal__form-input"
          />
          <span className="modal__input-error"></span>
          <label className="modal__form-label">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            placeholder="at least 8 characters"
            onChange={handlePassword}
            minLength="8"
            required
            className="modal__form-input"
          />
          <span className="modal__input-error"></span>
          <label className="modal__form-label">Re-enter password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            required
            placeholder="Confirm password"
            className="modal__form-input"
          />
          <span className="modal__input-error"></span>
          <button type="button" className="modal-btn">
            Continue
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Sign;
