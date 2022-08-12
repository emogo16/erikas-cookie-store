import React from "react";
import NewCookieForm from "./NewCookieForm";
import CookieList from "./CookieList";
import CookieDetail from "./CookieDetail";
import EditCookieForm from "./EditCookieForm";
import data from "../mock-data.json";

class CookieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCookieList: [...data].sort(function (a, b) {
        return a.id - b.id;
      }),
      selectedCookie: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedCookie != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCookie: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleSellClick = (CookieId) => {
    const newMainCookieList = this.state.mainCookieList.map((element) => {
      if (element.id === cookieId && element.batchesRemaining >= 1) {
        const cookie = {
          ...element,
          batchesRemaining: element.batchesRemaining - 1,
          batchesSold: element.batchesSold + 1,
        };
        return cookie;
      }
      return element;
    });
    this.setState({
      mainCookieList: newMainCookieList,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleAddingnewCookieToList = (newCookie) => {
    const newMainCookieList = this.state.mainCookieList.concat(newCookie);
    this.setState({
      mainCookieList: newMainCookieList,
      formVisibleOnPage: false,
    });
  };

  handleChangingselectedCookie = (id) => {
    const selectedCookie = this.state.mainCookieList.filter(
      (cookie) => cookie.id === id
    )[0];
    this.setState({ selectedCookie: selectedCookie });
  };

  handleDeletingCookie = (id) => {
    const newMainCookieList = this.state.mainCookieList.filter(
      (cookie) => cookie.id !== id
    );
    this.setState({
      mainCookieList: newMainCookieList,
      selectedCookie: null,
    });
  };

  handleEditingCookieInList = (cookieToEdit) => {
    const editedMainCookieList = this.state.mainCookieList
      .filter((cookie) => cookie.id !== this.state.selectedCookie.id)
      .concat(cookieToEdit);
    this.setState({
      mainCookieList: editedMainCookieList,
      editing: false,
      selectedCookie: null,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditCookieForm
          cookie={this.state.selectedCookie}
          onEditCookie={this.handleEditingCookieInList}
        />
      );
      buttonText = "Return to Cookie List";
    } else if (this.state.selectedCookie != null) {
      currentlyVisibleState = (
        <CookieDetail
          cookie={this.state.selectedCookie}
          onClickingDelete={this.handleDeletingCookie}
          onClickingEdit={this.handleEditClick}
          on
        />
      );
      buttonText = "Return to Cookie List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCookieForm onNewCookieCreation={this.handleAddingnewCookieToList} />
      );
      buttonText = "Return to Cookie List";
    } else {
      currentlyVisibleState = (
        <CookieList
          CookieList={this.state.mainCookieList}
          onBatchesClicked={this.handleSellClick}
          onCookieSelection={this.handleChangingselectedCookie}
        />
      );

      buttonText = "Add Cookie";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
      </React.Fragment>
    );
  }
}

export default CookieControl;