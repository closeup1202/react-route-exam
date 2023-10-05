/* eslint-disable react/prop-types */

function ServicesLeftNavbar(props) {
   return (
      <div className={props.className}>
         <h3>Services</h3>
         <ul>
            <li><a href="#">ServiceLink 1</a></li>
            <li><a href="#">ServiceLink 2</a></li>
            <li><a href="#">ServiceLink 3</a></li>
         </ul>
      </div>
   );
}

export default ServicesLeftNavbar;