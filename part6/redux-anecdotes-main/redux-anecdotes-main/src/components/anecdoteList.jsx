import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {

  const anecdotes = useSelector((state) => {
    return state.anecdotes.filter((a) => a.content.includes(state.filter));
  });

  const dispatch = useDispatch();
  const vote1 = (id) => {
    dispatch(vote(id));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote1(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnecdoteList;
