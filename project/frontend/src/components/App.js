import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    selectedFile: null,
    selectedFileSrc: null,
  }

  imageUploadedHandler = e => {
    const file = e.target.files[0];

    const tmppath = URL.createObjectURL(file);

    this.setState({
      selectedFile: file,
      selectedFileSrc: tmppath,
    })
  }

  render() {
    return (
      <Fragment>
        <input id="file" type="file" accept="image/*" onChange={this.imageUploadedHandler} />
        <If condition={this.state.selectedFile}>
          <img src={this.state.selectedFileSrc} style={{ width: '200px', height: '200px' }} alt='upload-preview' />
        </If>
      </Fragment>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
