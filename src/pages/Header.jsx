import { useNavigate, useLocation } from 'react-router-dom';

function Header(props) {
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

   const navStyle = {
      position : 'relative',
      left :location.pathname === '/' ? '0' : '210px',
   }
   return (
      <nav style={navStyle}>
         {buttons.map((button) => {
            const showButton = location.pathname === button.path;
            return !showButton && (
               // eslint-disable-next-line react/prop-types
               <button className={props.className} key={button.path} onClick={() => handleClick(button.path)}>
                  {button.text}
               </button>
            );
         })}
      </nav>
   );
}

export default Header;