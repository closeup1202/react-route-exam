import AboutLeftNavbar from './LeftNavbar/AboutLeftNavbar';

function About() {
   return (
      <div>
         <AboutLeftNavbar className='sideBar' />
         <div className='content'>
            <p>This is About page</p>
         </div>
         
      </div>
   );
}

export default About;