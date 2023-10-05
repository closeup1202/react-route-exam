
function APILeftNavbar(props) {
   return (
      // eslint-disable-next-line react/prop-types
      <div className={props.className}>
         <h3>API</h3>
         <ul>
            <li><a href="#">APILink 1</a></li>
            <li><a href="#">APILink 2</a></li>
            <li><a href="#">APILink 3</a></li>
         </ul>
      </div>
   );
}

export default APILeftNavbar;