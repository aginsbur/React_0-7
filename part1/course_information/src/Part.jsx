const Part = (props)=>{
    const part=props.part;
    const exercise=props.exercise;
    return (
      <div>
       <p>  {part} {exercise}</p>
      </div>
    )
  }

  export default Part;