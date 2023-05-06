import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";
import "./Starships.css";



const Starships = () => {
  const [starships, setStarships] = useState([]);

  const getIdFromUrl = (url) => url.match(/(\d+)/)[0];

  useEffect(() => {
    const fetchStarships = async () => {
      const ships = await getAllStarships();
      setStarships(ships.results);
    };
    fetchStarships();
  }, []);

  if (!starships.length) return <h1>Loading Starships...</h1>;
  return (
    <div className="content">
      {starships &&
        starships.map((starship, idx) => (
          <Link key={idx} to={`/starships/${getIdFromUrl(starship.url)}/`}>
            <div className="starship-card">{starship.name}</div>
          </Link>
        ))}
    </div>
  );
};

export default Starships;
