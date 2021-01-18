/* eslint-disable radix */
/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import { ButtonUpdate } from '../Buttons';
import { apiIRPF, verifyApiErrors } from '../../services';
import { useUser } from '../core/UserProvider/useUser';

export const FormUser = () => {
  const classes = UseStyles();
  // user
  const { user } = useUser();
  const { setUser } = useUser();
  const [name, setName] = useState(user.nome);
  const [grossSalary, setGrossSalary] = useState(user.salarioMensal);
  const [dependents, setDependents] = useState(user.dependentes);
  const [childSupport, setChildSupport] = useState(user.pensaoAlimenticia);
  // erros
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateUser = async () => {
    setError(false);
    const userUpdated = {
      nome: name,
      salarioMensal: parseInt(grossSalary),
      dependentes: parseInt(dependents),
      pensaoAlimenticia: parseInt(childSupport),
      username: user.username
    };

    if (!name) {
      setErrorMessage(' * Nome obrigatorio');
      setError(true);
      return;
    }

    if (grossSalary < 0 || dependents < 0 || childSupport < 0) {
      setErrorMessage(' * Valores negativos');
      setError(true);
      return;
    }

    await apiIRPF.userRoutes.update(userUpdated, user.token)
      .then((data) => {
        setLoading(true);

        if (data) {
          setErrorMessage(verifyApiErrors(data));
          setError(true);
          setTimeout(() => { setError(false); }, 2000);
          return;
        }

        setUser({ ...userUpdated, token: user.token });
      }).finally(
        () => setLoading(false)
      );
  };

  return (
    <>
      <FormContainer>
        <form className={classes.root} noValidate autoComplete="off">
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
            type="number"
            value={childSupport}
            onChange={(e) => setChildSupport(e.target.value)}
          />
          {
              error
              && (
              <p style={{ color: 'red', fontSize: '13px', marginBottom: '5px' }}>
                {errorMessage}
              </p>
              )
            }
          <ButtonContainer>
            <ButtonUpdate
              type="submit"
              name={loading ? 'Atualizando' : 'Atualizar'}
              color="#fafafa"
              onCLick={updateUser}
            />
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
};
