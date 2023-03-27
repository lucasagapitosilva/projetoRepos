import { BrowserRouter } from 'react-router-dom';
import Rotas from './Routes/routes';
import GlobalStyle from './Styles/global';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer autoClose={3000}/>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
