import React from "react";
import "./Search.css";
interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ query, setQuery }) => {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Поиск заметок"
      />
    </div>
  );
};

export default Search;
