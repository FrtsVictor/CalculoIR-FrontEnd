/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import { ButtonCalc } from '../Buttons';
import { apiIRPF, verifyApiErrors } from '../../services';
import { AlertMessage } from '../AlertMessage';
import { useUser } from '../core/UserProvider/useUser';

export const InputCalcIRRF = ({ getUser }) => {
  const { user: { nome } } = useUser();
  const classes = UseStyles();
  const [name, setName] = useState(nome || '');
  const [grossSalary, setGrossSalary] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [dependents, setDependents] = useState(0);
  const [childSupport, setChildSupport] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);

  const calculate = async () => {
    const user = {
      nome: name,
      salarioMensalBruto: grossSalary,
      dependentes: dependents,
      pensaoAlimenticia: childSupport,
    };
    const resetFiled = () => {
      setChildSupport('');
    };
    await apiIRPF.calculte.IRRF(user)
      .then((data) => {
        setLoading(true);
        setErrorMessage(verifyApiErrors(data));

        if (errorMessage) {
          setError(true);
          setTimeout(() => { setError(false); }, 2000);
          return;
        }

        getUser(data.nome ? data : null);
        resetFiled();
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
