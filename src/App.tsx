import Header from './components/Header';
import Navigation from './components/Navigation';
import FilterPanel from './components/FilterPanel';
import FilterSection from './components/FilterSection';
import GridContent from './components/GridContent';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/styles/Global';
import { Container, MainArea } from './components/styles/App.styled';

const theme = {
  colors: {
    search_background: '#f2f2f4',
    seperator_color: '#e5e5e7',
    primary_text_color: '#000',
    secondary_text_color: '#424453',
    third_text_color: '#94969f',
    orange_text_color: '#fd7d4b',
    pink_text_color: '#ff3f6c'
  },
  margin_left: '40px',
  tablet: '1000px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Container>
        <Header/>
        <Navigation/>
        <FilterPanel/>
        <MainArea>
          <FilterSection/>
          <GridContent/>
        </MainArea>
      </Container>
    </ThemeProvider>
  );
}

export default App;
