import React from 'react'
import  Table from './components/Table';
import  SearchBar from './components/SearchBar';
import  Pagination from './components/Pagination';


const App = () => {
  return (
    <div>
        <SearchBar />
        <Table />      
        <Pagination />
    </div>
  )
}

export default App;
