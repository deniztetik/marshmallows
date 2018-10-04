import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { SwatchesPicker } from 'react-color';

import styled from 'styled-components';

import 'bulma/css/bulma.css'

import ArtworksAndPalettes from './ArtworksAndPalettes';

const SelectedColor = styled.div`
  height: 200px;
  width: 200px;
  background: ${props => props.backgroundColor}
`;

class App extends Component {
  state = {
    selectedFile: null,
    selectedFileSrc: null,
    color: null,
  }

  handleChangeComplete = color => {
    this.setState({
      color: color.hex,
    })
  }

  render() {
    const {
      color,
    } = this.state;

    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <SwatchesPicker
              onChangeComplete={this.handleChangeComplete}
            />
          </div>
          <div className='column'>
            <SelectedColor
              backgroundColor={color}
            />
            <div>{color}</div>
            <input class="button is-primary" type="submit" value="Submit input"></input>
          </div>
          <div className="column">
          </div>
        </div>
        <If condition={color}>
          <ArtworksAndPalettes />
        </If>
      </div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
