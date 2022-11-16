import React from 'react';

//components
import Footer from './components/Footer';
import Search from './components/Search';
import Table from './components/Table';
import Header from './components/Header';
import './index.css'
import { useState, useEffect } from 'react';


function App() {
    const [error,setError] = useState(null)
     const [isLoaded, setIsLoaded] = useState(false)
     const [items, setItems] = useState([])
     const [toBeFiltered, setToBeFiltered] = useState ([])

     const handleSearch = (query) => {
      if (query != '') {
        const filteredItems = toBeFiltered.filter((country) => (country.name.toLowerCase().includes(query.toLowerCase())))
        setItems(filteredItems)
      }
     }

     useEffect(() =>{
     fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
       (result) => {
         setIsLoaded(true)
          setItems(result)
          setToBeFiltered(result)
        },
        (error) =>{
         setIsLoaded(true)
          setError(error)
        }
      )
     }, [])

     
  return (
    <div className="App">
       <Header />
       {!isLoaded ? <>Loading...</> : <Search filter={handleSearch} />}

       {error && error.message}
       {!isLoaded ? <>Loading...</> : <Table countries={items} />}
      
       <Footer />
    </div>
  );
}

export default App;
