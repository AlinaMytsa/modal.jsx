const Footer = (props) => {
  return (
    <div className="modal-footer">
      <button onClick={props.toggle} type="button" className="modal-close-button btn btn-default">Cancel</button>
    </div>
  )
}
export default Footer;
