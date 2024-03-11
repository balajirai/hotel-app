// SearchBar.jsx
import React, { useState, useEffect } from 'react';

function SearchBar({ data, onSearch }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 't' && !isFocused) {
        event.preventDefault();
        document.getElementById('searchInput').focus();
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [isFocused]); // Now include isFocused in the dependency array

  return (
    <div className="flex flex-row">
      <div className="relative">
        <input
          id="searchInput"
          type="text"
          placeholder="Search for hotels..."
          className="pl-4 pr-8 py-1 w-64 bg-inherit font-light rounded-md border border-gray-600 focus:outline-none focus:border-gray-400"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)} // Set isFocused to true when input is focused
          onBlur={() => setIsFocused(false)} // Set isFocused to false when input loses focus
        />
        <code className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-100 border border-gray-400 rounded-md py-0 px-1 text-xs">t</code>
      </div>
    </div>
  );
}

export default SearchBar;