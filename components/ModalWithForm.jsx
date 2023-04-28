import React from "react";
import { Link } from "react-router-dom";

export function ModalWithForm({ title, name, buttonText, closeModal, onSubmit, children }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <div className="modal-section">
      <div className="modal__wrapper">
        <div className="modal__form-header">
          <h2 className="modal__form-title">{title}</h2>
        </div>
        <form className={`modal__form modal__form-${name}`} onSubmit={handleSubmit}>
          {children}
          <button type="submit" className="modal__form-save">
            {buttonText}
          </button>
        </form>
        <Link className="modal__form-back" to="/">
          <button type="button" className="modal__back-button">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
