import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/hamburgerSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    if (searchQuery) {
      console.log("SearchQuery ---->", searchQuery);
      const timer = setTimeout(() => getSearchSuggestions(), 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    console.log("API Response", json[1]);
    setSuggestions(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="sticky top-0 grid grid-flow-col p-5 m-2 bg-white shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <img
          className="h-8 mt-2 mx-2"
          alt="YouTube Logo"
          src="https://as1.ftcdn.net/v2/jpg/07/66/53/88/1000_F_766538826_LxieHdnMmjH6ExbDnv4AuLqKsNyieSSG.jpg"
        />
      </div>
      <div className="col-span-10">
        <div>
          <input
            className="border border-solid border-gray-400 w-9/12 p-2 rounded-l-full bg-[url('https://www.shareicon.net/data/64x64/2015/09/01/94156_search_512x512.png')] bg-no-repeat pl-10"
            style={{
              backgroundSize: "24px 24px",
              backgroundPosition: "10px center",
            }}
            type="text"
            alt="search-text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-solid border-gray-400 p-2 w-16 rounded-r-full bg-[url('https://www.shareicon.net/data/64x64/2015/09/01/94156_search_512x512.png')] bg-no-repeat bg-center border-l-0 bg-gray-100"
            style={{ backgroundSize: "24px 24px" }}
            alt="sarch-button"
          >
            &nbsp;
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 w-[52%] ml-[10px] shadow-lg rounded-lg border border-gray-100 opacity-95">
            <ul>
              {suggestions.length > 0 &&
                suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="bg-[url('https://www.shareicon.net/data/64x64/2015/09/01/94156_search_512x512.png')] bg-no-repeat pl-5 hover:bg-gray-100"
                    style={{
                      backgroundSize: "24px 24px",
                      paddingLeft: "30px",
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user-icon"
          src="https://openclipart.org/image/800px/247319"
        />
      </div>
    </div>
  );
};

export default Header;
