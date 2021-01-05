/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import { ButtonCalc } from '../Buttons';
import { CpfMask } from '../CpfMask';
import { apiIRPF } from '../../services';

export const InputCalc = ({ getUser }) => {
  const classes = UseStyles();
  const [name, setName] = useState('Victor Freitas');
  const [cpf, setCpf] = useState('160.428.137-57');
  const [annualIncome, setAnnualIncome] = useState(40000);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    const newUser = {
      nome: name,
      cpf,
      rendimentoAnualBruto: annualIncome,
    };

    // const resetFiled = () => {
    //   setName('');
    //   setCpf('');
    //   setAnnualIncome('');
    // };

    await apiIRPF.calculateIRFP(newUser)
      .then((data) => {
        setLoading(true);
        getUser(data);
        // resetFiled();
      }).finally(
        () => setLoading(false),
      );
  };

  return (
    <FormContainer>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="nome"
            label="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            id="cpf"
            label="CPF"
            value={cpf}
            onChange={(e) => { setCpf(CpfMask(e.target.value)); }}
          />

          <TextField
            id="cash"
            label="Rendimento Anual Bruto"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(e.target.value)}
          />
        </div>

        <ButtonContainer>
          <ButtonCalc
            name={loading ? 'Calculando' : 'Calcular'}
            color="#fafafa"
            onCLick={handleSignUp}
          />
        </ButtonContainer>

      </form>
    </FormContainer>
  );
};
