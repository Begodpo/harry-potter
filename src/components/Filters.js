import FilterCharacter from "./FilterCharacter";
import FilterHouse from "./FilterHouse";
import "../styles/componentes/Filters.scss";
import FilterGender from "./FilterGender";

const handleSubmit = (ev) => {
  ev.preventDefault();
};

const Filter = (props) => {
  return (
    <section className="filters-section">
      <form className="form" action="" onSubmit={handleSubmit}>
        <FilterCharacter
          handleFilter={props.handleFilter}
          filterCharacter={props.filterCharacter}
        />
        <FilterHouse
          handleFilter={props.handleFilter}
          filterHouse={props.filterHouse}
        />
        <FilterGender
          handleFilter={props.handleFilter}
          filterGender={props.filterGender}
        />
      </form>
    </section>
  );
};

export default Filter;
