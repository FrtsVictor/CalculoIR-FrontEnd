/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import { Header } from '../../components/Header';
import {
  LeftMenu, MenuContent, Container, ListContent
} from './styles';
import { MenuList } from '../../components/List';
import { Item1, Item2, Item3 } from '../../components/List/items';

export const Home = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  const menuView1 = () => {
    setMenu1(!menu1);
  };
  const menuView2 = () => {
    setMenu2(!menu2);
  };
  const menuView3 = () => {
    setMenu3(!menu3);
  };

  return (
    <>
      <Header />
      <Container>

        <LeftMenu>

          <MenuList
            menuView1={menuView1}
            menuView2={menuView2}
            menuView3={menuView3}

          />
        </LeftMenu>
        <MenuContent>
          {menu1 && (
          <ListContent>
            <Item1 />
          </ListContent>
          )}

          {menu2 && (
          <ListContent>
            <Item2 />
          </ListContent>
          )}

          {menu3 && (
          <ListContent>
            <Item3 />
          </ListContent>
          )}
        </MenuContent>
      </Container>
    </>
  );
};
