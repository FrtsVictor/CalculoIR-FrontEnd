/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {
  useStyles, ItemList1, ItemList2, ItemList3
} from './styles';
import {
  TrendingUpIcon, CalculatorIcon, TextIcon
} from '../Icons';

export const MenuList = ({
  menuView1, menuView2, menuView3
}) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">

        <ItemList1 activeColor={active1}>
          <ListItem button>
            <ListItemIcon style={{ minWidth: '35px' }}>
              <TextIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                setActive1(!active1);
                menuView1();
              }}
              primary="O que é IRPF?"
            />
          </ListItem>
        </ItemList1>

        <ItemList2 activeColor={active2}>
          <ListItem button>
            <ListItemIcon style={{ minWidth: '35px' }}>
              <TrendingUpIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                setActive2(!active2);
                menuView2();
              }}
              primary="Como calcular IRPF?"
            />
          </ListItem>
        </ItemList2>

        <ItemList3 activeColor={active3}>
          <ListItem button>
            <ListItemIcon style={{ minWidth: '35px' }}>
              <CalculatorIcon />
            </ListItemIcon>
            <ListItemText
              onClick={() => {
                setActive3(!active3);
                menuView3();
              }}
              primary="Calcule seu IRPF"
            />
          </ListItem>
        </ItemList3>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders" />
    </div>
  );
};
