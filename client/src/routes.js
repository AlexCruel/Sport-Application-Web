import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LinksPage} from './pages/LinksPage';
import {SearchPage} from './pages/SearchPage';
import {DetailPage} from './pages/DetailPage';
import {AuthPage} from './pages/AuthPage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/links' exact>
                    <LinksPage />
                </Route>
                <Route path='/search' exact>
                    <SearchPage />
                </Route>
                <Route path='/detail/:id'>
                    <DetailPage />
                </Route>
                <Redirect to='/search' />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path='/' exact>
                <AuthPage />
            </Route>
            <Redirect to='/' />
        </Switch>
    );
}