import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Quotes = () => {
    const [quotes, setQuotes] = useState([])

    // Fetching from db.json
    useEffect(()=>{
        fetch('http://localhost:8000/quotes')
        .then(r=>r.json())
        .then(data => setQuotes(data))
        .catch(e=>console.log(e))
    }, [])

    const quotesList = quotes.map((quote)=>{
        return(
            <div key={quote.id}>
                <h3>{quote.author}</h3> {/* /quotes/:id */}
                <button><Link to={`/quotes/${quote.id}`}>View Full Quote</Link></button>
            </div>
        )
    })

    return ( 
        <div>
            <h1>Quotes Page</h1>
            {quotesList}
        </div>
     );
}
 
export default Quotes;