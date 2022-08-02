import React from 'react'

const Pagination = ({totalPages, clickPages, previous, next}) => {
  
   const pageNumbers = []

   for (let i = 1; i <= Math.ceil(totalPages); i++) {
      pageNumbers.push((
         <button
            key={i}
            className='page--numbers'
            onClick={clickPages}
            value={i}
            >
               {i}
         </button>
      ))
    }
   
   return(
      <nav>
         <button onClick={previous}>Previous</button>
         {pageNumbers}
         <button onClick={next}>Next</button>
      </nav>
      
   )
 }
 
 export default Pagination 