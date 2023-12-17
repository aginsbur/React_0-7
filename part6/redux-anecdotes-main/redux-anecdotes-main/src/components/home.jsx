import AnecdoteList from "./anecdoteList";
import Notification from "./Notification"
import Filter from "./Filter";
const Home = () => {
  return (
    <div className="container">
      <Notification />
      <Filter />
      <AnecdoteList />
    </div>
  );
};
export default Home;
