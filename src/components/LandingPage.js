import { Link, Outlet } from "react-router-dom";

const Landing = () => {
    return ( 
        <div>
            <nav>
                <button><Link to='/home'>Home</Link></button>
                <button><Link to='/quotes'>Quotes</Link></button>
            </nav>
            <Outlet></Outlet>
        </div>
     );
}
 
export default Landing;