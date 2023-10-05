import ServicesLeftNavbar from './LeftNavbar/ServicesLeftNavbar';

function Services() {
   return (
      <div>
         <ServicesLeftNavbar />
         <h1>Our Services</h1>
         <p>We offer the following services:</p>
         <ul>
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>UI/UX Design</li>
         </ul>
      </div>
   );
}

export default Services;