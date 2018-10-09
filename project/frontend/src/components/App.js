import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { SwatchesPicker } from 'react-color';

import styled, { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.css';

import ColorCircle from './ColorCircle';

import ArtworksAndPalettes from './ArtworksAndPalettes';

// const SelectedColor = styled.div`
//   height: 200px;
//   width: 200px;
//   background: ${props => props.backgroundColor}
// `;

const SelectedColorsContainer = styled.div`
  display: flex;
`;

const SelectedColor = styled(ColorCircle)`
  margin: 0 5px;
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
  modalOpen: false,
  isLoading: false,
}

class App extends Component {
  state = initialState

  handleChangeComplete = color => {
    this.setState({
      color: color.hex,
    })
  }

  addColor = color => {
    const {
      selectedColors,
    } = this.state;

    if (selectedColors.length < 5) {
      this.setState({
        selectedColors: [...selectedColors, color.hex],
      });
    }
  }

  queryWithColors = () => {
    this.setState({
      submittedColors: true,
    })
  }

  resetState = () => {
    this.setState(initialState);
  }

  openModal = (e) => {
    e.preventDefault();

    this.setState({
      modalOpen: true
    });
  }

  saveColors = (e) => {
    e.preventDefault();

    this.closeModal();
  }

  cancel = (e) => {
    e.preventDefault()

    this.setState({
      selectedColors: [],
    }, this.closeModal);
  }

  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  }

  searchColors = e => {
    e.preventDefault();

    this.setState({
      isLoading: true,
    })
  }

  render() {
    const {
      color,
      selectedColors,
      submittedColors,
      modalOpen,
      isLoading,
    } = this.state;

    return (
      <Choose>
        <When condition={true}>
          <section className="hero is-primary is-fullheight">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-centered">
                  <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                    <form className="box">
                      <div className="field has-text-centered">
                        <img src="https://s3.amazonaws.com/marshmallows/ColorBotLogo.jpeg" width="167" />
                        <label>COLOR•BOT</label>
                      </div>
                      <div className="field">
                        <button className="button is-primary" onClick={this.openModal}>
                          Select Colors
                        </button>
                      </div>
                      <div className={`modal ${modalOpen ? 'is-active' : ''}`}>
                        <div className="modal-background" onClick={this.cancel}></div>
                        <div className="modal-card">
                          <header className="modal-card-head">
                            <p className="modal-card-title">Select Colors</p>
                            <button className="delete" aria-label="close" onClick={this.cancel}></button>
                          </header>
                          <section className="modal-card-body">
                            <div className="columns">
                              <SwatchesPicker
                                className="column"
                                onChangeComplete={this.addColor}
                                height={400}
                              />
                              <div className="column">
                                <div className="columns is-multiline">
                                  {selectedColors.map(selectedColor => (
                                    <SelectedColor key={selectedColor} color={selectedColor} className="column is-narrow" />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </section>
                          <footer className="modal-card-foot">
                            <button className="button is-success" onClick={this.saveColors}>Save Colors</button>
                            <button className="button" onClick={this.cancel}>Cancel</button>
                          </footer>
                        </div>
                      </div>
                      <If condition={selectedColors.length}>
                        <div className="field">
                          <div className="column">
                            <div className="columns is-multiline">
                              {selectedColors.map(selectedColor => (
                                <SelectedColor key={selectedColor} color={selectedColor} className="column is-narrow" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="field buttons">
                          <button className={`button is-success ${isLoading ? 'is-loading' : ''}`} onClick={this.searchColors}>
                            Search Colors
                          </button>
                          <button
                            className="button is-dark"
                            type="reset"
                            onClick={this.resetState}
                          >Reset</button>
                        </div>
                      </If>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </When>
        <Otherwise>
          <div className="container">
            <h1 className="title is-1">ColorBot</h1>
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
              <div className="column container">
                <div className="is-flex-tablet">
                  {selectedColors.map(selectedColor => (
                    <SelectedColor key={selectedColor} color={selectedColor} />
                  ))}
                </div>
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
        </Otherwise>
      </Choose>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
