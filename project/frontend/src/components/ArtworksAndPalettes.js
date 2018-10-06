import React, { Fragment } from 'react';

import ColorCircle from './ColorCircle';

import styled from 'styled-components';

const ArtworkAndPalette = styled.div`
  margin: 20px;
`;

const ArtworksAndPalletesImage = styled.img`
  max-height: 200px;
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
                <div className="column card">
                    <p className="title">
                        Strong Match
                    </p>
                    <div className="card-content">
                        <div className="media">
                            <ColorCircle className="media-left" color="grey" />
                            <div className="media-content">Grey</div>
                        </div>
                        <div className="media">
                            <ColorCircle className="media-left" color="blue" />
                            <div className="media-content">Blue</div>
                        </div>
                        <div className="media">
                            <ColorCircle className="media-left" color="orange" />
                            <div className="media-content">Orange</div>
                        </div>
                    </div>
                </div>
            </ArtworkAndPalette>
        )}
    </Fragment>;

export default ArtworksAndPalettes;