/* eslint-disable react/prop-types */

function ServicesLeftNavbar(props) {
   return (
      <div className={props.className}>
         <h3>Services</h3>
         <ul>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>UI/UX Design</li>
         </ul>
      </div>
   );
}

export default ServicesLeftNavbar;