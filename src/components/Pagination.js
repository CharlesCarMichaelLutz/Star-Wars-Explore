import React from 'react'

const Pagination = ({previous, next, getCharacters}) => {
  
   const pageNumbers = []

   for (let i = 1; i <= 9 ; i++) {
      pageNumbers.push((
            <button
               key={i}
               className='page--numbers'
               onClick={(e) => getCharacters(e.target.value)}
               value={`https://swapi.dev/api/people/?page=${i}`}
               >   
                  {i}
            </button>   
      ))
    }
   return(
   <nav className='pagination'>       
      <button onClick={() => getCharacters(previous === null ? previous + 1 : previous)}>Previous</button>
       {pageNumbers}
       <button onClick={() => getCharacters(next === null ? next - 1 : next)}>Next</button>
    </nav>  
   )
 }
 export default Pagination 