import { useState, useEffect } from "react";

function Home() {
  const [podcasts, setPodcasts] = useState([]);
  const [trendingPodcasts, setTrendingPodcasts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/podcasts")
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);

  useEffect(() => {
    let topPodcasts = podcasts.slice(-4);
    setTrendingPodcasts(topPodcasts);
  }, [podcasts]);

  function renderTrendingPodcasts() {
    return trendingPodcasts.map((podcasts) => {
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

  return (
    <div>
      <h1 className="centered-header">Trending Podcasts</h1>
      <div className="podcast-container">{renderTrendingPodcasts()}</div>
    </div>
  );
}

export default Home;
