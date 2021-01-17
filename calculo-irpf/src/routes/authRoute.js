/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom';
// import { useUser } from '../components/core/UserProvider/useUser';

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const user = {};

  return (
    <ReactDOMRoute
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) => {
        // TODO verificar se o token é válido
        if (isPrivate && !user) {
          return (
            <Redirect to={{
              pathname: '/login',
              state: { from: location },
            }}
            />
          );
        }
        return <Component />;
      }}
    />
  );
};

export default Route;
