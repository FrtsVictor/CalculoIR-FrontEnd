import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
  CalculateINSS, CalculateIRPF, CalculateIRRF, HowToCalculate, WhatIsIRPF, CalculateSalLiq
} from '../List';
import { useStyles } from './styles';

const TabPanel = (props) => {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => ({
  id: `vertical-tab-${index}`,
  'aria-controls': `vertical-tabpanel-${index}`,
});

export const VerticalTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="O que é IRPF?" {...a11yProps(0)} />
        <Tab label="Como calcular IRPF?" {...a11yProps(1)} />
        <Tab label="Calcule IRPF" {...a11yProps(2)} />
        <Tab label="Calcule taxa INSS" {...a11yProps(3)} />
        <Tab label="Calcule IRRF" {...a11yProps(4)} />
        <Tab label="Calcule salario Liquido" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <WhatIsIRPF />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HowToCalculate />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CalculateIRPF />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <CalculateINSS />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CalculateIRRF />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <CalculateSalLiq />
      </TabPanel>
    </div>
  );
};
