import { useNavigate } from 'react-router-dom';

function Navbar() {
   const navigate = useNavigate();

   const handleHomeClick = () => {
      navigate('/');
   };

   const handleAboutClick = () => {
      navigate('/about');
   };

   const handleContactClick = () => {
      navigate('/contact');
   };

   const handleServicesClick = () => {
      navigate('/services');
   };

   return (
      <nav>
         <button onClick={handleHomeClick}>Home</button>
         <button onClick={handleAboutClick}>About</button>
         <button onClick={handleContactClick}>Contact</button>
         <button onClick={handleServicesClick}>Services</button>
      </nav>
   );
}

export default Navbar;