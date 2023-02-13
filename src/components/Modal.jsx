import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import React from "react";

const Modal = (props) => {

  return (
    <div className={props.modalClass} style={props.modalStyle}>
      <div className="modal-dialog">
        <div className="modal-content">{props.children}</div>
      </div>
    </div>
  )
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
