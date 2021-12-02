import { React } from "react";
import { useState, useEffect } from "react";

function Home() {
  const [podcasts, setPodcasts] = useState([]);
  const [recentPodcasts, setRecentPodcasts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/podcasts")
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);

  useEffect(() => {
    let topPodcasts = podcasts.slice(-4);
    setRecentPodcasts(topPodcasts);
  }, [podcasts]);

  function renderRecentPodcasts() {
    return recentPodcasts.map((podcasts) => {
      return (
        <div className="parent" key={podcasts.thumbnail}>
          <div className="podcast-card">
            <img
              src={podcasts.thumbnail}
              alt="podcast thumbnail"
              className="podcast-thumbnail"
            />
            <h2 className="card-info">{podcasts.name}</h2>
            <h3 className="card-info">{podcasts.host}</h3>
            <p className="card-info">{podcasts.description}</p>
            <p className="card-info">{podcasts.genre}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <h1 className="centered-header">Trending Podcasts</h1>
      <div className="podcast-container">{renderRecentPodcasts()}</div>
    </div>
  );
}

export default Home;
