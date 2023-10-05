import ContactLeftNavbar from './LeftNavbar/ContactLeftNavbar';

function Contact() {
   return (
      <div>
         <ContactLeftNavbar className='sideBar' />
         <div className='content'>
            <h1>Contact Us</h1>
            <p>Feel free to contact us using the information below:</p>
         </div>
      </div>
   );
}

export default Contact;