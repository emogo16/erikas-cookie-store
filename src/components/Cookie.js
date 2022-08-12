import React from "react";
import PropTypes from "prop-types";

function Cookie(props) {
  return (
    <React.Fragment>
      {props.name}
      {props.flavor}
      {props.price}
      {props.batchesRemaining}
      {props.batchesSold}
      <hr />
    </React.Fragment>
  );
}

Cookie.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  batchesRemaining: PropTypes.number,
  batchesSold: PropTypes.number,
  id: PropTypes.string,
  whenCookieClicked: PropTypes.func,
  whenBatchesClicked: PropTypes.func,
};

export default Cookie;