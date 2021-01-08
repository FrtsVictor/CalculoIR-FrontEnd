/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import { Header } from '../../components/Header';
import {
  LeftMenu, Container, MenuContent
} from './styles';
import { MenuList } from '../../components/List';
import {
  Item1, Item2, Item3, Item4, Item5
} from '../../components/List/items';

export const Home = () => {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  const [menu5, setMenu5] = useState(false);

  const activeMenu = (menu) => {
    if (menu === 1) {
      setMenu1(true);
      setMenu2(false);
      setMenu3(false);
      setMenu4(false);
      setMenu5(false);
    }

    if (menu === 2) {
      setMenu1(false);
      setMenu2(true);
      setMenu3(false);
      setMenu4(false);
      setMenu5(false);
    }

    if (menu === 3) {
      setMenu1(false);
      setMenu2(false);
      setMenu3(true);
      setMenu4(false);
      setMenu5(false);
    }

    if (menu === 4) {
      setMenu1(false);
      setMenu2(false);
      setMenu3(false);
      setMenu4(true);
      setMenu5(false);
    }

    if (menu === 5) {
      setMenu1(false);
      setMenu2(false);
      setMenu3(false);
      setMenu4(false);
      setMenu5(true);
    }
  };

  return (
    <>
      <Header />
      <Container>

        <LeftMenu>

          <MenuList
            activeMenu={activeMenu}
          />
        </LeftMenu>
        <MenuContent>

          {menu1 && (<Item1 />)}

          {menu2 && (<Item2 />)}

          {menu3 && (<Item3 />)}

          {menu4 && (<Item4 />)}

          {menu5 && (<Item5 />)}

        </MenuContent>
      </Container>
    </>
  );
};
