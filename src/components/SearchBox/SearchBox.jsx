import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { searchContact } from "../../redux/contactsOps";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    dispatch(searchContact(event.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <label htmlFor="search">Find contacts by name:</label>
      <input
        className={css.searchInput}
        type="text"
        id="search"
        value={nameFilter}
        onChange={handleSearch}
      />
    </div>
  );
};
export default SearchBox;
