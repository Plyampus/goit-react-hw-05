import PropTypes from "prop-types";
import css from "./SearchBar.module.css"

export default function SearchBar({ onSubmit }) {
  return (
    <div className="container">
      <form onSubmit={onSubmit} className={css.form}>
        <input
          type="text"
          name="movieName"
          placeholder="Enter the title to search"
          autoComplete="off"
          autoFocus
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          className={css.input}
        />
        <button type="submit" className={css.btnSearch}>
          Search
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
