import React from 'react'

const Pagination = ({totalPages, clickPages, previous, next, getCharacters}) => {
  
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalPages); i++) {
      pageNumbers.push((
         <button
            key={i}
            className='page--numbers'
            onClick={clickPages}
            value={`https://swapi.dev/api/people/?page=${i}`}
            >
               {i}
         </button>
      ))
    }
   
   return(
      <nav>    
        <button 
        onClick={() => 
           getCharacters(previous)
        
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
 //const url = 'https://swapi.dev/api/people/?page=1'

 /* 
 previous === null ? previous + 1 : previous

 next === null ? next - 1 : next

 when I click the previous button I am trying to get it to not go any further.
 I receive an error an error message stating:
 Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
 Afterwards it takes two clicks of the next button to get back to the first page of characters.
 The same thing happens when I reach the final page and try to go in the reverse direction.

 onChange={(e) => setText(e.target.value)}
 */