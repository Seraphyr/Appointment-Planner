import React from "react";
import Tile from "./Tile"; // Corrección en la importación de Tile

const TileList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Tile key={item.id} item={item} /> // Suponiendo que cada item en data tiene un atributo id único
      ))}
    </div>
  );
};

export default TileList;
