const FilterList = ({ setCategory, setSort, setOrder }) => {
  return (
    <div className="filter-bar">
      <label className="filter-label">Category: </label>
      <select
        className="filter-option"
        onChange={(e) => setCategory(e.target.value)}
        id="category"
      >
        <option value="dexterity">all</option>
        <option value="dexterity">dexterity</option>
        <option value="hidden-roles">hidden roles</option>
        <option value="strategy">strategy</option>
        <option value="deck-building">deck building</option>
        <option value="engine-building">engine building</option>
        <option value="push-your-luck">push your luck</option>
        <option value="roll-and-write">roll and write</option>
      </select>
      <label className="filter-label">Sort by: </label>
      <select
        className="filter-option"
        onChange={(e) => setSort(e.target.value)}
        id="sort_by"
      >
        <option value="created_at">created</option>
        <option value="title">title</option>
        <option value="votes">votes</option>
      </select>
      <label className="filter-label">Order: </label>
      <select
        className="filter-option"
        onChange={(e) => setOrder(e.target.value)}
        id="order"
      >
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
};

export default FilterList;
