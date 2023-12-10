
import { useEffect ,useState} from "react";
const Filter = ({ collection, setFilteredCollection }) => {
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filteredColletion = collection.filter((element) =>
      element.name.toLowerCase().includes(filter)
    );
    setFilteredCollection(filteredColletion);
  }, [filter,collection]);
  return (
    <>
      <div>
        filter shown with{" "}
        <input
          onChange={(e) => setFilter(e.target.value.toLocaleLowerCase())}
          value={filter}
        />
      </div>
    </>
  );
};

export default Filter;
