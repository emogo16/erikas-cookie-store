import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCookieForm(props) {
  const { cookie } = props;

  function handleEditCookieFormSubmission(event) {
    event.preventDefault();
    props.onEditCookie({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      batchesRemaining: parseInt(100),
      batchesSold: parseInt(30),
      id: cookie.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditCookieFormSubmission}
        buttonText="Update Cookie"/>
    </React.Fragment>
  );
}

EditCookieForm.propTypes = {
  cookie: PropTypes.object,
  onEditCookie: PropTypes.func,
};

export default EditCookieForm;