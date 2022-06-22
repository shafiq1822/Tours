import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'

const url = 'http://course-api.com/react-tours-project'; 

const App = () => {

  const [isLoading, setIsLoading] = useState(false);

  const [tours, setTours] = useState([{id: 1, name: 'Mohammed', info: 'lorem ipsum dolor', image: 'url', price: 2000}]);

  const fetchtours = async () => {
    // setIsLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
        setTours(tours)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchtours();
  }, []);


 if(isLoading){
   return(
     <main>
       <Loading/>
     </main>
   );
 }
 return(
   <main>
     <Tours tours={tours}/>
   </main>
 )
}

export default App