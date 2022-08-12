import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="form-part">
        <form onSubmit={props.formSubmissionHandler}>
          <input type="text" name="name" placeholder="Name" /> <br></br>
          <br></br>
          <input type="text" name="flavor" placeholder="Flavor" /> <br></br>
          <br></br>
          <input type="number" name="price" placeholder="Price" /> <br></br>
          <br></br>
          <input
            type="number"
            name="batchesRemaining"
            placeholder="130"
            // defaultValue="130"
          />{" "}
          <br></br>
          <br></br>
          <input
            type="number"
            name="batchesSold"
            placeholder="0"
            // defaultValue="0"
          />{" "}
          <br></br>
          <br></br>
          <button type="submit">{props.buttonText}</button>
          <br></br>
          <br></br>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;