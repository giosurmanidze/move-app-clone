import React from "react";
import seasons from "../data/MovieSeasons";
import SeasonCard from "./SeasonCard";
import "./styles/Seasions.css";

const Seasons = () => {
  return (
    <div className="Seasons__movie--list">
      <h2>ახალი ეპიზოდები</h2>
      <div className="Seasons__movie">
        {seasons.map((season) => (
          <SeasonCard key={season.id} season={season} />
        ))}
      </div>
    </div>
  );
};

export default Seasons;
