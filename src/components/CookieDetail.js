import React from "react";
import PropTypes from "prop-types";

function CookieDetail(props) {
  const { cookie, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Cookie info</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Flavor</th>
            <th>Price</th>
            <th>Batches Remaining</th>
            <th>Batches Sold</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <td>{cookie.name}</td>
            <td>{cookie.flavor}</td>
            <td>{cookie.price}</td>
            <td>{cookie.batchesRemaining}</td>
            <td>{cookie.batchesSold}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={props.onClickingEdit}>Update Cookie</button>
      <button onClick={() => onClickingDelete(cookie.id)}>Delete Cookie</button>
      <hr />
    </React.Fragment>
  );
}

CookieDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default CookieDetail;