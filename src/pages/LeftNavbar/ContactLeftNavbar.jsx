
function ContactLeftNavbar(props) {
   return (
      // eslint-disable-next-line react/prop-types
      <div className={props.className}>
         <h3>Contact</h3>
         <ul>
            <li>Phone</li>
            <li>Email</li>
            <li>Address</li>
         </ul>
      </div>
   );
}

export default ContactLeftNavbar;