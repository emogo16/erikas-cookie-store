import React from "react";
import PropTypes from "prop-types";

function Cookie(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCookieClicked(props.id)}>
        <h3>{props.name} - $ {props.price}.00 per Oz</h3>
        <p>Type: {props.blend}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Cookie.propTypes = {
  name: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenCookieClicked: PropTypes.func,
};

export default Cookie;