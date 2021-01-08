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
  useStyles, ItemList1, ItemList2, ItemList3, ItemList4, ItemList5
} from './styles';
import {
  TrendingUpIcon, CalculatorIcon, TextIcon
} from '../Icons';

export const MenuList = ({
  activeMenu
}) => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);

  const setMenu = (opt) => {
    if (opt === 1) {
      setActive1(true);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      activeMenu(1);
    }
    if (opt === 2) {
      setActive1(false);
      setActive2(true);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      activeMenu(2);
    }

    if (opt === 3) {
      setActive1(false);
      setActive2(false);
      setActive3(true);
      setActive4(false);
      setActive5(false);
      activeMenu(3);
    }
    if (opt === 4) {
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(true);
      setActive5(false);
      activeMenu(4);
    }
    if (opt === 5) {
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(true);
      activeMenu(5);
    }
  };

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
                setMenu(1);
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
                setMenu(2);
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
                setMenu(3);
              }}
              primary="Calcule IRPF"
            />
          </ListItem>
        </ItemList3>
      </List>

      <ItemList4 activeColor={active4}>
        <ListItem button>
          <ListItemIcon style={{ minWidth: '35px' }}>
            <CalculatorIcon />
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              setMenu(4);
            }}
            primary="Calcule taxa INSS"
          />
        </ListItem>
      </ItemList4>

      <ItemList5 activeColor={active5}>
        <ListItem button>
          <ListItemIcon style={{ minWidth: '35px' }}>
            <CalculatorIcon />
          </ListItemIcon>
          <ListItemText
            onClick={() => {
              setMenu(5);
            }}
            primary="Calcule IRRF"
          />
        </ListItem>
      </ItemList5>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders" />
    </div>
  );
};
