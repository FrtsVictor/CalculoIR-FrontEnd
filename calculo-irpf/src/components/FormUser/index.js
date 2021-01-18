import { React, useState } from 'react';
// api e hook
import { apiIRPF, verifyApiErrors } from '../../services';
import { useUser } from '../core/UserProvider/useUser';
//styles
import { ButtonUpdate } from '../Buttons';
import { UseStyles, FormContainer, ButtonContainer } from './styles';
import TextField from '@material-ui/core/TextField';

export const FormUser = () => {
  const classes = UseStyles();
  // user
  const { user } = useUser();
  const { setUser } = useUser();
  const [name, setName] = useState(user.nome);
  const [grossSalary, setGrossSalary] = useState(user.salarioMensal);
  const [dependents, setDependents] = useState(user.dependentes);
  const [childSupport, setChildSupport] = useState(0 || user.pensaoAlimenticia);
  // messages
  const [error, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState('red');
  const [sucessMessage, setSucessMessage ] = useState(false);


  const resetMessages = ()=>{
    setColor('red');
    setMessage(false);
    setErrorMessage(false)
    setSucessMessage(false);
  }

  const validateFields = () => {
    resetMessages()

    if (grossSalary < 0 || dependents < 0 || childSupport < 0) {
      setErrorMessage(' * Valores negativos');
      setMessage(true);
      return;
    }

    if (!name) {
      setErrorMessage(' * Nome obrigatorio');
      setMessage(true);
      return;
    }
  }

  const checkApiResponse = (data)=>{

    if (data.status != 204 ) {
      setErrorMessage(verifyApiErrors(data));
      setMessage(true);
      return true;
    }

    if(data.status == 204){
      setSucessMessage('Dados atualizados com sucesso !')
      setMessage(true)
      setColor('green')
      return false;
    }

  }

  const updateUser = async () => {
    validateFields()

    const userUpdated = {
      nome: name,
      salarioMensal: parseInt(grossSalary),
      dependentes: parseInt(dependents),
      pensaoAlimenticia: parseInt(childSupport),
      username: user.username
    };

    await apiIRPF.userRoutes.update(userUpdated, user.token)
      .then((data) => {
        setLoading(true);
        const haveErrors = checkApiResponse(data);
        if(!haveErrors){
          setUser({ ...userUpdated, token: user.token });
        }

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
            type="number"
            value={grossSalary}
            onChange={(e) => setGrossSalary(e.target.value)}
          />
          <TextField
            type="number"
            id="dependents"
            label="Dependentes"
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
          />
          <TextField
            type="number"
            id="childSupport"
            label="Pensao alimenticia"
            value={childSupport}
            onChange={(e) => setChildSupport(e.target.value)}
          />
          {
              error
              && (
              <p style={{
                  color: `${color}`,
                  fontSize: '13px',
                  marginBottom: '5px' }}>
                {errorMessage}
                {sucessMessage}
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
