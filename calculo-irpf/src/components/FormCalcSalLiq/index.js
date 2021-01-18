import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import { ButtonCalc } from '../Buttons';
import { apiIRPF, verifyApiErrors } from '../../services';
import { AlertMessage } from '../AlertMessage';
import { useUser } from '../core/UserProvider/useUser';

export const FormCalcSalLiq = ({ getUser }) => {
  const classes = UseStyles();
  // user
  const { user } = useUser();
  const [name, setName] = useState(user.nome || '');
  const [grossSalary, setGrossSalary] = useState(user.salarioMensal || 0);
  const [dependents, setDependents] = useState(user.dependentes || 0);
  const [childSupport, setChildSupport] = useState(user.pensaoAlimenticia || 0);
  // errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const resetFiled = () => {
    setChildSupport('');
  };

  const calculate = async () => {
    const calculation = {
      nome: name,
      salarioMensalBruto: grossSalary,
      dependentes: dependents,
      pensaoAlimenticia: childSupport,
    };

    await apiIRPF.calculte.IRRF(calculation)
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
      {error && <AlertMessage message={errorMessage} />}

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
            <TextField
              id="childSupport"
              label="Total de descontos"
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
