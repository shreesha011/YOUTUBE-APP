import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const GOOGLE_SUGGEST_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  /*
      *searchCache ={
        "iphone":["iphone 11","iphone 14"]
      }
      *searchQuery=iphone

    */

  console.log(searchQuery);

  // whenever the serach query is changed need to call api
  useEffect(() => {
    // Makes an api call after 200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

    //Make an API call after key press
    //but if the differnce between 2 api calls is <200ms--decline the api call
  }, [searchQuery]);

  //Api Call uisng fetch method
  const getSearchSuggestions1 = async () => {
    console.log("Api call-" + searchQuery);
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query" +
        searchQuery
    );

    //convert the data into json format
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const getSearchSuggestions = async () => {
    console.log("Api call-" + searchQuery);
    try {
      const data = await fetch(`${GOOGLE_SUGGEST_API}${searchQuery}`);
      const json = await data.json();
      console.log(json);
      setSuggestions(json[1]);

      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Error fetching Google suggestions:", error);
    }
  };

  // It will Dispatch an action to Store Like Toggle menu handler is true or false

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {/* If the showSuggestion is true then execurte the bellow Code */}
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-3 shadow-sm hover:bg-gray-200"
                >
                  {" "}
                  🔍{suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
