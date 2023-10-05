import { BrowserRouter as Router } from 'react-router-dom';
import Header from './pages/Header';
import AppRoutes from './Routes/Routes';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;