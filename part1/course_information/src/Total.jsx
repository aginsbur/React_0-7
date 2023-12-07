const total = (parts)=>{

const resultObj= parts.reduce((a, b) => ({exercises:a.exercises+b.exercises}))
return resultObj.exercises
}

const Total=({parts})=>{
    return (
        <p>Number of exercises {total(parts)}</p>
    )
}
export default Total
