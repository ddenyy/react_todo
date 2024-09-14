import React from "react";
import "./Filter.css";
interface FilterProps {
  showFavorites: boolean;
  setShowFavorites: (show: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({ showFavorites, setShowFavorites }) => {
  return (
    <div className="filter-wrapper">
      <label>
        <input
          type="checkbox"
          checked={showFavorites}
          onChange={() => setShowFavorites(!showFavorites)}
        />
        Показать только избранные
      </label>
    </div>
  );
};

export default Filter;
