import { useDispatch, useSelector } from "react-redux";
import { updateSearch, wordSuggestions, fetchWord } from "../store/searchSlice";
import { useState } from "react";
import { HiBookOpen } from "react-icons/hi";

const SearchBar = () => {
  const suggestions = useSelector((state) => state.search.suggestions);
  const dispatch = useDispatch();
  const [word, setWord] = useState("");

  const handleInputChange = (event) => {
    const newWord = event.target.value;

    // Update the local state
    setWord(newWord);

    if (newWord.trim() === "") {
      // Reset suggestions to an empty array if the search bar is empty
      dispatch(wordSuggestions(""));
    } else {
      // Dispatch word suggestions
      dispatch(wordSuggestions(newWord));
    }
  };

  const handleSuggestionClick = (clickedWord) => {
    // Dispatch fetchWord when a suggestion is clicked
    dispatch(fetchWord(clickedWord));

    // Update the search term in the state
    dispatch(updateSearch(clickedWord));

    // Clear the input field if needed
    setWord("");

    // Reset suggestions to an empty array
    dispatch(wordSuggestions(""));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dispatch word definition
    dispatch(fetchWord(word));

    // Update the search term in the state
    dispatch(updateSearch(word));

    // Clear the input field
    setWord("");

    // Reset suggestions to an empty array
    dispatch(wordSuggestions(""));
  };

  return (
    <div className="relative sm:flex sm:flex-row flex items-center flex-col sm:justify-between p-4  bg-stone-50">
      <div className="flex sm:justify-around ">
        <div className="sm:text-5xl p-2 text-2xl">
          {" "}
          <HiBookOpen />
        </div>
        <div>
          {" "}
          <h2 className="sm:text-4xl p-2 font-semibold">Free Dictionary </h2>
        </div>
      </div>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <input
            className="sm:p-2 rounded-full sm:w-96 w-80 text-center"
            type="search"
            placeholder="Search for a word...."
            onChange={handleInputChange}
            value={word}
          />
        </form>
        {suggestions.length > 0 && word.trim() !== "" && (
          <ul className="absolute top-12 left-0 right-0 bg-white border rounded-b-md shadow-lg">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion.word)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {suggestion.word}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
