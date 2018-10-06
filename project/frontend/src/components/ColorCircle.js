import React from 'react';
import styled from 'styled-components';

const ColorCircle = styled.div`
  width: ${props => props.size ? props.size : '50px'};
  height: ${props => props.size ? props.size : '50px'};
  border-radius: 20px;
  margin: 10px 0;
  background-color: ${props => props.color};
`;

export default ColorCircle;