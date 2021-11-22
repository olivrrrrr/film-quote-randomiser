import React from 'react'

function QuoteViewer({quote}) {
    return (
        <div>
            <p>"{quote.quote}" - {quote.role}</p>
            <h4>{quote.show}</h4>
        </div>
    )
}

export default QuoteViewer
