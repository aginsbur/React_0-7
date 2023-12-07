import Part from "./Part";

const Content = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      <ul>
        {parts.map((p) => (
          <li key={p.id}>
            <Part part={p.name} exercises={p.exercises} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
