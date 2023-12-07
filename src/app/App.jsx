import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './components';
import Keycloak from 'keycloak-js';
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web'
import { config }from '../Constants'
import { SettingsProvider } from './contexts/SettingsContext';
import routes from './routes';
import '../fake-db';

const App = () => {
  const content = useRoutes(routes);
  
  const keycloak = new Keycloak({
    url: `${config.url.KEYCLOAK_BASE_URL}`,
    realm: "spring-boot-microservices-realm",
    clientId: "react-test"
  })

  const initOptions = {
    onLoad: 'login-required',
  };


  return (
    <SettingsProvider>
      <ReactKeycloakProvider
        authClient={keycloak}
      >
        <MatxTheme>
          <CssBaseline />
          {content}
        </MatxTheme>
      </ReactKeycloakProvider>
    </SettingsProvider>
  );
};

export default App;
