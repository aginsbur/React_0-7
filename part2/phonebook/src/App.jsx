import { useEffect, useState } from "react";
import Filter from "./FIlter";
import PersonForm from "./PersonForm";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [filteredPersons, setFilteredPersons] = useState([
    { name: "Arto Hellas" },
  ]);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter collection={persons} setFilteredCollection={setFilteredPersons} />
      <h2>Add a new:</h2>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((p, i) => (
          <div key={p.name}>
            {p.name} {p.number}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
