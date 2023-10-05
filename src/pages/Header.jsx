import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
   const navigate = useNavigate();
   const location = useLocation();

   const handleClick = (path) => {
      navigate(path);
   };

   const buttons = [
      { text: 'Home', path: '/' },
      { text: 'About', path: '/about' },
      { text: 'Contact', path: '/contact' },
      { text: 'Services', path: '/services' },
   ];

   return (
      <nav>
         {buttons.map((button) => {
            const showButton = location.pathname === button.path;
            return !showButton && (
               <button key={button.path} onClick={() => handleClick(button.path)}>
                  {button.text}
               </button>
            );
         })}
      </nav>
   );
}

export default Header;