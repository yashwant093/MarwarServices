export const categories = [
  'All',

  // HOME SERVICES
  'Plumber',
  'Electrician',
  'Carpenter',
  'Painter',
  'Welder',
  'Mason',
  'POP Work',
  'Tiles Fitter',
  'Glass Work',

  // ELECTRONICS
  'AC Repair',
  'Mobile Repair',
  'Laptop Repair',
  'TV Repair',
  'Fridge Repair',
  'Washing Machine Repair',
  'RO Service',
  'Gas Stove Repair',

  // VEHICLE
  'Mechanic',
  'Bike Mechanic',
  'Car Mechanic',
  'Tyre Puncture',
  'Battery Service',

  // CLEANING
  'House Cleaning',
  'Water Tank Cleaning',
  'Sofa Cleaning',

  // BEAUTY
  'Salon',
  'Beautician',
  'Mehndi Artist',

  // EVENT
  'Photographer',
  'DJ Service',
  'Tent House',
  'Catering',

  // FOOD
  'Milk Delivery',
  'Tiffin Service',

  // CONSTRUCTION
  'Interior Designer',
  'Architect',
  'Contractor',

  // HEALTH
  'Nurse',
  'Physiotherapist',

  // OTHER
  'Packers & Movers',
  'Pest Control',
  'Security Guard'
];

export const mohallas = {
  'Sojat City': [
    'All',
    'Main Bazar',
    'Station Road',
    'Bagri Chowk',
    'Old Bus Stand'
  ],

  Bilara: [
    'All',
    'Sadar Bazar',
    'Jetaran Road',
    'Patel Nagar',
    'Railway Colony'
  ]
};

export const mockProviders = [

  // PLUMBER
  {
    id: 1,
    name: 'Raju Plumbing Works',
    category: 'Plumber',
    city: 'Sojat City',
    mohalla: 'Main Bazar',
    phone: '9876543210',
    rating: 4.7
  },

  // ELECTRICIAN
  {
    id: 2,
    name: 'Hanuman Electricals',
    category: 'Electrician',
    city: 'Sojat City',
    mohalla: 'Station Road',
    phone: '9876500001',
    rating: 4.8
  },

  // CARPENTER
  {
    id: 3,
    name: 'Sharma Carpenter',
    category: 'Carpenter',
    city: 'Sojat City',
    mohalla: 'Bagri Chowk',
    phone: '9876500002',
    rating: 4.5
  },

  // AC REPAIR
  {
    id: 4,
    name: 'Cool Air Service',
    category: 'AC Repair',
    city: 'Bilara',
    mohalla: 'Sadar Bazar',
    phone: '9876500003',
    rating: 4.9
  },

  // MECHANIC
  {
    id: 5,
    name: 'Bilara Auto Garage',
    category: 'Mechanic',
    city: 'Bilara',
    mohalla: 'Jetaran Road',
    phone: '9876500004',
    rating: 4.6
  },

  // PAINTER
  {
    id: 6,
    name: 'Royal Painter House',
    category: 'Painter',
    city: 'Bilara',
    mohalla: 'Patel Nagar',
    phone: '9876500005',
    rating: 4.7
  },

  // MOBILE REPAIR
  {
    id: 7,
    name: 'Mobile Care Center',
    category: 'Mobile Repair',
    city: 'Sojat City',
    mohalla: 'Old Bus Stand',
    phone: '9876500006',
    rating: 4.6
  },

  // LAPTOP REPAIR
  {
    id: 8,
    name: 'Tech Laptop Repair',
    category: 'Laptop Repair',
    city: 'Bilara',
    mohalla: 'Railway Colony',
    phone: '9876500007',
    rating: 4.5
  },

  // TV REPAIR
  {
    id: 9,
    name: 'Shree TV Service',
    category: 'TV Repair',
    city: 'Sojat City',
    mohalla: 'Main Bazar',
    phone: '9876500008',
    rating: 4.4
  },

  // BIKE MECHANIC
  {
    id: 10,
    name: 'Rider Bike Garage',
    category: 'Bike Mechanic',
    city: 'Bilara',
    mohalla: 'Jetaran Road',
    phone: '9876500009',
    rating: 4.8
  },

  // HOUSE CLEANING
  {
    id: 11,
    name: 'Clean Home Services',
    category: 'House Cleaning',
    city: 'Sojat City',
    mohalla: 'Station Road',
    phone: '9876500010',
    rating: 4.7
  },

  // SALON
  {
    id: 12,
    name: 'Modern Hair Salon',
    category: 'Salon',
    city: 'Bilara',
    mohalla: 'Patel Nagar',
    phone: '9876500011',
    rating: 4.5
  },

  // PHOTOGRAPHER
  {
    id: 13,
    name: 'Wedding Snap Studio',
    category: 'Photographer',
    city: 'Sojat City',
    mohalla: 'Bagri Chowk',
    phone: '9876500012',
    rating: 4.9
  },

  // CATERING
  {
    id: 14,
    name: 'Marwadi Catering',
    category: 'Catering',
    city: 'Bilara',
    mohalla: 'Sadar Bazar',
    phone: '9876500013',
    rating: 4.8
  },

  // TIFFIN
  {
    id: 15,
    name: 'Home Tiffin Service',
    category: 'Tiffin Service',
    city: 'Sojat City',
    mohalla: 'Old Bus Stand',
    phone: '9876500014',
    rating: 4.6
  },

  // INTERIOR DESIGNER
  {
    id: 16,
    name: 'Dream Interior Design',
    category: 'Interior Designer',
    city: 'Bilara',
    mohalla: 'Railway Colony',
    phone: '9876500015',
    rating: 4.7
  },

  // NURSE
  {
    id: 17,
    name: 'Care Home Nurse',
    category: 'Nurse',
    city: 'Sojat City',
    mohalla: 'Main Bazar',
    phone: '9876500016',
    rating: 4.8
  },

  // PACKERS
  {
    id: 18,
    name: 'Fast Packers Movers',
    category: 'Packers & Movers',
    city: 'Bilara',
    mohalla: 'Patel Nagar',
    phone: '9876500017',
    rating: 4.6
  },

  // SECURITY
  {
    id: 19,
    name: 'Safe Guard Services',
    category: 'Security Guard',
    city: 'Sojat City',
    mohalla: 'Station Road',
    phone: '9876500018',
    rating: 4.7
  },

  // PEST CONTROL
  {
    id: 20,
    name: 'Anti Pest Solution',
    category: 'Pest Control',
    city: 'Bilara',
    mohalla: 'Sadar Bazar',
    phone: '9876500019',
    rating: 4.5
  }
];