import { useEffect, useState } from "react";
import { SEARCH_ICON_SVG_URL, YOUTUBE_SEARCH_API } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../store/headerSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const searchCache = useSelector((store) => store.header.searchCache);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  return (
    <div className="w-[40%] ml-[18%] mt-2 relative">
      <form className=" flex h-12">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pb-1 w-[88%] pl-4 border-2 border-gray-200 border-solid shadow-inner rounded-l-full text-md outline-none focus:border-blue-800 focus:border-[1px] focus:shadow-blue-100"
          onFocus={() => {
            setShowSuggestions(true);
          }}
          onBlur={() => {
            setShowSuggestions(false);
          }}
        />
        <div className="w-[12%] rounded-r-full bg-gray-100 hover:bg-gray-200">
          <button className="pl-4 pt-3">
            <svg
              xmlns={SEARCH_ICON_SVG_URL}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>
      {showSuggestions && suggestions.length !== 0 && (
        <div className="ml-3 pl-2 bg-white shadow-lg mt-1 rounded-lg w-[86%] border border-gray-100 absolute top-full">
          <ul>
            {suggestions.map((s, index) => (
              <li key={index} className="p-1 hover:bg-gray-200 rounded-md">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
