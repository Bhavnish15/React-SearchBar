import React from 'react'
import "./SearchResultsList.css";

const SearchResultsList = ({results}) => {
  return (
    <div className="resultList">
        {
            results.map((result, id)=>{
                return <div key={id}>{result.name}</div>
            })
        }
    </div>
  )
}

export default SearchResultsList