import { React, useState } from 'react';
// api e hooks
import { AlertMessage } from '../AlertMessage';
import { useUser } from '../core/UserProvider/useUser';
import { apiIRPF, verifyApiErrors } from '../../services';
//styles
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import TextField from '@material-ui/core/TextField';
import { ButtonCalc } from '../Buttons';

export const FormCalcINSS = ({ getTableContent }) => {
  const classes = UseStyles();
  // user
  const { user } = useUser();
  const { user: { token } } = useUser();
  const [name, setName] = useState(user.nome || '');
  const [grossSalary, setGrossSalary] = useState(user.salarioMensal || '');
// messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrormessage] = useState(false);

  const calculateInss = async () => {
    const calcModel = {
      nome: name,
      salarioMensalBruto: grossSalary,
    };

    await apiIRPF.calculte.INSS(calcModel, token)
      .then((data) => {
        setLoading(true);
        setErrormessage(verifyApiErrors(data));

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
              id="nome"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="cash"
              type="number"
              label="Salario Mensal Bruto"
              value={grossSalary}
              onChange={(e) => setGrossSalary(e.target.value)}
            />
          </div>

          <ButtonContainer>
            <ButtonCalc
              type="submit"
              name={loading ? 'Calculando' : 'Calcular'}
              color="#fafafa"
              onCLick={calculateInss}
            />
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};
