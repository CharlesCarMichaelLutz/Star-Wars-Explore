import React from 'react'

const Pagination = ({totalPages, clickPages, previous, next, getCharacters}) => {
  
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalPages); i++) {
      pageNumbers.push((
         <button
            key={i}
            className='page--numbers'
            //onClick={clickPages}
            value={`https://swapi.dev/api/people/?page=${i}`}
            >
               {i}
         </button>
      ))
    }
   
   return(
      <nav>    
        <button 
        onClick={() => {
           getCharacters(previous)
        }
      }
        >Previous</button>
         {pageNumbers}
         <button 
         onClick={
           () => getCharacters(next)
         }
         >Next</button>
      </nav>
      
   )
 }
 
 export default Pagination 
 const url = 'https://swapi.dev/api/people/?page=1'