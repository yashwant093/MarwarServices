const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search mohalla/locality..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;