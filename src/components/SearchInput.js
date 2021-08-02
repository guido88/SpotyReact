import "./SearchInput.css";

const SearchInput = (props) => {
  return (
    <div className="search-input">
      <div className="search__controls">
        <div className="search__control">
          <h1>Search Spotify New Releases</h1>
          <label htmlFor="album">Type in: </label>
          <input
            id="album"
            type="text"
            onChange={(event) => props.handleTypeIn(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
