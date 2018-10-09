import React, { Fragment } from 'react';

import ColorCircle from './ColorCircle';

import styled from 'styled-components';

const ArtworkAndPalette = styled.div`
  margin: 20px;
  background-color: #9D99A9;
`;

const ArtworksAndPalletesImage = styled.img`
  max-height: 200px;
`;

const ColorsCard = styled.div`
  background-color: #C4B0BC;
`;

const ColorText = styled.div`
  align-self: center;
  margin: 0 10px;
`;

const artists = [
    'balenciaga',
    'cezanne',
    'gauguin',
    'matisse',
    'mondrian',
];

const ArtworksAndPalettes = () =>
    <Fragment>
        {artists.map(artist =>
            <ArtworkAndPalette className="columns card" key={artist}>
                <div className="column">
                    <ArtworksAndPalletesImage src={`../images_and_palettes/${artist}/${artist}_image.jpg`} />
                </div>
                <div className="column">
                    <ArtworksAndPalletesImage src={`../images_and_palettes/${artist}/${artist}_palette.png`} />
                </div>
                <ColorsCard className="column card">
                    <p className="title">
                        Strong Match
                    </p>
                    <div className="card-content">
                        <div className="media">
                            <ColorCircle className="media-left" color="grey" />
                            <ColorText className="media-content">Grey</ColorText>
                        </div>
                        <div className="media">
                            <ColorCircle className="media-left" color="blue" />
                            <ColorText className="media-content">Blue</ColorText>
                        </div>
                        <div className="media">
                            <ColorCircle className="media-left" color="orange" />
                            <ColorText className="media-content">Orange</ColorText>
                        </div>
                    </div>
                </ColorsCard>
            </ArtworkAndPalette>
        )}
    </Fragment>;

export default ArtworksAndPalettes;