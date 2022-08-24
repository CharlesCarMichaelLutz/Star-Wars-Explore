import React from 'react'

const Pagination = ({totalPages, previous, next, getCharacters}) => {
  
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
 
/* 

Having trouble getting exactly 9 page buttons to render when: 
   Math.ceil(totalPages)   //hardcoded to 9 currently  
         is entered as the second condition in the for loop 
         10 pages
         It may have to do with characterData only receiving 10 objects at a  time, and 
         it's not able to see how many total object characters are coming back from the API 
 */