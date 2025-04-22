import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
        placeholder="Start typing..."
      />
    </div>
  );
}

export default SearchBox;
