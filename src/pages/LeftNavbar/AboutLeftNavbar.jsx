function AboutLeftNavbar(props) {
   return (
      // eslint-disable-next-line react/prop-types
      <div className={props.className}>
         <h3>About</h3>
         <ul>
            <li><a href="#">AboutLink 1</a></li>
            <li><a href="#">AboutLink 2</a></li>
            <li><a href="#">AboutLink 3</a></li>
         </ul>
      </div>
   );
}

export default AboutLeftNavbar;