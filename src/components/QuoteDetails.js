import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuoteDetails = () => {
    const {id} = useParams()

    const [quote, setQuote] = useState([])
    // fetching the specific id
    useEffect(()=>{
        fetch(`http://localhost:8000/quotes/${id}`)
        .then(r=>r.json())
        .then(d=>setQuote(d))
        .catch(e=>console.log(e))
    }, [])

    return ( 
        <div>
            <h4>{quote.author}</h4>
            <p>{quote.quote}</p>
        </div>
     );
}
 
export default QuoteDetails;