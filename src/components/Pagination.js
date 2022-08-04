import React from 'react'

const Pagination = ({totalPages, clickPages, prevPage, nextPage, getCharacters}) => {
  
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalPages); i++) {
      pageNumbers.push((
         <button
            key={i}
            className='page--numbers'
            //onClick={clickPages}
            value={i}
            >
               {i}
         </button>
      ))
    }
   
   return(
      <nav>    
        <button 
        onClick={() => {
           getCharacters(prevPage)
        }
      }
        >Previous</button>
         {pageNumbers}
         <button 
         onClick={
            async () => await fetch(nextPage)}
         >Next</button>
      </nav>
      
   )
 }
 
 export default Pagination 