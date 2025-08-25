import React, { useState } from "react";
import Popup from "./popups/Popup";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

interface Props {
  onClose: () => void;
}

const SearchBox = ({ onClose }: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Simulated search (replace with API call)
    if (value.length > 1) {
      const mockResults = [
        "Custom Packaging Boxes",
        "Eco-friendly Boxes",
        "Luxury Rigid Boxes",
        "Food Packaging",
        "Mailer Boxes",
      ].filter((item) => item.toLowerCase().includes(value.toLowerCase()));
      setResults(mockResults);
    } else {
      setResults([]);
    }
  };

  return (
    <Popup>
      <div className="bg-white rounded-lg shadow-xl px-6 pt-12 pb-6 w-full max-w-lg relative overflow-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <RxCross2 className="size-6" />
        </button>

        {/* Search input */}
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
          <FiSearch className="text-gray-400 size-5 mr-2" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full outline-none text-gray-700"
          />
        </div>

        {/* Results */}
        <div className="mt-4 max-h-60 overflow-y-auto">
          {results.length > 0 ? (
            <ul className="space-y-2">
              {results.map((item, idx) => (
                <li
                  key={idx}
                  className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            query.length > 1 && (
              <p className="text-gray-500 text-sm mt-2">No results found.</p>
            )
          )}
        </div>
      </div>
    </Popup>
  );
};

export default SearchBox;
