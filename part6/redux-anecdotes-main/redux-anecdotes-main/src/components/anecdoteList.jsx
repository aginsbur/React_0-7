import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";
import service from "../services/anecdotes"
const AnecdoteList = () => {
  
  const anecdotes = useSelector((state) => {
    return state.anecdotes.filter((a) => a.content.includes(state.filter));
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button
              onClick={() => {
                dispatch(vote(anecdote.id));
                service.update(anecdote.id,anecdote.votes+1);
                dispatch(notify(`you voted ${anecdote.content}`));
              }}
            >
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AnecdoteList;
