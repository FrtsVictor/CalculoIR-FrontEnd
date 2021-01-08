/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import { ButtonCalc } from '../Buttons';
import { CpfMask } from '../CpfMask';
import { apiIRPF } from '../../services';
import { AlertMessage } from '../AlertMessage';

export const InputCalcIRPF = ({ getUser }) => {
  const classes = UseStyles();
  const [name, setName] = useState('Victor Freitas');
  const [cpf, setCpf] = useState('160.428.137-57');
  const [annualIncome, setAnnualIncome] = useState(40000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const calculate = async () => {
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
        if (!data) {
          setError(true);
          setTimeout(() => { setError(false); }, 2000);
        }
      }).finally(
        () => setLoading(false),
      );
  };

  return (
    <>
      {error && <AlertMessage />}

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
              type="submit"
              name={loading ? 'Calculando' : 'Calcular'}
              color="#fafafa"
              onCLick={calculate}
            />
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};
