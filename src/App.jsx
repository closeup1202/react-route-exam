import { BrowserRouter as Router } from 'react-router-dom';
import Header from './pages/Header';
import AppRoutes from './Routes/Routes';
import './css/layout.css';

function App() {
  localStorage.setItem('loginedUser', 'admin');
  const loginedUser = localStorage.getItem('loginedUser');
  return (
    <Router>
      {/* <div className='container'> */}
      <div>
        <Header className='header' loginedUser={loginedUser}/>
        <div className='main'>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;