import { React, useState } from 'react';
// api e hooks
import { AlertMessage } from '../AlertMessage';
import { apiIRPF, verifyApiErrors } from '../../services';
import { useUser } from '../core/UserProvider/useUser';
//styles
import TextField from '@material-ui/core/TextField';
import { ButtonCalc } from '../Buttons';
import { UseStyles, FormContainer, ButtonContainer } from './styles';

export const FormCalcIRRF = ({ getTableContent }) => {
  const classes = UseStyles();
  // user
  const { user } = useUser();
  const { user: { token } } = useUser();

  const [name, setName] = useState(user.nome || '');
  const [grossSalary, setGrossSalary] = useState(user.salarioMensal || '');
  const [dependents, setDependents] = useState(user.dependentes || '');
  const [childSupport, setChildSupport] = useState(user.pensaoAlimenticia || '');
  // errors
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const calculateIrrp = async () => {
    const calcModel = {
      nome: name,
      salarioMensalBruto: grossSalary,
      dependentes: dependents,
      pensaoAlimenticia: childSupport,
    };

    await apiIRPF.calculte.IRRF(calcModel, token)
      .then((data) => {
        setLoading(true);
        setErrorMessage(verifyApiErrors(data));
        if (errorMessage) {
          setError(true);
          setTimeout(() => { setError(false); }, 2000);
          return;
        }

        getTableContent(data.nome ? data : null);
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
              type="number"
              value={grossSalary}
              onChange={(e) => setGrossSalary(e.target.value)}
            />
            <TextField
              id="dependents"
              type="number"
              label="Dependentes"
              value={dependents}
              onChange={(e) => setDependents(e.target.value)}
            />
            <TextField
              id="childSupport"
              type="number"
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
              onCLick={calculateIrrp}
            />
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};
