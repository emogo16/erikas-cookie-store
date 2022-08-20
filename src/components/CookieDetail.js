import React from "react";
import PropTypes from "prop-types";

function CookieDetail(props) {
  const { cookie, onClickingDelete, onClickingBuy } = props;
  return (
    <React.Fragment>
      <h1>Cookie info</h1>
      <h3>{cookie.name} - ${cookie.price}.00 </h3>
      <p><b>Type:</b> <em>{cookie.flavor}</em></p>
      <p><b>Origin:</b> <em>{cookie.origin}</em></p>
      <p>{cookie.quantity} batches available</p>
      <button onClick={() => onClickingBuy(cookie.id) }>Buy Item</button>
      <br></br>
      <br></br>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <br></br>
      <button onClick={() => onClickingDelete(cookie.id) }>Delete Item</button>
      <hr />
    </React.Fragment>
  );
}

CookieDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default CookieDetail;