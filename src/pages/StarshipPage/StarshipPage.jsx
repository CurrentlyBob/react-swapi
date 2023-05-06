import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getStarship } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipPage = () => {
  const [starship, setStarship] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchStarship = async () => {
      const ship = await getStarship(id);
      setStarship(ship);
    };
    fetchStarship();
  }, []);

  return (
    <div className="details-card">
      <h1 className="details-card-title">Name: {starship?.name}</h1>
      <h1 className="details-card-subtitle">Model: {starship?.model}</h1>
      <Link to="/" className="details-card-link">
        <div className="details-card-return">RETURN</div>
      </Link>
    </div>
  );
};

export default StarshipPage;
