import AnecdoteList from "./components/anecdoteList";
import NewAnecdote from "./components/anecdoteForm";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <Filter />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  );
};

export default App;
