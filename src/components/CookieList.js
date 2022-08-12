import PropTypes from "prop-types";
import React from "react";

function CookieList(props) {
  const { onBatchesClicked, onCookieSelection } = props;
  return (
    <React.Fragment>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Batches Remaining</th>
            <th>Batches Sold</th>
            <th>Sell A Batch</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.cookieList.map((cookie) => (
            <tr>
              <td>{cookie.name}</td>
              <td>{cookie.description}</td>
              <td>{cookie.price}</td>
              <td>{cookie.batchesRemaining}</td>
              <td>{cookie.batchesSold}</td>
              <td>
                <button onClick={() => onBatchesClicked(cookie.id)}>
                  Sell Batch
                </button>
              </td>
              <td>
                <button onClick={() => onCookieSelection(cookie.id)}>Details</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </React.Fragment>
  );
}

CookieList.propTypes = {
  cookieList: PropTypes.array,
  onCookieSelection: PropTypes.func,
  onBatchesClicked: PropTypes.func,
};

export default CookieList;