import {React, useEffect, useState} from 'react'
import QuoteViewer from '../component/QuoteViewer';
import RandomiserButton from '../component/RandomiserButton';


function LibraryContainer() {

    const [quote, setQuote] = useState(null); 

    useEffect(() =>{
        fetch(" https://movie-quote-api.herokuapp.com/v1/quote/")
        .then(resp=>resp.json())
        .then(data=>setQuote(data))
    },[])

    const onRandomiseOnClick = () => {
        fetch(" https://movie-quote-api.herokuapp.com/v1/quote/")
        .then(resp=>resp.json())
        .then(data=>setQuote(data))
    }
    
    return ( 
        quote ? 

        <div>
            <QuoteViewer quote={quote}/>
            <RandomiserButton onRandomiseOnClick={onRandomiseOnClick}/>
        </div> 

        : 

        <p>Loading...</p>
    )
}

export default LibraryContainer
