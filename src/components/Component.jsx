import React from "react";
import Modal from './Modal';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';


// HTML закрытого состояния:

// <div>
//   <button type="button" className="modal-open-button btn btn-danger">Open</button>
//   <div className="modal" style="display: none;" role="dialog">
//     <div className="modal-dialog">
//       <div className="modal-content">
//         <div className="modal-header">
//           <div className="modal-title">Modal.jsx title</div>
//           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
//           </button>
//         </div>
//         <div className="modal-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
//         <div className="modal-footer">
//           <button type="button" className="modal-close-button btn btn-default">Cancel</button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// В открытом состоянии строчка: <div class="modal" style="display: none;"> заменяется на <div class="modal fade show" style="display: block;">
// У открытого модального окна две кнопки закрывающие его: крестик справа вверху и кнопка Cancel справа внизу.

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
  }


  toggle = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal isOpen={this.state.modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="modal-close-button btn btn-secondary" onClick={this.toggle}>Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

Component.Modal=Modal;
Component.Header=Header;
Component.Body=Body;
Component.Footer=Footer;


