import React, { Fragment } from 'react';

import styled from 'styled-components';

const ArtworkAndPalette = styled.div`
  margin: 20px;
`;

const ArtworksAndPalletesImage = styled.img`
  max-height: 200px;
`;

const ColorCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  margin: 10px 0;
`;

const ColorCircle1 = styled(ColorCircle)`
  background: grey;
`;

const ColorCircle2 = styled(ColorCircle)`
  background: darkblue;
`;

const ColorCircle3 = styled(ColorCircle)`
  background: orange;
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
            <ArtworkAndPalette className="columns is-centered" key={artist}>
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
                            <ColorCircle1 className="media-left" />
                            <div className="media-content">Grey</div>
                        </div>
                        <div className="media">
                            <ColorCircle2 className="media-left" />
                            <div className="media-content">Blue</div>
                        </div>
                        <div className="media">
                            <ColorCircle3 className="media-left" />
                            <div className="media-content">Orange</div>
                        </div>
                    </div>
                </div>
            </ArtworkAndPalette>
        )}
    </Fragment>;

export default ArtworksAndPalettes;