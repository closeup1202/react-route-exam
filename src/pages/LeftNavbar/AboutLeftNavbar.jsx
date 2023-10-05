function AboutLeftNavbar(props) {
   return (
      // eslint-disable-next-line react/prop-types
      <div className={props.className}>
         <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
         </ul>
      </div>
   );
}

export default AboutLeftNavbar;