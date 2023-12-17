import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";
import service from "../services/anecdotes";
import { Link } from "react-router-dom";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material'
const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    return state.anecdotes.filter((a) => a.content.includes(state.filter));
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Anecdotes</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {anecdotes.map((anecdote) => (
              <div key={anecdote.id}>
                <Link to={`/anecdotes/${anecdote.id}`}>
                  <div>{anecdote.content}</div>
                </Link>
                <div>
                  has {anecdote.votes}
                  <button
                    onClick={() => {
                      dispatch(vote(anecdote.id));
                      service.update(anecdote.id, anecdote.votes + 1);
                      dispatch(notify(`you voted ${anecdote.content}`, 5));
                    }}
                  >
                    vote
                  </button>
                </div>
              </div>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default AnecdoteList;
