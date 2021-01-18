import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import { ButtonCalc } from '../Buttons';
import { apiIRPF, verifyApiErrors } from '../../services';
import { AlertMessage } from '../AlertMessage';
import { useUser } from '../core/UserProvider/useUser';

export const FormCalcINSS = ({ getUser }) => {
  const { user } = useUser();

  const classes = UseStyles();
  const [name, setName] = useState(user.nome || '');
  const [grossSalary, setGrossSalary] = useState(user.salarioMensal || '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrormessage] = useState(false);

  const handleSignUp = async () => {
    const newUser = {
      nome: name,
      salarioMensalBruto: grossSalary,
    };
    const resetFiled = () => {
      setGrossSalary('');
    };

    await apiIRPF.calculte.INSS(newUser)
      .then((data) => {
        setLoading(true);
        setErrormessage(verifyApiErrors(data));

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
              id="nome"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="cash"
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
              onCLick={handleSignUp}
            />
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};
