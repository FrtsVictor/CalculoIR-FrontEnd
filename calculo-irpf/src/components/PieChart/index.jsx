import React from 'react';
import { ResponsivePie } from '@nivo/pie';

export const MyResponsivePie = ({ data /* see data tab */ }) => {
  // const entr = Object.entries(data);

  // const dataGraph = entr.reduce((acc, value) => {
  // if (value[0] !== 'nome' && value[0]
  // !== 'salarioBruto' && value[0] !== 'baseCalculo' && value[0] !== 'valorTotalDescontos') {
  //     const graph = {
  //       id: value[0],
  //       label: value[0],
  //       value: parseFloat(value[1]).toFixed(2)
  //     };
  //     acc.push(graph);
  //   }
  //   return acc;
  // }, []);
  const dataGraph = [
    // {
    //   id: 'Base Calculo',
    //   label: 'Base Calculo',
    //   value: data.baseCalculo
    // },
    {
      id: 'IRRF',
      label: 'IRRF',
      value: data.irrf
    },
    {
      id: 'INSS',
      label: 'INSS',
      value: data.inss
    }
  ];

  return (
    <ResponsivePie
      data={dataGraph}
      margin={{
        top: 40, right: 80, bottom: 80, left: 80
      }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: 'nivo' }}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: 'color' }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
        }
      ]}
      fill={[
        {
          match: {
            id: 'IRRF'
          },
          id: 'dots'
        },
        {
          match: {
            id: 'INSS'
          },
          id: 'lines'
        },

      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000'
              }
            }
          ]
        }
      ]}
    />
  );
};
