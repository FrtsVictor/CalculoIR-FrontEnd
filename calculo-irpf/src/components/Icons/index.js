/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Icon } from '@material-ui/core';
import Calculator from '../../assets/calculator.svg';
import List from '../../assets/list.svg';
import TrendingUp from '../../assets/trending_up.svg';
import TrendingDown from '../../assets/trending_down.svg';
import Text from '../../assets/text.svg';

export const CalculatorIcon = () => (
  <Icon>
    <img src={Calculator} height={24} width={24} />
  </Icon>
);

export const ListIcon = () => (
  <Icon>
    <img src={List} height={24} width={24} />
  </Icon>
);

export const TrendingUpIcon = () => (
  <Icon>
    <img src={TrendingUp} height={24} width={24} />
  </Icon>
);

export const TrendingDownIcon = () => (
  <Icon>
    <img src={TrendingDown} height={24} width={24} />
  </Icon>
);

export const TextIcon = () => (
  <Icon>
    <img src={Text} height={24} width={24} />
  </Icon>
);
