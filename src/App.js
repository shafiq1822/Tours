import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "http://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);

    setTours(updatedTours);
  };

  const fetchTours = async () => {
    // setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>Our Tours</h2>
        </div>
        <button className="btn_delete" onClick={()=>fetchTours()}>
          Refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};

export default App;
