import { React, useState } from 'react';
import { AliquotaTable } from '../AliquotaTable';
import { IRPFTable } from '../IRPFTable';
import { INSSTable } from '../INSSTable';
import { IRRFTable } from '../IRRFTable';
import { InputCalcIRPF } from '../InputCalcIRPF';
import { TextContainer } from './styles';
import { InputCalcINSS } from '../InputCalcINSS';
import { InputCalcIRRF } from '../InputCalcIRRF';

export const Item1 = () => (
  <TextContainer>
    <h4>O que é IRPF?</h4>

    <p>
      Declaração de Imposto de Renda Pessoa Física 2020
      Todo ano, de março a abril, chega a hora de declarar seu imposto de renda.
      Até o momento (26/6) quase 25,1 milhões de declarações foram recebidas pela
      Receita Federal,
      número bem abaixo das 32 milhões esperadas em 2020.

      O atraso na entrega gera multa mínima de R$ 165,74,
      então é importante confirmar se você está no grupo de obrigatoriedade para
      não ter problemas futuros com o fisco.
    </p>

    <h4> Quem precisa declarar o imposto?</h4>

    <p>
      Para começar, é importante entender quais são as situações que te obrigam à entrega
      desta declaração para a Receita Federal. Confira abaixo quais são elas:
      Os que receberam rendimentos tributáveis acima de R$ 28.559,70 durante o ano de 2019,
      como salários, honorários, férias, comissões, pró-labore, receita com aluguel de imóveis,
      pensões, entre outros.
      Todos que receberam rendimentos isentos, não tributáveis ou tributados exclusivamente
      na fonte superior a R$ 40.000,00 durante o ano de 2019, como por exemplo: alimentação,
      transporte e uniformes fornecidos pela empresa de forma gratuita,
      reembolso de viagens em geral,
      salário-família, entre outros.
      Quem recebeu em qualquer mês, dinheiro por conta de alienação de bens e direitos –
      em que o IR incida – ou então realizaram operação em bolsas de valores, mercadorias,
      futuro ou semelhantes;
      Teve em 31.12.2019 bens ou direitos no valor total superior a 300 mil, somando todos os bens;
      Aqueles que passaram à condição de residente no Brasil e se mantiveram até 31.12.2019;
      Todos que venderam imóveis residenciais e obtiveram ganho na operação,
      mesmo que tenha comprado outro imóvel em um prazo de 180 dias e usaram da
      regra de isenção do imposto de renda;
      Quem exerce atividade rural e teve receita bruta acima de R$ 142.798,50
      ou que pretende compensar prejuízos de anos anteriores ou até mesmo de 2019.
    </p>
  </TextContainer>
);

export const Item2 = () => (
  <TextContainer>
    <h3>Item2</h3>
    <p>
      Declaração de Imposto de Renda Pessoa Física 2020
      Todo ano, de março a abril, chega a hora de declarar seu imposto de renda.
      Até o momento (26/6) quase 25,1 milhões de declarações foram recebidas pela
      Receita Federal,
      número bem abaixo das 32 milhões esperadas em 2020.

      O atraso na entrega gera multa mínima de R$ 165,74,
      então é importante confirmar se você está no grupo de obrigatoriedade para
      não ter problemas futuros com o fisco.
    </p>
    <AliquotaTable />
  </TextContainer>
);

export const Item3 = () => {
  const [userCsv, setUserCsv] = useState(null);

  const getUser = (user) => {
    setUserCsv(null);
    setUserCsv(user);
  };

  return (
    <TextContainer>
      <h3>Declaração de Imposto de Renda Pessoa Física 2020 </h3>

      <InputCalcIRPF getUser={getUser} />

      {userCsv
        && <IRPFTable userCalc={userCsv} />}

    </TextContainer>
  );
};

export const Item4 = () => {
  const [userCsv, setUserCsv] = useState(null);

  const getUser = (user) => {
    setUserCsv(null);
    setUserCsv(user);
  };

  return (
    <TextContainer>
      <h3>Calculo INSS 2021</h3>
      <InputCalcINSS getUser={getUser} />

      {userCsv
        && <INSSTable userCalc={userCsv} />}

    </TextContainer>
  );
};

export const Item5 = () => {
  const [userCsv, setUserCsv] = useState(null);

  const getUser = (user) => {
    setUserCsv(null);
    setUserCsv(user);
  };

  return (
    <TextContainer>
      <h3>Calculo IRRF 2021</h3>
      <InputCalcIRRF getUser={getUser} />

      {userCsv
        && <IRRFTable userCalc={userCsv} />}

    </TextContainer>
  );
};
