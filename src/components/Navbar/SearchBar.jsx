// SearchBar.jsx
import React, {useState, useEffect} from 'react';

function SearchBar({ data, onSearch }) {

  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  }

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
      <input
        id="searchInput"
        type="text"
        placeholder="Search for hotels..."
        className="ml-auto w-full px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-0"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} 
      />
    </div>
  );
}

export default SearchBar;

