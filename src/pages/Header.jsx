import { useNavigate } from 'react-router-dom';

function Navbar() {
   const navigate = useNavigate();

   const handleClick = (path) => {
      navigate(path);
   };

   return (
      <nav>
         <button onClick={() => handleClick('/')}>Home</button>
         <button onClick={() => handleClick('/about')}>About</button>
         <button onClick={() => handleClick('/contact')}>Contact</button>
         <button onClick={() => handleClick('/services')}>Services</button>
      </nav>
   );
}

export default Navbar;