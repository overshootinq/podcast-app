import { ImSearch } from "react-icons/im";

function Search() {
  function handleClick() {
    console.log("clicked");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          id="search"
          placeholder="search"
        />
        <ImSearch size={30} onClick={handleClick} className="search-icon" />
      </form>
    </div>
  );
}

export default Search;
