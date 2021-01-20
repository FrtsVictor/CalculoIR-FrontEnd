import React from 'react';
import IconButton from '@material-ui/core/Button';
import Button from '@material-ui/core/Button';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import { useUser } from '../core/UserProvider/useUser';
import { useHistory } from 'react-router-dom'

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

export const ButtonUpdate = ({name, color, onCLick, type}) => (
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


export const ButtonLogout = ({ color, type }) => {
  const history = useHistory();

  const { clearUser } = useUser();

return (
        <IconButton
        onClick={()=>{
          clearUser(),
          localStorage.clear()
          history.push('/home')

        }}
        >
          <SubdirectoryArrowRightIcon />
        </IconButton>
      )
};
