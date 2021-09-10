import { useEffect, useState } from "react";
import "../styles/home.css";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="home">
      <div className="container">
        <h1 className="text-center">Client-server example</h1>
        <p>{!data ? "Loading..." : data}</p>
      </div>
      ;
    </div>
  );
};

export default Home;
