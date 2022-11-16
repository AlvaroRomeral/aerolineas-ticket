import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import NotFoundPage from "./pages/NotFoundPage";
import OriginPage from "./pages/OriginPage";
import DestinyPage from "./pages/DestinyPage";
import "./App.css";

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [citydata, setCitydata] = useState([]);

  useEffect(() => {

    fetch("http://localhost:8088/costumers", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCitydata(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OriginPage />} />
        <Route path="/origen/:origen" element={<DestinyPage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
