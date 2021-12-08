import { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";

function Search() {
  const [podcasts, setPodcasts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/podcasts")
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);

  let filteredPodcastList = [];
  const filterPodcastList = podcasts.filter((podcast) => {
    if (
      podcast.name.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return filteredPodcastList.push(podcast);
    }
  });

  function handleSubmit(e){
    setSearchInput(e.target.value)
    console.log(searchInput)
  } 

  return (
    <div>
      <form className="search-form">
        <input
          onChange={handleSubmit}
          type="text"
          className="search-bar"
          id="search"
          placeholder="search"
        />
        <ImSearch
          size={30}
          onClick={handleSubmit}
          className="search-icon"
        />
      </form>
      <div className="podcast-container">{renderPodcasts()}</div>
    </div>
  );

  function renderPodcasts() {
    return filteredPodcastList.map((podcasts) => {
      return (
        <div className="podcast-card">
          <img
            src={podcasts.thumbnail}
            alt="podcast thumbnail"
            className="podcast-thumbnail"
          />
          <h2 className="card-info card-podcast-name">{podcasts.name}</h2>
          <h3 className="card-info">Hosted by: {podcasts.host}</h3>
          <p className="card-info">{podcasts.description}</p>
          <p className="card-info">Genre: {podcasts.genre}</p>
        </div>
      );
    });

  }
}

export default Search;
