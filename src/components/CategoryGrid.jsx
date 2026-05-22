import { useState } from 'react';
import './CategoryGrid.css';

const categoryIcons = {
  All: '✨',

  // HOME SERVICES
  Plumber: '🔧',
  Electrician: '⚡',
  Carpenter: '🪚',
  Painter: '🎨',
  Welder: '🔥',
  Mason: '🧱',
  'POP Work': '🏠',
  'Tiles Fitter': '⬜',
  'Glass Work': '🪟',

  // AC + ELECTRONICS
  'AC Repair': '❄️',
  'Mobile Repair': '📱',
  'Laptop Repair': '💻',
  'TV Repair': '📺',
  'Fridge Repair': '🧊',
  'Washing Machine Repair': '🧺',
  'RO Service': '💧',
  'Gas Stove Repair': '🍳',

  // VEHICLE
  Mechanic: '🚗',
  'Bike Mechanic': '🏍️',
  'Car Mechanic': '🚘',
  'Tyre Puncture': '🛞',
  'Battery Service': '🔋',

  // CLEANING
  Cleaning: '🧹',
  'House Cleaning': '🧼',
  'Water Tank Cleaning': '🚰',
  'Sofa Cleaning': '🛋️',

  // BEAUTY
  Salon: '💇',
  Beautician: '💄',
  'Mehndi Artist': '🌿',

  // EVENT
  Photographer: '📸',
  'DJ Service': '🎵',
  'Tent House': '⛺',
  Catering: '🍽️',

  // FOOD & DELIVERY
  'Milk Delivery': '🥛',
  'Tiffin Service': '🍱',

  // CONSTRUCTION
  'Interior Designer': '🛋️',
  Architect: '📐',
  Contractor: '🏗️',

  // HEALTH
  Nurse: '🩺',
  Physiotherapist: '🦴',

  // OTHER
  'Packers & Movers': '📦',
  'Pest Control': '🐜',
  'Security Guard': '🛡️'
};

function CategoryGrid({
  categories,
  selectedCategory,
  setCategory
}) {
  const [showAll, setShowAll] = useState(false);

  // 👉 default 6 visible categories
  const visibleCategories = showAll
    ? categories
    : categories.slice(0, 6);

  return (
    <div className="category-wrapper">

      <div className="category-grid">

        {visibleCategories.map((item) => (
          <button
            key={item}
            className={
              selectedCategory === item
                ? 'category-btn active'
                : 'category-btn'
            }
            onClick={() => setCategory(item)}
          >
            <span className="category-icon">
              {categoryIcons[item] || '🛠️'}
            </span>

            <span className="category-text">
              {item}
            </span>
          </button>
        ))}

      </div>

      {/* SHOW MORE BUTTON */}
      {categories.length > 6 && (
        <button
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less ▲' : 'Show More ▼'}
        </button>
      )}

    </div>
  );
}

export default CategoryGrid;