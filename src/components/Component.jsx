import React from "react";
import Modal from './Modal';
import cn from "classnames";


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

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }


  render() {
    const modalClass = cn("modal", {
      "fade show": this.state.modal,
      '': !this.state.modal,
    })

    const dNoneStyle = {
      display: 'none'
    }
    const dShowStyle = {
      display: 'block'
    }
    const style = this.state.modal ? dShowStyle : dNoneStyle;


      return (
      <div>
        <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
        <Modal modalClass={modalClass} modalStyle={style} isOpen={this.state.modal}>
          <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </Modal.Body>
          <Modal.Footer toggle={this.toggle}>
            <button type="button" className="modal-close-button btn btn-secondary">Cancel</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


