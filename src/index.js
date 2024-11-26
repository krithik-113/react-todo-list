import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InputsContext } from './Coponenets/Context API/InputsContext';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL = "https://todos-backend-jchp.onrender.com";
root.render(
    <InputsContext>
      <App />
    </InputsContext>
)