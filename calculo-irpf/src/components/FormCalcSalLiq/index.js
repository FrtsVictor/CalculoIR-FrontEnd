import { React, useState } from 'react';
// api e hooks
import { apiIRPF, verifyApiErrors } from '../../services';
import { useUser } from '../core/UserProvider/useUser';
import { AlertMessage } from '../AlertMessage';
// styles
import { ButtonCalc } from '../Buttons';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import TextField from '@material-ui/core/TextField';

export const FormCalcSalLiq = ({ getTableContent }) => {
  const classes = UseStyles();
  // user
  const { user } = useUser();
  const [name, setName] = useState(user.nome || '');
  const [grossSalary, setGrossSalary] = useState(user.salarioMensal || 0);
  const [dependents, setDependents] = useState(user.dependentes || 0);
  const [childSupport, setChildSupport] = useState(user.pensaoAlimenticia || 0);
  const [discounts, setDiscounts] = useState(0);
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
      outrosDescontos: discounts
    };

    await apiIRPF.calculte.SalLiq(calculation)
      .then((data) => {
        setLoading(true);

        setErrorMessage(verifyApiErrors(data));
        if (errorMessage) {
          setError(true);
          setTimeout(() => { setError(false); }, 2000);
          return;
        }

        getTableContent(data.nome ? data : null);
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
              type="number"
              label="Salario Mensal Bruto"
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
            <TextField
              id="childSupport"
              type="number"
              label="Outros descontos"
              value={discounts}
              onChange={(e) => setDiscounts(e.target.value)}
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
