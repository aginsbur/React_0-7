const Part = ({ part, exercises }) => {
  console.log('part',part)
  console.log('exercises',exercises)
  return (
    <div>
      <p>
        {part} {exercises}
      </p>
    </div>
  );
};

export default Part;

