import React, { useState, useRef, useEffect } from "react";
import AutoDetectLocation from './AutoDetectLocation';

const LocationAutocomplete = ({ onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dropdownRef = useRef(null);

  const apiKey = "AlzaSyEdpPdwTcPvcaNtMzDO7qj_Vdi4ppipcsJ";

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch suggestions.");
      }

      const data = await response.json();
      setSuggestions(data.predictions || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setError("Failed to fetch suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  const handleLocationDetected = (address) => {
    setQuery(address);
    setSuggestions([]);
    // Call onSelect with the address string
    onSelect(address);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.description);
    setSuggestions([]);
    onSelect(suggestion);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex flex-row gap-7 items-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter location"
          className="px-4 py-2 w-full h-20 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <AutoDetectLocation onLocationDetected={handleLocationDetected} />
      </div>

      {loading && <p className="mt-2 text-gray-600">Loading...</p>}
      {error && <p className="mt-2 text-red-600">{error}</p>}

      {suggestions.length > 0 && (
        <ul className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationAutocomplete;