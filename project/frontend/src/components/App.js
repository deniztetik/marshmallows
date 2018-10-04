import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import 'bulma/css/bulma.css'

const UploadedImage = styled.img`
  height: 200px;
  width: 200px;
  image-orientation: from-image;
`;

const ArtworksAndPalletesImage = styled.img`
  height: 200px;
  width: 200px;
`

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
      <div>
        <div className="section">
          <input id="file" type="file" accept="image/*" onChange={this.imageUploadedHandler} />
          <If condition={this.state.selectedFile}>
            <UploadedImage src={this.state.selectedFileSrc} alt='upload-preview' />
          </If>
        </div>
        <If condition={this.state.selectedFile}>
          <div className="columns">
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/balenciaga/balenciaga_image.jpg' />
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/balenciaga/balenciaga_palette.png' />
          </div>
          <div className="columns">
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/cezanne/cezanne_image.jpg' />
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/cezanne/cezanne_palette.png' />
          </div>
          <div className="columns">
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/gauguin/gauguin_image.jpg' />
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/gauguin/gauguin_palette.png' />
          </div>
          <div className="columns">
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/matisse/matisse_image.jpeg' />
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/matisse/matisse_palette.png' />
          </div>
          <div className="columns">
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/mondrian/mondrian_image.jpg' />
            <ArtworksAndPalletesImage className="column" src='../images_and_palettes/mondrian/mondrian_palette.png' />
          </div>
        </If>
      </div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
