import { useState } from "react";
import { isEqual } from "lodash";
const PersonForm=({persons,setPersons})=>{
    const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
 
  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };
    // persons.forEach((p) => {
    //   if (isEqual(personObj, p)) {
    //     alert(`${newName} is already in your phonebook`);
    //   }
    console.log(personObj);
    // });
    setPersons(persons.concat(personObj));
    console.log(persons);

    setNewName("");
    setNewNumber("");
  };

return(
    <>
    <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
)
}
export default PersonForm;