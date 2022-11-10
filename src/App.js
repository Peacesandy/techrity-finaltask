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

     useEffect(() =>{
     fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
       (result) => {
         setIsLoaded(true)
          setItems(result)
        },
        (error) =>{
         setIsLoaded(true)
          setError(error)
        }
      )
     }, [])

     if(error) {
       return<>{error.message}</>
     }else if (!isLoaded){
      return<>loading...</>
     }else
  return (
    <div className="App">
       <Header />
       <Search />
       <Table countries={items} />
       <Footer />
    </div>
  );
}

export default App;
