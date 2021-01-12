/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import { ButtonCalc } from '../Buttons';
import { apiIRPF } from '../../services';
import { AlertMessage } from '../AlertMessage';

export const InputCalcIRRF = ({ getUser }) => {
  const classes = UseStyles();
  const [name, setName] = useState('Victor Freitas');
  const [grossSalary, setGrossSalary] = useState(3000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dependents, setDependents] = useState(2);
  const [childSupport, setChildSupport] = useState(150);

  const calculate = async () => {
    const user = {
      nome: name,
      salarioBruto: grossSalary,
      dependentes: dependents,
      pensaoAlimenticia: childSupport,
    };
    // const resetFiled = () => {
    //   setName('');
    //   setCpf('');
    //   setAnnualIncome('');
    // };
    await apiIRPF.calculateIRRF(user)
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
              id="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="grosSalary"
              label="Salario Mensal Bruto"
              value={grossSalary}
              onChange={(e) => setGrossSalary(e.target.value)}
            />
            <TextField
              id="dependents"
              label="Dependentes"
              value={dependents}
              onChange={(e) => setDependents(e.target.value)}
            />
            <TextField
              id="childSupport"
              label="Pensao alimenticia"
              value={childSupport}
              onChange={(e) => setChildSupport(e.target.value)}
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
