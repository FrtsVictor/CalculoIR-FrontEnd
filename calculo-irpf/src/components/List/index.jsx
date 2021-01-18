import { React, useState } from 'react';

// aliquotaTable
import {
  AliquotaTable,
  aliquotaAnualIRPF,
  aliquotaMensalINSS,
  aliquotaMensalIRPF
} from '../AliquotaTable';
// calc tables
import { IRPFTable } from '../IRPFTable';
import { INSSTable } from '../INSSTable';
import { IRRFTable } from '../IRRFTable';
import { SalLiqTable } from '../SalLiqTable';
//forms
import { FormCalcIRPF } from '../FormCalcIRPF';
import { FormCalcSalLiq } from '../FormCalcSalLiq';
import { FormCalcINSS } from '../FormCalcINSS';
import { FormCalcIRRF } from '../FormCalcIRRF';
// styles
import {
  TextContainer, TableContainer, Container
} from './styles';

export const WhatIsIRPF = () => (
  <TextContainer>
    <div>
      <h4>O que é IRPF?</h4>
      <p>
      O IRPF, ou Imposto de Renda de Pessoa Física, é um imposto federal brasileiro que incide
      incide sobre os rendimentos da Pessoa Física e só não precisa apurar quem estiver dentro
      do limite de isenção de faturamento estabelecido pela Receita Federal.

        O atraso na entrega gera multa mínima de R$ 165,74,
        então é importante confirmar se você está no grupo de obrigatoriedade para
        não ter problemas futuros com o fisco.
      </p>
    </div>

    <div>
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
        Teve em 31.12.2019 bens ou direitos no valor total superior a 300 mil, somando todos
        os bens;
        Aqueles que passaram à condição de residente no Brasil e se mantiveram até 31.12.2019;
        Todos que venderam imóveis residenciais e obtiveram ganho na operação,
        mesmo que tenha comprado outro imóvel em um prazo de 180 dias e usaram da
        regra de isenção do imposto de renda;
        Quem exerce atividade rural e teve receita bruta acima de R$ 142.798,50
        ou que pretende compensar prejuízos de anos anteriores ou até mesmo de 2019.
      </p>
    </div>
  </TextContainer>
);

export const HowToCalculate = () => (
  <TextContainer>
    <h4>Tabelas para calculo de aliquota</h4>


  </TextContainer>
);

export const CalculateIRPF = () => {
  const [tableContent, setTableContent] = useState(null);

  const getTableContent = (user) => {
    setTableContent(null);
    setTableContent(user);
  };

  return (
    <Container>
      <h4>Calculo IRPF(Imposto renda pessoa fisica)</h4>

      <span >
       IRPF = [ (Salário anual bruto * 20%) * aliquota ] - dedução
      </span>

      <TableContainer>
        <p>Aliquota IRPF Anual </p>
        <AliquotaTable tableData={aliquotaAnualIRPF} />
      </TableContainer>

      <FormCalcIRPF getTableContent={getTableContent} />

      <TableContainer>
        {tableContent
        && <IRPFTable tableContent={tableContent} />}
      </TableContainer>
    </Container>
  );
};

export const CalculateINSS = () => {
  const [tableContent, setTableContent] = useState(null);

  const getTableContent = (user) => {
    setTableContent(null);
    setTableContent(user);
  };

  return (
    <Container>
      <h4>Calculo INSS 2021</h4>

      <span >
       INSS = (Salário bruto * alíquota) - dedução
      </span>

      <TableContainer>
        <p>Aliquota INSS Mensal</p>
        <AliquotaTable tableData={aliquotaMensalINSS}/>
      </TableContainer>


      <FormCalcINSS getTableContent={getTableContent} />

      <TableContainer>
        {tableContent
        && <INSSTable tableContent={tableContent} />}
      </TableContainer>
    </Container>
  );
};

export const CalculateIRRF = () => {
  const [tableContent, setTableContent] = useState(null);

  const getTableContent = (user) => {
    setTableContent(user);
  };

  return (
    <Container>

      <h4>Calculo IRRF(Imposto renda retido na fonte) 2021</h4>

      <span >
       IRRF = [ (Salário bruto - dependentes - INSS) * alíquota ] - dedução
      </span>

      <TableContainer>
        <p>Aliquota IRPF Mensal</p>
        <AliquotaTable tableData={aliquotaMensalIRPF} />
      </TableContainer>

      <FormCalcIRRF getTableContent={getTableContent} />

      <TableContainer>
        {tableContent && <IRRFTable tableContent={tableContent} />}
      </TableContainer>

    </Container>
  );
};

export const CalculateSalLiq = () => {
  const [tableContent, setTableContent] = useState(null);

  const getTableContent = (user) => {
    setTableContent(user);
  };

  return (
    <Container>
      <h4>Calculo Salario Liquido</h4>
      <span >
       Salario liq = ( [ (Salário bruto - INSS ) - IRRF ] - descontos )
      </span>

      <FormCalcSalLiq getTableContent={getTableContent} />

      <TableContainer>
        {tableContent && <SalLiqTable tableContent={tableContent} />}
      </TableContainer>

    </Container>
  );
};
