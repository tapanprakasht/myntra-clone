import React, { Suspense } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import FilterPanel from './components/FilterPanel';
import FilterSection from './components/FilterSection';
import GridContent from './components/GridContent';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { Container, MainArea, Content } from './components/styles/App.styled';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const Wishlist = React.lazy(() => import('./components/Wishlist'));

export const theme = {
  colors: {
    search_background: '#f2f2f4',
    seperator_color: '#e5e5e7',
    primary_text_color: '#000',
    secondary_text_color: '#424453',
    third_text_color: '#94969f',
    orange_text_color: '#fd7d4b',
    pink_text_color: '#ff3f6c',
    blue_text_color: '#284de2',
    primary_background_color: 'rgb(83, 87, 102)'
  },
  margin_left: '40px',
  tablet: '1000px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Container>
            <Header/>
            <Switch>
              <Route exact path='/'>
                <Navigation/>
                <MainArea>
                  <FilterSection/>
                  <Content>
                    <FilterPanel/>
                    <GridContent/>
                  </Content>
                </MainArea>
              </Route>
              <Route path='/wishlist'>
                <Wishlist/>
              </Route>
            </Switch>
          </Container>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
