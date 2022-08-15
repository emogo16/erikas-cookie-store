import PropTypes from "prop-types";
import React from "react";
import Cookie from './Cookie'

function CookieList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.cookieList.map((cookie) => 
        <Cookie 
          whenCookieClicked={props.onCookieSelection}
          name={cookie.name}
          origin={cookie.origin}
          price={cookie.price}
          blend={cookie.blend}
          quantity={cookie.quantity}
          crate={cookie.crate}
          id={cookie.id}
          key={cookie.id} />
        )}
    </React.Fragment>
  );
}


CookieList.propTypes = {
  cookieList: PropTypes.array,
  onCookieSelection: PropTypes.func
};

export default CookieList;