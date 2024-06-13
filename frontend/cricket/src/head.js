// import {React} from "react";
import {Link} from 'react-router-dom';
const Head = () => {
    return ( 
        <> 
        <nav>
        <ul>
            <li><Link to="/">ESS Cricinfo</Link></li>
            <li><Link to="/live">Live scores</Link></li>
            <li><Link to="/matches">Matches</Link></li>
            <li><Link to="/table">Table</Link></li>
        </ul>
        </nav>
        </>
    );
}
export default Head;