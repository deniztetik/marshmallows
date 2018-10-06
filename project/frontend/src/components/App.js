import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { SwatchesPicker } from 'react-color';

import styled from 'styled-components';

import 'bulma/css/bulma.css'

import ColorCircle from './ColorCircle';

import ArtworksAndPalettes from './ArtworksAndPalettes';

const SelectedColor = styled.div`
  height: 200px;
  width: 200px;
  background: ${props => props.backgroundColor}
`;

const Button = styled.button`
  margin: 0 5px;
`;

const initialState = {
  selectedFile: null,
  selectedFileSrc: null,
  color: null,
  selectedColors: [],
  submittedColors: false,
}

class App extends Component {
  state = initialState

  handleChangeComplete = color => {
    this.setState({
      color: color.hex,
    })
  }

  addColor = () => {
    this.setState({
      selectedColors: [...this.state.selectedColors, this.state.color],
      color: null,
    });
  }

  queryWithColors = () => {
    this.setState({
      submittedColors: true,
    })
  }

  resetState = () => {
    this.setState(initialState);
  }

  render() {
    const {
      color,
      selectedColors,
      submittedColors,
    } = this.state;

    return (
      <div className="container">
        <h1 class="title is-1">ColorBot</h1>
        <div className="columns">
          <div className="column">
            <SwatchesPicker
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
          <div className='column'>
            <ColorCircle
              color={color}
              size='200px'
            />
            <div>{color}</div>
            <If condition={color}>
              <button
                className="button is-primary"
                type="submit"
                onClick={this.addColor}
              >
                Add Color
              </button>
            </If>
          </div>
          <div className="column">
            {selectedColors.map(selectedColor => (
              <ColorCircle key={selectedColor} color={selectedColor} />
            ))}
            <If condition={selectedColors.length}>
              <Button
                className="button is-primary"
                type="submit"
                onClick={this.queryWithColors}
              >
                Submit Colors
              </Button>
              <Button
                className="button is-dark"
                type="reset"
                onClick={this.resetState}
              >
                Reset
              </Button>
            </If>
          </div>
        </div>
        <If condition={submittedColors}>
          <ArtworksAndPalettes />
        </If>
      </div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
