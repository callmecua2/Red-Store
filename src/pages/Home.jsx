import "./home.css";
import Display from "../components/Dipslay";
import List from "../components/List";
import Highlights from "../components/Highlights";
import Trending from "../components/Trending";
import Advertisement from "../components/Advertisement";

const Home = () => {
  return (
    <div className="container">
      <div className="home-wrapper">
        <Display />
        <List />
        <Highlights />
        <Trending />
        <Advertisement />
      </div>
    </div>
  );
};

export default Home;
