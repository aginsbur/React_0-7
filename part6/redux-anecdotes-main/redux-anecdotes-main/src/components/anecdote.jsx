import { useMatch } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((a) => a.id === Number(match.params.id))
    : null;
  console.log(anecdote);
  return (
    <>
      <div>
        <h3>content</h3>
        <p>{anecdote.content}</p>
        <div>votes: {anecdote.votes}</div>
      </div>
    </>
  );
};
export default Anecdote;
