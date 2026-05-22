import './FilterBar.css';

function FilterBar({
  mohalla,
  setMohalla,
  mohallasList
}) {
  return (
    <div className="filter-bar">

      <div className="search-box">
        <span className="search-icon">🔍</span>
        
        <select
          value={mohalla}
          onChange={(e) => setMohalla(e.target.value)}
        >
          {mohallasList.map((item) => (
            <option key={item} value={item}>
              {item === 'All' ? '📍 All Localities / Mohalla' : `📍 ${item}`}
            </option>
          ))}
        </select>
      </div>

      <button className="filter-btn">
        Find Services
      </button>

    </div>
  );
}

export default FilterBar;