import ServicesLeftNavbar from './LeftNavbar/ServicesLeftNavbar';

function Services() {
   return (
      <div>
         <ServicesLeftNavbar className='sideBar' />
         <div className='content'>
            <h1>Our Services</h1>
            <ul>
               <li>1</li>
               <li>2</li>
               <li>3</li>
            </ul>
         </div>
      </div>
   );
}

export default Services;