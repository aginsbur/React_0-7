import {initializeAnecdotes} from "./reducers/anecdoteReducer"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import AnecdoteList from "./components/anecdoteList";
import NewAnecdote from "./components/anecdoteForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []);

  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
      <NewAnecdote />
    </div>
  );
};

export default App;
