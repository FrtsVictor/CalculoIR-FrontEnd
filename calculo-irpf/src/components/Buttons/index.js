/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '@material-ui/core/Button';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';

export const DefaultButton = ({ name, color }) => (

  <Button variant="contained" color={color}>
    {name}
  </Button>

);

export const ButtonCalc = ({
  name, color, onCLick, type
}) => (
  <Button
    type={type}
    onClick={(e) => {
      e.preventDefault();
      onCLick();
    }}
    variant="contained"
    color={color}
    startIcon={<ShowChartIcon />}
  >
    {name}
  </Button>
);

export const ButtonUpdate = ({
  name, color, onCLick, type
}) => (
  <Button
    type={type}
    onClick={(e) => {
      e.preventDefault();
      onCLick();
    }}
    variant="contained"
    color={color}
    startIcon={<SettingsBackupRestoreIcon />}
  >
    {name}
  </Button>
);
