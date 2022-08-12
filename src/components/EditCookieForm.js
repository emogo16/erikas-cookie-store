import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCookieForm(props) {
  const { cookie } = props;

  function editCookieFormSubmission(event) {
    event.preventDefault();
    props.onEditCookie({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      batchesRemaining: event.target.batchesRemaining.value,
      batchesSold: event.target.batchesSold.value,
      id: cookie.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={editCookieFormSubmission}
        buttonText="Update Cookie"
      />
    </React.Fragment>
  );
}

EditCookieForm.propTypes = {
  cookie: PropTypes.object,
  onEditCookie: PropTypes.func,
};

export default EditCookieForm;