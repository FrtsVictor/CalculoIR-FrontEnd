/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '@material-ui/core/Button';
import ShowChartIcon from '@material-ui/icons/ShowChart';

export const DefaultButton = ({ name, color }) => (

  <Button variant="contained" color={color}>
    {name}
  </Button>

);

export const ButtonCalc = ({ name, color, onCLick }) => (
  <Button
    onClick={() => onCLick()}
    variant="contained"
    color={color}
    startIcon={<ShowChartIcon />}
  >
    {name}
  </Button>
);
