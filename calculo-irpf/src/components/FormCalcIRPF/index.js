import { React, useState } from 'react';
// api e hooks
import { AlertMessage } from '../AlertMessage';
import { useUser } from '../core/UserProvider/useUser';
import { apiIRPF, verifyApiErrors } from '../../services';
//styles
import { ButtonCalc } from '../Buttons';
import TextField from '@material-ui/core/TextField';
import { UseStyles, FormContainer, ButtonContainer } from './styles';

export const FormCalcIRPF = ({ getTableContent }) => {
  const classes = UseStyles();
  // user
  const { user } = useUser();
  const { user: { token } } = useUser();
  const [name, setName] = useState(user.nome || '');
  const [annualIncome, setAnnualIncome] = useState('');
  // erros
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrormessage] = useState(false);
  const [error, setError] = useState(false);

  const calculateIrpf = async () => {
    const calcModel = {
      nome: name,
      rendimentoAnualBruto: annualIncome,
    };

    await apiIRPF.calculte.IRFP(calcModel, token)
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
              type="number"
              id="annualIncome"
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
              onCLick={calculateIrpf}
            />
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};
