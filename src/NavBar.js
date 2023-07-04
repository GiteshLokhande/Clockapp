import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
	<>
	<center>
    	<div className="nav">
      		<Link to="/">Clock</Link>
     		 <span style={{ width: 40 }}> </span>
      		<Link to="/Stopwatch">Stopwatch</Link>
      		<span style={{ width: 40 }}> </span>
    		  <Link to="/Alarm">Alarm</Link>
    	</div>

	</center>
	</>
	
  );
}
