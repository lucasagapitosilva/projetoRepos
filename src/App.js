import { BrowserRouter } from 'react-router-dom';
import Rotas from './Routes/routes';
import GlobalStyle from './Styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
