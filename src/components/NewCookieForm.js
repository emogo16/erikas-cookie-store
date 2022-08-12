import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewCookieForm(props) {
  function newCookieFormSubmission(event) {
    event.preventDefault();
    props.onNewCookieCreation({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      batchesRemaining: event.target.batchesRemaining.value,
      batchesSold: parseInt(event.target.batchesSold.value),
      id: v4(),
    });
  }

  NewCookieForm.propTypes = {
    onNewCookieCreation: PropTypes.func,
  };

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={newCookieFormSubmission}
        buttonText="Add Cookie"
      />
    </React.Fragment>
  );
}

export default NewCookieForm;