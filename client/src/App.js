import React from 'react';
import 'materialize-css';
import {BrowserRouter} from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hook/auth.hook';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer }  from './components/Footer';

function App() {
  const {login, logout, token, userId} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <AuthContext.Provider value={{
      token, userId, login, logout, isAuthenticated
    }}>
      <BrowserRouter>
      { isAuthenticated && <Navbar /> }
        <div className='container'>
          {routes}
        </div>
        { isAuthenticated && <Footer /> } 
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
