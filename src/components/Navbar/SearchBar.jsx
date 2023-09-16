// SearchBar.jsx
import React from 'react';
import { useState } from 'react';

function SearchBar({ data, onSearch }) {

  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  }

  return (
    <div className="flex flex-row">
      <input
        type="text"
        placeholder="Search for hotels..."
        className="ml-auto w-full px-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
