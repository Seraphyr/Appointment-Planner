import React from "react";

const Tile = ({ item }) => {
  return (
    <div className="tile-container">
      {Object.entries(item).map(([property, value]) => (
        <p key={property} className={property === "title" ? "tile tile-title" : "tile"}>
          {value}
        </p>
      ))}
    </div>
  );
};

export default Tile;
