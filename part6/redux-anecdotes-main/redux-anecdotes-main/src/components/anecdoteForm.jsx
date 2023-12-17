import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";
import { useNavigate } from "react-router-dom";
const NewAnecdote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const addAnecdote = async (event) => {
    event.preventDefault();
    navigate("/");
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    dispatch(createAnecdote(content));
    dispatch(notify(`you added ${content}`, 5));
  };

  return (
    <>
      <h2>New Anecdote</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default NewAnecdote;
