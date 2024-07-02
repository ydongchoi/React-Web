import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import { MatxTheme } from './components';
import { config }from '../Constants'
import { SettingsProvider } from './contexts/SettingsContext';
import routes from './routes';
import '../fake-db';

const App = () => {
  const content = useRoutes(routes);
  
  const initOptions = {
    onLoad: 'login-required',
  };


  return (
    <SettingsProvider>      
        <MatxTheme>
          <CssBaseline />
          {content}
        </MatxTheme>
    </SettingsProvider>
  );
};

export default App;
