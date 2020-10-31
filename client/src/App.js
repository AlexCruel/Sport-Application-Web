import React from 'react';
import 'materialize-css';
import {BrowserRouter} from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hook/auth.hook';
import { AuthContext } from './context/AuthContext';

function App() {
  const {login, logout, token, userId} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{
      token, userId, login, logout, isAuthenticated
    }}>
      <BrowserRouter>
        <div className='container'>
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
