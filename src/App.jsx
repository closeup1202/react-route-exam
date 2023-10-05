import { BrowserRouter as Router } from 'react-router-dom';
import Header from './pages/Header';
import AppRoutes from './Routes/Routes';
import './css/layout.css';

function App() {
  return (
    <Router>
      {/* <div className='container'> */}
      <div>
        <Header className='header' />
        <div className='main'>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;