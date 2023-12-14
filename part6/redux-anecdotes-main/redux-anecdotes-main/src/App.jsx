import AnecdoteList from "./components/anecdoteList";
import NewAnecdote from "./components/anecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {
  return (
    <div>
      <Notification/>
      <Filter />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  );
};

export default App;
