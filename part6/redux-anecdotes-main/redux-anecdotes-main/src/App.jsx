import { initializeAnecdotes } from "./reducers/anecdoteReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AnecdoteList from "./components/anecdoteList";
import NewAnecdote from "./components/anecdoteForm";
import Home from "./components/home";
import Anecdote from "./components/anecdote";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []);

  const anecdotes = useSelector((state) => {
    return state.anecdotes;
  });

  const padding = {
    padding: 5,
  };

  return (
    <Router>
      <div className="container">
        <div>
          <Link style={padding} to="/anecdotes">
            anecdotes
          </Link>
          <Link style={padding} to="/createNew">
            create new
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/anecdotes" element={<AnecdoteList />} />
          <Route path="/createNew" element={<NewAnecdote />} />
          <Route
            path="/anecdotes/:id"
            element={<Anecdote anecdotes={anecdotes} />}
          />
        </Routes>

        <footer>
          <br />
          <em>Anecdote app, Department of Computer Science 2024</em>
        </footer>
      </div>
    </Router>
  );
};

export default App;
