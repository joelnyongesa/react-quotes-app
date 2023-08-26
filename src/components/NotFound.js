import { useNavigate } from "react-router-dom";


const NotFound = () => {
    let navigate = useNavigate()

    return ( 
        <div>
            <h1>404 Error</h1>
            <p>Page Not Found</p>
            <button onClick={()=>navigate('/')}>Back to Home</button>
        </div>
     );
}
 
export default NotFound;